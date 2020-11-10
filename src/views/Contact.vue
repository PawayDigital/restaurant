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
        <v-row class="contact-wrap">
          <Information />
          <FormTitle />
        </v-row>
      </v-container>
    </section>
    <FooterComponent />
  </v-app>
</template>

<script>
import HeaderComponent from "@/components/Header/HeaderComponent.vue";
import Title from "@/components/Contact/Title.vue";
import GoogleMaps from "@/components/Contact/GoogleMaps.vue";
import Information from "@/components/Contact/Information.vue";
import FormTitle from "@/components/Contact/FormTitle.vue";
import FooterComponent from "@/components/Footer/FooterComponent.vue";

export default {
  name: "Contact",
  components: {
    HeaderComponent,
    Title,
    GoogleMaps,
    Information,
    FormTitle,
    FooterComponent,
  },
};
</script>

<style>
.contact-section {
  position: relative;
  z-index: 1;
  padding-top: 1px;
  padding-bottom: 60px;
}
.contact-maps {
  position: absolute;
  left: 0;
  top: 0;
  z-index: -1;
}
.contact-wrap {
  background-color: #fff;
  padding: 40px 40px 0 40px;
  margin-top: 360px;
}
</style>
