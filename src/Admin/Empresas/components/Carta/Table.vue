<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12" sm="12" md="10" class="offset-lg-2">
          <v-data-table
            :headers="headers"
            :items="desserts"
            sort-by="calories"
            class="elevation-1"
          >
            <template v-slot:[`item.imagen`]="{ item }">
              <img
                :src="_urlImageTable + item.imagen"
                :alt="item.name"
                width="50px"
                height="50px"
              />
            </template>
            <template v-slot:top>
              <v-toolbar flat>
                <v-toolbar-title>Productos</v-toolbar-title>
                <v-divider class="mx-4" inset vertical></v-divider>
                <v-spacer></v-spacer>
                <v-dialog v-model="dialog" max-width="500px">
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      color="black"
                      dark
                      class="mb-2"
                      v-bind="attrs"
                      v-on="on"
                    >
                      Agregar
                    </v-btn>
                  </template>
                  <v-card id="theme-carta">
                    <v-card-title>
                      <span class="headline">{{ formTitle }}</span>
                    </v-card-title>

                    <v-card-text>
                      <v-container>
                        <v-row>
                          <!-- formulario -->
                          <v-col cols="12" sm="6" md="6">
                            <v-text-field
                              v-model="editedItem.nombre"
                              label="Nombre"
                              type="text"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12" sm="6" md="6">
                            <v-text-field
                              v-model="editedItem.precio"
                              label="Precio"
                              type="number"
                              required
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12" sm="6" md="6">
                            <v-img
                              :src="previewImage"
                              height="100"
                              width="100%"
                            ></v-img>

                            <v-btn block class="mt-4" @click="selectImage"
                              >Subir imagen</v-btn
                            >
                            <input
                              ref="fileInput"
                              style="display: none;"
                              accept="image/*"
                              type="file"
                              @input="pickFile"
                            />
                          </v-col>
                          <v-col cols="12" sm="6" md="6">
                            <v-textarea
                              clearable
                              v-model="editedItem.descripcion"
                              clear-icon="mdi-close-circle"
                              auto-grow
                              label="Descripcion"
                            ></v-textarea>
                          </v-col>
                          <v-col cols="12" sm="6" md="6">
                            <select
                              v-model="editedItem.categoria"
                              class="select-css"
                            >
                              <option value="">seleccione la Categoria</option>
                              <option
                                v-for="categori in cate"
                                v-bind:key="categori.id"
                                :value="categori.id"
                                >{{ categori.nombre }}</option
                              >
                            </select>
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-card-text>

                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="blue darken-1" text @click="close">
                        Cancelar
                      </v-btn>
                      <v-btn color="blue darken-1" text @click="save">
                        Guardar
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
                <v-dialog v-model="dialogDelete" max-width="500px">
                  <v-card>
                    <!-- <template v-slot:[`item.actions`]="{ item }"> -->
                    <v-card-title class="headline text-center"
                      >Se eliminara este producto?</v-card-title
                    >
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="blue darken-1" text @click="closeDelete"
                        >Cancelar</v-btn
                      >
                      <v-btn
                        color="blue darken-1"
                        text
                        @click="deleteItemConfirm()"
                        >Confirmar</v-btn
                      >
                      <v-spacer></v-spacer>
                    </v-card-actions>
                    <!-- </template> -->
                  </v-card>
                </v-dialog>
              </v-toolbar>
            </template>
            <template v-slot:[`item.actions`]="{ item }">
              <v-icon small class="mr-2" @click="editItem(item)">
                mdi-pencil
              </v-icon>
              <v-icon small @click="deleteItem(item)">
                mdi-delete
              </v-icon>
            </template>
            <template v-slot:no-data>
              <v-btn color="black" dark @click="initialize">
                Reiniciar
              </v-btn>
            </template>
          </v-data-table>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";
import swal from "sweetalert";
export default {
  name: "Table",
  data: () => ({
    dialog: false,
    dialogDelete: false,
    headers: [
      // tabla
      {
        text: "imagen",
        align: "center",
        sortable: false,
        value: "imagen",
      },
      {
        text: "Nombre",
        align: "center",
        sortable: false,
        value: "nombre",
      },
      {
        text: "Precio",
        align: "center",
        sortable: false,
        value: "precio",
      },
      { text: "Acciones", value: "actions", sortable: false },
    ],
    previewImage: "https://via.placeholder.com/150",
    select: { state: "Florida", abbr: "FL" },
    cate: [],

    desserts: [],
    editedIndex: -1,
    editedItem: {
      id: null,
      nombre: "",
      descripcion: "",
      categoria: "",
      url: null,
      precio: null,
    },
    defaultItem: {
      nombre: "",
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "Nuevo Producto" : "Editar Producto";
    },
    _urlImageTable() {
      return process.env.VUE_APP_RUTA_API;
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },

  created() {
    this.initialize();
    this.categorias();
  },

  methods: {
    selectImage() {
      this.$refs.fileInput.click();
    },
    pickFile() {
      let input = this.$refs.fileInput;
      let file = input.files;
      if (file && file[0]) {
        let reader = new FileReader();
        reader.onload = (e) => {
          this.previewImage = e.target.result;
        };
        reader.readAsDataURL(file[0]);
        this.$emit("input", file[0]);
      }
      this.editedItem.url = file[0]; //this.url es la imagen que se envia a la base de datos
    },
    categorias() {
      axios
        .get(process.env.VUE_APP_RUTA_API + "/categorias", {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        })
        .then((res) => {
          this.cate = res.data;
        });
    },
    initialize() {
      axios
        .get(process.env.VUE_APP_RUTA_API + "/productos", {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        })
        .then((res) => {
          this.desserts = res.data.map((item) => {
            // console.log(item);
            for (const object of res.data) {
              const image = object.imagen.url;
              const _urlImage = process.env.VUE_APP_RUTA_API + image;
              const imagen = JSON.stringify(_urlImage);
            }
            return {
              id: item.id,
              imagen: JSON.stringify(item.imagen.url).replace(/['"]+/g, ""),
              nombre: item.nombre,
              precio: item.precio,
            };
          });
        });
    },

    editItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
      localStorage.setItem("id", this.editedItem.id);
    },

    deleteItemConfirm() {
      // metodo axios
      const id = localStorage.getItem("id");
      axios
        .delete(process.env.VUE_APP_RUTA_API + "/productos/" + id, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        })
        .then((res) => {
          localStorage.removeItem("id");
          swal("eliminado!", "se elimino el producto", "success");
        })
        .catch((error) => {
          console.log(error);
          swal(
            "Ha ocurrido un error!",
            "tu producto no se ha eliminado",
            "error"
          );
        });
      this.desserts.splice(this.editedIndex, 1);
      this.closeDelete();
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save() {
      const data = {
        nombre: this.editedItem.nombre,
        descripcion: this.editedItem.descripcion,
        precio: this.editedItem.precio,
        categorias: [this.editedItem.categoria],
        estado: true,
      };
      const fd = new FormData();
      fd.append("files.imagen", this.editedItem.url);
      fd.append("data", JSON.stringify(data));
      axios
        .post(
          process.env.VUE_APP_RUTA_API + "/productos",

          fd,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        )
        .then((res) => {
          if (this.editedIndex > -1) {
            Object.assign(this.desserts[this.editedIndex], this.editedItem);
          } else {
            this.desserts.push(this.editedItem);
          }
          swal("Agregado!", "agregaste un nuevo producto", "success");
          this.close();
        })
        .catch((error) => {
          console.log(error);
          swal(
            "Ha ocurrido un error!",
            "tu producto no se ha guardado",
            "error"
          );
        });
    },
  },
};
</script>
