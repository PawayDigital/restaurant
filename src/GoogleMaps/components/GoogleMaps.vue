<template>
  <gmap-map
    :center="center"
    :zoom="14"
    :options="mapStyle"
    style="width: 100%; height: 500px"
  >
    <gmap-marker
      :key="index"
      v-for="(m, index) in markers"
      :position="m.position"
      :title="m.title"
      :clickable="true"
      :draggable="true"
      @click="center = m.position"
    ></gmap-marker>
  </gmap-map>
</template>

<script>
import { styleMap } from "@/GoogleMaps/style/googleMaps.js"; // Archivo de estilos
export default {
  name: "GoogleMaps",
  data() {
    return {
      center: { lat: this.latitude, lng: this.longitude },
      markers: [
        {
          position: { lat: this.latitude, lng: this.longitude },
          title: this.title,
        },
      ],
      mapStyle: {
        styles: styleMap,
      },
    };
  },

  props: {
    latitude: Number,
    longitude: Number,
    title: String,
  },
};
</script>

<style lang="scss" scoped></style>
