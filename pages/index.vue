<template>

    <div data-app id="index-p" class="index-page">
    <Loader  v-on:loadedComplete="loadedComplete($event)"/>
    <div  class="content-index animation-index">
      
        <MenuResponsive v-if="menu" v-on:closeMenuResponsive="closeMenuResponsive($event)" />
        <Navbar :isIndex="true" v-on:closeMenu="closeMenu($event)" v-on:openMenu="openMenu($event)"/>
        <Header />
        <ServicesSection/>
        <NosotrosSection/>
        <Caracteristicas/>
        <!-- <CaracteristicasSection/> -->
        <ContactIndex/>
        <ClientesSection/>
        <Footer/>
      
      <SocialAds/>
    </div>

  </div>
 
</template>

<script>
import BannerTop from '../components/BannerTop';
import Navbar from '../components/Navbar';
import MenuResponsive from '../components/MenuResponsive';
import Header from '../components/Header';
import DescriptionRectangle from '../components/DescriptionEmpresa';
import CaracteristicasSection from '../components/CaracteristicasIndex';
import Caracteristicas from '../components/Caracteristicas';
import NosotrosSection from '../components/NosotrosIndex';
import ServicesSection from '../components/ServicesIndex';
import ContactIndex from '../components/ContactIndex';
import ClientesSection from '../components/ClientesIndex';
import SocialAds from '../components/RedesSociales';


import Footer from '../components/Footer';
import Loader from '../components/Loader';
export default {
  components: {
    BannerTop,
    Navbar,
    Header,
    DescriptionRectangle,
    MenuResponsive,
    NosotrosSection,
    ServicesSection,
    Caracteristicas,
    CaracteristicasSection,
    ClientesSection,
    ContactIndex,
    SocialAds,
    Loader,
    Footer
  },
  data () {
    return {
      menu: false,
      loader: true,
      content: false,


      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  },
  mounted(){
    /* this.chargeContent(); */
    console.log('monto index');
    /* document.body.scrollTop; */
  },
  destroyed(){
    console.log('se destruyó el index');
  },

  methods: {
    openMenu(bool){
      this.menu = bool;
    },
    closeMenu(bool){
      this.menu = bool;
    },
    closeMenuResponsive(bool){
      setTimeout(() => {
        this.menu = bool;
      }, 700)
    },
    loadedComplete(bool){
      setTimeout(() => {
        this.loader = bool;
      }, 1800)
    },
    chargeContent(){
      setTimeout(()=> {
        this.content = true;
      }, 5000);
    }
  }
  
}
</script>

<style >
body,
html {
    scroll-behavior: smooth;
    box-sizing: border-box;
    overflow: hidden;
}

body::-webkit-scrollbar {
    width: .7em;
}

/* body::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
} */

body::-webkit-scrollbar-thumb {
    background-color: #BA0F22;
    outline: 1px solid slategrey
}
.index-page{
  position: relative;
}

@media screen and (max-width: 600px) {
    body::-webkit-scrollbar {
        width: .15em;
        background-color: #BA0F22;
    }
}

.content-index{
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
        margin: 100px 0
    }
    .section-margin-2 {
        margin: 80px 0
    }
}

@media (min-width: 1200px) {
    .section-margin {
        margin: 135px 0
    }
    .section-margin-2 {
        margin: 80px 0
    }
}

.section-margin--medium {
    margin: 40px 0
}

@media (min-width: 800px) {
    .section-margin--medium {
        margin: 80px 0
    }
}

@media (min-width: 1200px) {
    .section-margin--medium {
        margin: 120px 0
    }
}


.section-padding {
    padding: 60px 0
}

@media (min-width: 1000px) {
    .section-padding {
        padding: 100px 0
    }
}

@media (min-width: 1200px) {
    .section-padding {
        padding: 135px 0
    }
}

.section-padding--small {
    padding: 60px 0
}

@media (min-width: 1000px) {
    .section-padding--small {
        padding: 100px 0
    }
}

</style>
