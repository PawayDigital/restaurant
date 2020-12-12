<template>
  <v-app id="contact">
    <HeaderComponent />
    <Title />
    <section class="contact-section">
      <GoogleMaps
        :latitude="1.156657"
        :longitude="-76.6525484"
        :title="'Ubicacion Restaurant'"
        class="contact-maps"
      />
      <v-container>
        <v-row class="contact-wrap padding-contact">
          <Information />
          <!-- <- tengo que modificar este componente-->
          <!-- <FormTitle /> -->
        </v-row>
      </v-container>
    </section>
    <FooterComponent />
  </v-app>
</template>

<script>
import HeaderComponent from "@/Layouts/HeaderComponent.vue";
import Title from "@/Contact/components/Title.vue";
import GoogleMaps from "@/GoogleMaps/components/GoogleMaps.vue";
import Information from "@/Contact/components/Information.vue";
// import FormTitle from "@/components/Contact/FormTitle.vue";
import FooterComponent from "@/Layouts/FooterComponent.vue";

export default {
  name: "Contact",
  components: {
    HeaderComponent,
    Title,
    GoogleMaps,
    Information,
    // FormTitle,
    FooterComponent,
  },
};
</script>
