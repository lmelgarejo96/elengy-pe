<template>
  <div id="menu-responsive" class="menu-responsive animationOpen">
    <!-- <div class="title-menu">
          Engineering for the World
          <v-btn @click="closeMenu" id="btn-close" style="outline: none;" class="ma-2 btn-close"  large color="teal" icon>
                <v-icon color="#ffffff" style="font-weigth: bold;">mdi-close</v-icon>
            </v-btn>
    </div>-->
    <div class="enlaces-responsive">
      <a href="/">Inicio</a>
      <a href="/servicios">Servicios</a>
      <a href="/nosotros">Nosotros</a>
      <a href="/portafolio">Portafolio</a>
      <a href="#">Contacto</a>
      <div class="social-networks">
        <a href="https://www.facebook.com/elengysac/" target="_blank">
          <i class="fa fa-facebook" aria-hidden="true"></i>
        </a>
        <a href="#">
          <i class="fa fa-twitter" aria-hidden="true" target="_blank"></i>
        </a>
        <a href="https://www.linkedin.com/company/elengy-sac/" target="_blank">
          <i class="fa fa-linkedin" aria-hidden="true"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    closeMenu() {
      this.$emit("closeMenuResponsive", false);
      const menu = document.getElementById("menu-responsive");
      menu.style.top = "-100vh";
    }
  }
};
</script>

<style>
.menu-responsive {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: fixed;
  background: #1c2131;
  top: 0;
  left: 0;
  z-index: 100;
  transition: all ease-in-out 0.5s;
  padding-top: 20px;
}

.enlaces-responsive {
  margin-top: 60px;
  margin-bottom: 50px;
  color: #fff;
  transition: all ease-in-out 0.5s;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100%;
}
.enlaces-responsive a {
  color: #fff;
  text-decoration: none;
  font-family: 'Roboto',Arial, "Helvetica Neue", Helvetica, sans-serif;
}
.btn-close {
  position: absolute;
  margin-left: auto;
  top: 0;
  right: 10px;
  z-index: 100;
}

.title-menu {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 40px;
  text-align: center;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #000;
}

.animationOpen {
  animation-name: openMenu;
  animation-duration: 1s;
  animation-timing-function: ease-in-out;
}

.social-networks {
  display: flex;
}
.social-networks > a {
  padding: 0.8em 1em;
}
@keyframes openMenu {
  from {
    transform: translateX(-100vh);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@media screen and (min-width: 841px) {
  .menu-responsive {
    display: none;
  }
}
</style>