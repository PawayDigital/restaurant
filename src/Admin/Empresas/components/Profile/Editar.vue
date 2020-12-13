<template>
  <div id="profile" style="height: 100vh;" class="d-flex align-center">
    <v-container>
      <v-form @submit.prevent="update">
        <v-row>
          <v-col cols="12" sm="8" md="3" class="offset-sm-2 offset-md-3 pb-0">
            <v-img
              :src="previewImage"
              height="250"
              width="100%"
              srcset=""
            ></v-img>

            <v-btn block class="mt-4" @click="selectImage">Subir imagen</v-btn>
            <input
              ref="fileInput"
              style="display: none;"
              accept="image/*"
              type="file"
              @input="pickFile"
            />
          </v-col>

          <v-col cols="12" sm="8" md="4" class=" offset-1 pb-0">
            <div class="text-center title font-weight-medium mt-16">
              Informacion de la empresa
            </div>
            <div style="height: 200px;" class="d-flex align-end">
              <v-text-field
                label="Nombre de la empresa"
                v-model="n_empresa"
                type="text"
                required
              >
              </v-text-field>
            </div>
          </v-col>
          <v-col cols="12" sm="8" md="4" class="offset-sm-2 offset-md-3 pb-0">
            <v-text-field
              label="Correo"
              v-model="email"
              type="email"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="8" md="4">
            <v-text-field
              label="Contraseña"
              v-model="password"
              type="password"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="8" md="4" class="offset-sm-2 offset-md-3 pb-0">
            <v-textarea
              clearable
              v-model="descripcion"
              clear-icon="mdi-close-circle"
              auto-grow
              label="Descripcion de la empresa"
            ></v-textarea>
          </v-col>
          <v-col cols="12" sm="8" md="4">
            <v-text-field
              label="Celular"
              v-model="celular"
              type="number"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" sm="8" md="6" class="offset-sm-2 offset-md-4">
            <v-btn
              type="submit"
              large
              tile
              block
              color="accent"
              class="text--white"
            >
              Actualizar Informacion
            </v-btn>
          </v-col>
        </v-row>
      </v-form>
    </v-container>
  </div>
</template>

<script>
import swal from "sweetalert";
import ProfileService from "@/Admin/Empresas/services/profile.service";
export default {
  data() {
    return {
      user: [],
      save: [],
      previewImage: "https://via.placeholder.com/150",

      url: null,
      celular: null,
      email: "",
      descripcion: "",
      password: "",
      n_empresa: "",
    };
  },
  mounted() {
    ProfileService.perfil().then((res) => {
      ProfileService.imgPerfil().then((data) => {
        const imagen = data.data;
        for (const object of imagen) {
          const image = object.imagen.url;
          this.user = res.data;
          this.editar(this.user, image);
        }
      });
    });
    this.save = JSON.parse(localStorage.getItem("user"));
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
      this.url = file[0]; //this.url es la imagen que se envia a la base de datos
    },
    editar(item, img) {
      this.email = item.email;
      this.celular = item.celular;
      this.descripcion = item.descripcion;
      this.n_empresa = item.nombre_empresa;
      this.previewImage = process.env.VUE_APP_RUTA_API + img;
    },
    update() {
      ProfileService.updateProfile(
        {
          username: this.email,
          email: this.email,
          password: this.password,
          celular: this.celular,
          descripcion: this.descripcion,
          nombre_empresa: this.n_empresa,
        },
        this.save.id
      )
        .then((res) => {
          const fd = new FormData();
          const data = {};

          fd.append("files.imagen", this.url);
          fd.append("data", JSON.stringify(data));
          ProfileService.updateImg(fd, this.save.foto.id).then((res) => {
            swal(
              "Actualizado!",
              "Los datos de tu empresa se han actualizado",
              "success"
            );
          });
          this.$router.push("/admin");
        })
        .catch((error) => {
          swal("Error!", "Tus datos no se han actualizado", "error");
        });
    },
  },
};
</script>
