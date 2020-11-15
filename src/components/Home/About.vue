<template>
  <v-row id="about" class="mt-8 mb-9">
    <!-- <a href="#about"></a> -->
    <v-col cols="12" lg="7" class="order-lg-2">
      <h4 class="text-center text-h5 mb-3">Restaurant</h4>
      <p class="text-justify">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi obcaecati
        voluptatum alias natus consequatur labore consequuntur ad. Eum,
        corrupti. Excepturi recusandae, hic amet sapiente itaque vel ipsa ad nam
        rerum?
      </p>
      <p class="text-justify">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis
        lorem ut libero malesuada feugiat. Proin eget tortor risus. Quisque
        velit nisi, pretium ut lacinia in, elementum id enim. Vivamus suscipit
        tortor eget felis porttitor volutpat. Nulla porttitor accumsan
        tincidunt.
      </p>
      <p class="text-justify">
        Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.
        Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Proin
        eget tortor risus. Proin eget tortor risus. Curabitur arcu erat,
        accumsan id imperdiet et, porttitor at sem. Curabitur arcu erat,
        accumsan id imperdiet et, porttitor at sem. Cras ultricies ligula sed
        magna dictum porta. Vestibulum ante ipsum primis in faucibus orci luctus
        et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet
        aliquam vel, ullamcorper sit amet ligula.
      </p>
    </v-col>
    <v-col cols="12" lg="5" class="order-lg-1">
      <v-img
        lazy-src="@/assets/images/carta-online.jpg"
        class="rounded about-img"
        src="@/assets/images/carta-online.jpg"
      ></v-img>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "About",
};
</script>
