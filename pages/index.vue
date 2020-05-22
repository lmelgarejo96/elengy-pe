<template>
  <div data-app id="index-p" class="index-page">
    <Loader
      v-if="loader"
      :timeClose="timeClose"
      v-on:loadedComplete="endLoader($event)"
      v-on:loadClosing="endLoader()"
    />
    <div id="home" class="content-index animation-index">
      <MenuResponsive v-if="menu" v-on:closeMenuResponsive="closeMenuResponsive($event)" />
      <Navbar
        :isIndex="true"
        :isAbout="false"
        v-on:closeMenu="closeMenu($event)"
        v-on:openMenu="openMenu($event)"
      />

      <SliderElengy v-on:slideFull="initSlider($event)" />
      <EnlacesIndex />
      <ContactIndex :contact.sync="contact" :servicios="servicios" />
      <ClientesSection />
      <DonwloadBrochure />
      <Footer />

      <SocialAds />
    </div>
  </div>
</template>

<script>
/* import Header from '../components/Header'; */
/* import DescriptionRectangle from '../components/DescriptionEmpresa';
import CaracteristicasSection from '../components/CaracteristicasIndex';
import Caracteristicas from '../components/Caracteristicas';
import NosotrosSection from '../components/NosotrosIndex';
import ServicesSection from '../components/ServicesIndex';
import Galeria from '../components/nosotros/Galeria';
import GaleriaElengy from '../components/nosotros/GaleriaElengy';
import Novedades from '../components/NovedadesEventos';
import MisionVision from '../components/nosotros/MisionVision'; */

import Loader from "../components/Loader";
import Navbar from "../components/Navbar";
import MenuResponsive from "../components/MenuResponsive";
import SliderElengy from "../components/Slider";
import ContactIndex from "../components/ContactIndex";
import ClientesSection from "../components/ClientesIndex";
import SocialAds from "../components/RedesSociales";
import Footer from "../components/Footer";
import EnlacesIndex from "../components/EnlacesIndex";

import DonwloadBrochure from '../components/Minis/DownloadBrochure';

export default {
  head() {
    return {
      script: [
        /* gsap +tweenMax */
        {
          src: "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.2.6/gsap.min.js",
          type: "text/javascript"
        },
        {
          src:
            "https://cdnjs.cloudflare.com/ajax/libs/gsap/2.0.2/TweenMax.min.js",
          type: "text/javascript"
        },
        {
          src:
            "https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.3/TimelineMax.min.js",
          type: "text/javascript"
        }
      ]
    };
  },
  components: {
    /* Header, */
    /* DescriptionRectangle,
    NosotrosSection,
    MisionVision,
    ServicesSection,
    Caracteristicas,
    CaracteristicasSection,
    Galeria,
    GaleriaElengy,
    Novedades, */

    Loader,
    Navbar,
    MenuResponsive,
    SliderElengy,
    EnlacesIndex,
    ContactIndex,
    ClientesSection,
    SocialAds,
    DonwloadBrochure,
    Footer
  },
  data() {
    return {
      menu: false,
      loader: true,
      content: false,
      contact: {
        nombres: "",
        apellidos: "",
        servicios: [],
        email: "",
        telefono: "",
        descripcion: ""
      },
      servicios: [],
      currentSlide: null,
      audioContext: null,
      timeClose: 10,
    };
  },
  beforeMount() {
    this.servicios = this.$store.state.services.servicesNames;
  },
  mounted() {
    try {
      if (window.screen.width > 840) {
        this.addActiveLink();
      }
      /* this.audioContext = document.getElementById("audio-elengy");
      this.audioContext.volume = 0.15; */
      AOS.init();
    } catch (error) {}
  },
  methods: {
    openMenu(bool) {
      try {
        if (bool) {
          document.querySelector(".icon-three").classList.add("active-three");
          this.menu = bool;
        } else {
          document
            .querySelector(".icon-three")
            .classList.remove("active-three");
          const menu = document.getElementById("menu-responsive");
          menu.style.left = "-100vh";
          this.closeMenuResponsive(bool);
        }
      } catch (error) {}
    },
    closeMenu(bool) {
      this.menu = bool;
    },
    closeMenuResponsive(bool) {
      setTimeout(() => {
        this.menu = bool;
      }, 700);
    },
    loadedComplete(bool) {
      setTimeout(() => {
        this.loader = bool;
      }, 1800);
    },
    chargeContent() {
      setTimeout(() => {
        this.content = true;
      }, 5000);
    },
    contactService(message) {
      this.contact.servicios = [];
      this.contact.servicios.push(this.servicios[message.index]);
      this.contact.descripcion = message.mensaje;
    },
    addActiveLink() {
      const links = document.querySelectorAll(".link-nav");
      links[0].classList.add("enlace-activo");
    },
    initSlider(ev) {
      this.currentSlide = ev;
    },
    endLoader() {
      this.currentSlide.init();
      setTimeout(() => {
        document.querySelectorAll(".oakslider__next")[0].click();
      }, 1000);
      /* this.playAudio(); */
      setTimeout(() => {
        this.loader = false;
      }, 2200);
    },
    playAudio() {
      this.audioContext.play();
    },
    pauseAudio() {
      this.audioContext.pause();
    },
    activeDissmissLoader(){
      /* let timeInterval = setInterval(() => {
          this.timeClose -= 1;
          if(this.timeClose === 0) {
            this.endLoader()
            clearInterval(timeInterval);
          } 
      }, 1000); */
      
    }
  }
};
</script>

<style >
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body,
html {
  scroll-behavior: smooth;
  box-sizing: border-box;
  overflow: hidden;
}

body::-webkit-scrollbar {
  width: 0.7em;
}

/* body::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
} */

body::-webkit-scrollbar-thumb {
  background-color: #ba0f22;
  outline: 1px solid slategrey;
}
.index-page {
  position: relative;
}

@media screen and (max-width: 600px) {
  body::-webkit-scrollbar {
    width: 0.15em;
    background-color: #ba0f22;
  }
}

.content-index {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
}

section {
  min-height: 30vh;
  width: 100%;
  scroll-snap-align: center;
}

.section-margin {
  margin: 60px 0;
}

.section-margin-2 {
  margin: 50px 0;
}

@media (min-width: 1000px) {
  .section-margin {
    margin: 100px 0;
  }
  .section-margin-2 {
    margin: 80px 0;
  }
}

@media (min-width: 1200px) {
  .section-margin {
    margin: 135px 0;
  }
  .section-margin-2 {
    margin: 80px 0;
  }
}

.section-margin--medium {
  margin: 40px 0;
}

@media (min-width: 800px) {
  .section-margin--medium {
    margin: 80px 0;
  }
}

@media (min-width: 1200px) {
  .section-margin--medium {
    margin: 120px 0;
  }
}

.section-padding {
  padding: 60px 0;
}

/* @media (min-width: 1000px) {
    .section-padding {
        padding: 100px 0
    }
} */

@media (min-width: 1200px) {
  .section-padding {
    padding: 100px 0;
  }
}

.section-padding--small {
  padding: 60px 0;
}

@media (min-width: 1000px) {
  .section-padding--small {
    padding: 100px 0;
  }
}
</style>
