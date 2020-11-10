<template>
  <div id="footer">
    <footer class="footer-section">
      <v-container align="center">
        <div class="top-footer-padding-bottom footer-brand-name">
          <img
            src="@/assets/logo/logo-dark.svg"
            width="100"
            height="100"
            alt=""
            srcset=""
          />
          <div class="brand">Restaurant</div>
        </div>
        <v-row>
          <v-col md="12">
            <p class="copright">© 2020. All rights reserved.</p>
          </v-col>
        </v-row>
      </v-container>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style>
/*** 17. Footer style ***/

.footer-section {
  background: #1b1b1b;
  padding: 80px 0;
}
.top-footer-padding-bottom {
  padding-bottom: 15px;
}
.footer-section .brand {
  font-family: "Arizonia", cursive;
  font-size: 42px;
  line-height: 1.5em;
  font-weight: 400;
  color: #fff;
}

.footer-section .brand span {
  color: #1b1b1b;
}
.footer-brand-name {
  text-align: center;
}

.footer-contact-btn {
  text-align: right;
}
.footer-section p {
  font-size: 14px;
  line-height: 1.5em;
  font-weight: 300;
  color: #fff;
  padding-top: 25px;
  margin: 0;
  border-top: 1px solid #464646;
  text-align: center;
}
</style>
