<template>
  <div data-app>
    <MenuResponsive v-if="menu" v-on:closeMenuResponsive="closeMenuResponsive($event)" />
    <Navbar :isIndex="false" :isAbout="false" v-on:openMenu="openMenu($event)" />
    <ListaBlog v-on:openLightbox="openLightbox($event)" />
    <DonwloadBrochure/>
    <ImageVisor :post="post" v-if="lightbox" v-on:closeLightbox="closeLightbox()" />
    <!-- <PhotoSwipe/> -->
  </div>
</template>

<script>
import ListaBlog from "../../components/NovedadesEventos";
import Navbar from "../../components/Navbar";
import MenuResponsive from "../../components/MenuResponsive";
import ImageVisor from "../../components/ImageVisor";
/* import PhotoSwipe from '../../components/PhotoSwipe'; */
import DonwloadBrochure from '@/components/Minis/DownloadBrochure';

export default {
  head() {
    return {
      link: [
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/photoswipe/4.1.1/photoswipe.min.css' },
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/photoswipe/4.1.1/default-skin/default-skin.min.css' },
      ],
      script: [
        {
          src:
            "https://cdnjs.cloudflare.com/ajax/libs/photoswipe/4.1.1/photoswipe.min.js",
          type: "text/javascript"
        },
        {
          src:
            "https://cdnjs.cloudflare.com/ajax/libs/photoswipe/4.1.1/photoswipe-ui-default.min.js",
          type: "text/javascript"
        }
      ]
    };
  },
  components: {
    ListaBlog,
    Navbar,
    MenuResponsive,
    DonwloadBrochure,
    /* PhotoSwipe, */
    ImageVisor
  },
  data: () => ({
    menu: false,
    lightbox: false,
    post: {}
  }),
  mounted() {
    try {
      AOS.init();
      document.getElementById("hamburger-menu").classList.add("red-hamburger");
      if (window.screen.width > 840) {
        this.addActiveLink();
      }
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
    closeMenuResponsive(bool) {
      setTimeout(() => {
        this.menu = bool;
      }, 700);
    },
    addActiveLink() {
      const links = document.querySelectorAll(".link-nav");
      const URIactual = window.location.pathname.substring(
        1,
        window.location.pathname.length
      );
      for (let i = 0; i < links.length; i++) {
        const pathName = links[i].pathname.toString();
        const nameEnlace = pathName.substring(1, pathName.length);
        if (URIactual === nameEnlace) {
          links[i].classList.add("enlace-activo");
          break;
        }
      }
    },
    openLightbox(post) {
      this.post = post;
      this.lightbox = true;
      setTimeout(() => {
        document.body.style.overflowY = "hidden";
        document.documentElement.style.overflow = "hidden";
        const lightbox = document.getElementById("modal-lightbox");
        lightbox.classList.add("animationLightBox");
      }, 400);
    },
    closeLightbox() {
      const lightbox = document.getElementById("modal-lightbox");
      lightbox.classList.add("outLightBox");
      setTimeout(() => {
        this.post = {};
        this.lightbox = false;
        document.body.style.overflowY = "visible";
        document.documentElement.style.overflow = "visible";
      }, 400);
    }
  }
};
</script>

<style>
body,
html {
  scroll-behavior: smooth;
  box-sizing: border-box;
  /* overflow: hidden; */
}

body::-webkit-scrollbar {
  width: 0.7em;
}
body::-webkit-scrollbar-thumb {
  background-color: #ba0f22;
  outline: 1px solid slategrey;
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

.bg-menu {
  background: #fff !important;
}
</style>