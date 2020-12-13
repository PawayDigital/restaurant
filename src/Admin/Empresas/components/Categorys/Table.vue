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
            <template v-slot:top>
              <v-toolbar flat>
                <v-toolbar-title>Categorias</v-toolbar-title>
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
                          <v-col cols="12" sm="6" md="12">
                            <v-text-field
                              v-model="editedItem.nombre"
                              label="Nombre de la categoria"
                            ></v-text-field>
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-card-text>

                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="blue darken-1" text @click="close">
                        Cancelar
                      </v-btn>
                      <v-btn
                        v-if="edit_id"
                        :disabled="loading"
                        color="blue darken-1"
                        text
                        @click="editar()"
                      >
                        editar
                      </v-btn>
                      <v-btn
                        v-else
                        :disabled="loading"
                        color="blue darken-1"
                        text
                        @click="save()"
                      >
                        Guardar
                      </v-btn>
                      <v-progress-circular
                        v-if="loading"
                        indeterminate
                        color="black"
                      ></v-progress-circular>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
                <v-dialog v-model="dialogDelete" max-width="500px">
                  <v-card>
                    <v-card-title class="headline text-center"
                      >Se eliminara esta categoria?</v-card-title
                    >
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="blue darken-1" text @click="closeDelete"
                        >Cancelar</v-btn
                      >
                      <v-btn
                        color="blue darken-1"
                        :disabled="loading"
                        text
                        @click="deleteItemConfirm"
                        >Confirmar</v-btn
                      >
                      <v-progress-circular
                        v-if="loading"
                        indeterminate
                        color="black"
                      ></v-progress-circular>
                      <v-spacer></v-spacer>
                    </v-card-actions>
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
import CrudService from "@/Admin/Empresas/services/crud.service";
export default {
  name: "Table",
  data: () => ({
    loading: false,
    dialog: false,
    dialogDelete: false,
    headers: [
      // tabla
      {
        text: "Nombre",
        align: "center",
        sortable: false,
        value: "nombre",
      },
      { text: "Acciones", value: "actions", sortable: false },
    ],
    edit_id: false,
    desserts: [],
    editedIndex: -1,
    editedItem: {
      nombre: "",
    },
    defaultItem: {
      nombre: "",
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "Nueva Categoria" : "Editar Categoria";
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
  },

  methods: {
    initialize() {
      CrudService.getCategorias().then((res) => {
        this.desserts = res.data.map((item) => {
          return {
            id: item.id,
            nombre: item.nombre,
          };
        });
      });
    },

    editItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
      this.edit_id = true;
      localStorage.setItem("id", this.editedItem.id);
    },

    deleteItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
      localStorage.setItem("id", this.editedItem.id);
    },

    deleteItemConfirm() {
      this.loading = true;
      const id = localStorage.getItem("id");
      console.log(id);
      CrudService.categoriaDelete(id)
        .then((res) => {
          this.loading = false;
          localStorage.removeItem("id");
          swal("eliminado!", "se elimino la categoria", "success");
          this.closeDelete();
          this.desserts.splice(this.editedIndex, 1);
          this.loading = false;
        })
        .catch((error) => {
          console.log(error);
          swal(
            "Ha ocurrido un error!",
            "tu categoria no se ha eliminado",
            "error"
          );
        });
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
    editar() {
      this.loading = true;
      // metodo axios
      const id = localStorage.getItem("id");
      console.log(id);
      CrudService.categoriaUpdate(
        {
          nombre: this.editedItem.nombre,
        },
        id
      )
        .then((res) => {
          if (this.editedIndex > -1) {
            Object.assign(this.desserts[this.editedIndex], this.editedItem);
          } else {
            this.desserts.push(this.editedItem);
          }
          this.close();
          swal("actualizado!", "se actualizo una categoria", "success");
          this.loading = false;
        })
        .catch((error) => {
          console.log(error);
          swal(
            "Ha ocurrido un error!",
            "tu categoria no se ha actualizado",
            "error"
          );
        });
    },

    save() {
      this.loading = true;
      // metodo axios
      CrudService.categoriaSave({
        nombre: this.editedItem.nombre,
      })
        .then((res) => {
          if (this.editedIndex > -1) {
            Object.assign(this.desserts[this.editedIndex], this.editedItem);
          } else {
            this.desserts.push(this.editedItem);
          }
          this.close();
          swal("Agregado!", "agregaste una categoria", "success");
          this.loading = false;
          this.$router.push((location.href = "/categorias"));
        })
        .catch((error) => {
          console.log(error);
          swal(
            "Ha ocurrido un error!",
            "tu categoria no se ha guardado",
            "error"
          );
        });
    },
  },
};
</script>
