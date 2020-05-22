<template>
  <div>
    <nav class="menu bg-menu" id="menu">
      <div class="container menu-container">

      <BannerTop/>
      <div id="navbar-logo" class="navbar-logo">

      <div id="logo-elengy-top" class="logo">
        <a draggable="false" href="/">
          <img draggable="false" id="logo" :src="logoEmpresa" alt="logo-empresa" />
        </a>
          <span id="lema-elengy">{{fraseEmpresa}}</span>
      </div>
      <div id="enlaces" class="enlaces">
        <ul id="ul-menu">
          <li>
            <a class="link-nav" href="/#home">Inicio</a>
          </li>
          <li class="has-children2">
            <a class="link-nav" href="/servicios">
              Soluciones
              <span class="material-icons ml-2">
                keyboard_arrow_down
              </span>
            </a>
            <ul class="dropdown2 container">

              <li v-for="(servicio, index) in servicios" :key="index" class="has-children2">
                  <a class="sub-enlaces2" :href="servicio.redirectTo">
                    <i :class="servicio.icon"></i>
                    <span>{{servicio.name_service}}</span>
                  </a>
                  <div class="dropdown2">
                      <div class="container p-0">
                        <div class="row p-0 m-0">
                          <div class="col-lg-8 p-0 m-0">
                            <div class="description p-4">
                              <h5>{{servicio.name_service}}</h5>
                              <p>{{servicio.description_service}}</p>
                              <ul>
                                <div v-for="(caracteristica, index) in servicio.characteristics" :key="index+100">
                                  <li v-if="index>0 && index<5">
                                    <span v-if="index!=4">
                                      {{caracteristica}}
                                    </span>
                                    <span v-if="index===4">
                                      {{caracteristica}}..
                                    </span>
                                  </li>

                                </div>
                              </ul>
                            </div>
                          </div>
                          <div class="col-lg-4 p-0 m-0">
                            <div class="img-link p-4">
                              <img draggable="false" class="img-fluid" src="../static/offer.png" alt="">
                              <a :href="servicio.redirectTo" class="button">Ver servicio</a>
                            </div>
                          </div>
                        </div>
                      </div>
                  </div>  
              </li>

            </ul> 
          </li>

          <li v-if="!isAbout">
            <a class="link-nav" href="/nosotros">
              Nosotros 
            </a>
          </li>

          <li v-else class="has-children">
            <a class="link-nav" href="#none">
              Nosotros 
              <span class="material-icons ml-2">
                keyboard_arrow_down
              </span>
            </a>
            <ul class="dropdown container">
              <li><a class="sub-enlaces" href="#nosotros">¿Quienes somos?</a></li>
              <li><a class="sub-enlaces" href="#misionyvision">Misión y Visión</a></li>
              <li><a class="sub-enlaces" href="#caracteristicas-elengy">Nuestras características</a></li>
              <li><a class="sub-enlaces" href="#clientes-elengy">Nuestros Clientes</a></li>
              <!-- <li><a class="sub-enlaces" href="#galeria-elengy">Galería</a></li> -->
            </ul>  
          </li>
          <!-- <li>
            <a class="transparent-link" href="/servicios">Servicios</a>
          </li> -->
          <li>
            <a class="link-nav" href="/portafolio">Portafolio</a>
          </li>
          <li>
            <a class="link-nav" href="/contacto">Contacto</a>
          </li>
         <!--  <li>
            <a class="link-nav button-brochure">
              <i class="material-icons mr-1" dark >picture_as_pdf</i>
              Descarga nuestro brochure
            </a>
          </li> -->
          <!-- <v-btn class="mx-2" fab dark large color="purple">
            <v-icon dark>mdi-android</v-icon>
          </v-btn> -->
        </ul>
      </div>
      </div>

      <div class="list-contact">

      </div>
      <div class="icon-three ml-auto">
        <div id="hamburger-menu" @click="toggleMenu" class="hamburger hamburger-three"></div>
      </div>
      </div>
    </nav>
  </div>
</template>

<script>
import BannerTop from '../components/BannerTop';
import {mapState} from 'vuex';
export default {
  components: {
    BannerTop
  },
  props: {
    isIndex: Boolean,
    isAbout: Boolean
  },
  data: () => ({
    flag: false,
    servicios: []
  }),
  computed: {
    ...mapState({
        logoEmpresa: state => state.datosElengy.datos.logoEmpresa,
        fraseEmpresa: state => state.datosElengy.datos.frase,
        navegacion: state => state.datosElengy.datos.navegacion,
    })
  },
  created() {
    this.servicios = this.$store.state.services.all;
  },
  mounted() {
    const menu = document.getElementById("menu");
    if(this.$props.isIndex){
      menu.style.display = 'flex';
    }else{
      menu.classList.add('animationNavbar');
      setTimeout(() => {
        menu.style.display = 'flex';
      }, 500);
    }
    const bannerTop = document.getElementById("banner-top");
    const links = document.querySelectorAll('.transparent-link');
    window.onscroll = () => {
      const scroll = document.documentElement.scrollTop || document.body.scrollTop;
      const anchoPantalla = window.screen.width;
      if (scroll > 100) {
        menu.classList.add('bg-white');
        if(this.$props.isIndex || this.$props.isAbout){
          document.getElementById('hamburger-menu').classList.add('red-hamburger');
        }
        if(anchoPantalla > 600){
          bannerTop.style.top = "-60px";
          menu.classList.add('scroll-big-menu');
          menu.classList.remove('short-menu');
        }else{
          menu.classList.add('short-menu');
        }
      } else {
        menu.classList.remove('bg-white');
        
        if(this.$props.isIndex || this.$props.isAbout){
          document.getElementById('hamburger-menu').classList.remove('red-hamburger');
        }
        if(anchoPantalla > 600){
          bannerTop.style.top = "0";
          menu.classList.remove('scroll-big-menu');
          menu.classList.remove('short-menu');
        }else{
          menu.classList.add('short-menu');
        }
      }
      if(this.$props.isIndex){
        this.activaSocialAds(scroll);
      }
      if(this.$props.isAbout){
        this.cambiaLinkActivoAboutPage(scroll);
      }

      this.aplicateEffectOnMessage(scroll);
    }
  },
  methods: {
    activaSocialAds(scroll){
      const headerHeight = document.getElementById('header-elengy').clientHeight;
      if(scroll>(headerHeight-60)){
        document.getElementById('social-ads').style.left='0';
      }else{
        document.getElementById('social-ads').style.left='-70px';
      }
    },
    toggleMenu(){
      this.flag = !this.flag;
      this.$emit('openMenu', this.flag);
      if(this.$props.isIndex || this.$props.isAbout){
        const scroll = document.documentElement.scrollTop || document.body.scrollTop;
        if(this.flag && scroll<=50){
          document.getElementById('hamburger-menu').classList.add('red-hamburger');
        }else if(!this.flag && scroll<=50){
          document.getElementById('hamburger-menu').classList.remove('red-hamburger');
        }else if(this.flag && scroll>50){
          document.getElementById('hamburger-menu').classList.add('red-hamburger');
        }
      }/* else{
        document.getElementById('hamburger-menu').classList.add('red-hamburger');
      } */
    },

    /* cambiaLinkActivo(scroll, elements){
      try {
        const elements = document.querySelectorAll('header, section');   
        const links = document.querySelectorAll('#ul-menu>li>a, .dropdown>li>a');
        let alturaTotal = 0;  
        for(let i=0; i<elements.length; i++){
          let altura = 0;
          for(let j=0; j<=i; j++){
            altura+=elements[j].clientHeight;
            if(scroll>(altura-elements[j].clientHeight)-60 && scroll<altura-60){
              for(let x=0; x<links.length; x++){
                const enlace = links[x].hash.substring(1, links[x].hash.length)
                links[x].classList.remove('enlace-activo');
                
                if(enlace === elements[j].id){
                  links[x].classList.add('enlace-activo');
                }
                const subEnlaces = document.querySelectorAll('.sub-enlaces');
                for(let y=0; y<subEnlaces.length; y++){
                  const classLista = subEnlaces[y].classList;
                  if(classLista.length > 1){
                    links[2].classList.add('enlace-activo');
                    break;
                  }
                }
              }
            }
          }
        }
      } catch (error) {}
    }, */
    cambiaLinkActivoAboutPage(scroll) {
      try {
        let elementsHeight = []
        const elements = document.querySelectorAll('header, section');   
        const links = document.querySelectorAll('.dropdown>li>a');
        let altura = 0;
        for(let i=0; i<elements.length; i++){
          altura += elements[i].clientHeight;
          elementsHeight.push(altura);
        }
        for(let i=0; i<elementsHeight.length-1; i++){
          if(scroll>elementsHeight[i] && scroll<elementsHeight[i+1]){
            links[i].classList.add('enlace-activo');
          }else {
            links[i].classList.remove('enlace-activo');
          }
        }
      } catch (error) {}
    },
    aplicateEffectOnMessage(scroll){
      const classMessageContainer = document.getElementById('details-brochure').classList;
      if(scroll > 500){
        document.getElementById('brochure-elengy').classList.add('openBrochure');
        if(classMessageContainer.length===1){
          document.getElementById('details-brochure').classList.add('animationMessageBrochure');
        }
      }else{
        document.getElementById('brochure-elengy').classList.remove('openBrochure');
        if(classMessageContainer.length>1){
          document.getElementById('details-brochure').classList.remove('animationMessageBrochure');
        }
        //details-brochure
      }
    }

  }
};
</script>

<style lang="scss">
.menu {
  font-family: Arial, sans-serif;
  width: 100%;
  height: 130px;
  /* background: none; */
  border-bottom: 2px solid #dfe6ed;
 /*  box-shadow: 0px 0px 1px 0px rgba(0,0,0,0.2); */
  font-family: "Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  display: none;
  justify-content: space-between;
  align-items: flex-end;
 /*  padding: 0 50px; */
  position: fixed;
  z-index: 210;
  transition: all ease-in-out .4s;
  box-sizing: border-box;
  /* overflow: hidden; */
}





@media screen and(max-width: 600px) {
  .menu {
    height: 65px;
  }
  .logo span {
    display: none;
  }
}


.bg-menu {
  background: #fff;
  
}

.menu-container {
  padding: 0;
  margin: 0 auto;
  height: auto;
  width: 100%;
  background: none;
  transition: all ease-in-out .4s;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  height: 100%;
}

.navbar-logo {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  padding-top: 14px;
}

.logo {
  z-index: 210;
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  color: #000;
  background: none;
  box-sizing: border-box;
  margin-left: 0;
  padding-left: 0;
  margin-left: 15px;
  /* padding-left: 15px; */
  margin-top: auto;
  margin-bottom: auto;
}

.logo a {
  text-decoration: none;
  background: none;
  
  
}
.logo span {
  font-family: 'Gloria Hallelujah', cursive;
  font-size: 12px;
  margin-left: 5px;
  font-weight: bold;
  text-align: right;
  margin-top: 2px;
  transition: all ease-in-out 1.2s;
  background: none;
  
} 
.logo a img {
  height: 55px;
  width: auto;
  transition: all ease-in-out 0.4s;
}


.enlaces {
  height: 100%;
}
.enlaces >ul {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  margin-bottom: 0;
}
.enlaces> ul> li {
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  transition: all ease-in-out 0.5s;
  height: 100%;
}

.enlaces .link-nav  {
  text-decoration: none;
  text-align: center;
  color: #000;
  line-height: normal;
  font-weight: normal;
  font-size: .95rem;
  letter-spacing: 1px;
  font-style: normal;
  text-transform: capitalize;
  position: relative;
  transition: ease-in-out 0.5s;
  line-height: -6px;
  padding: 12px 20px;
  /* margin-top: 10px; */
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  cursor: pointer;
}
.enlaces .link-nav> span {
  font-size: 1rem; 
  padding-bottom: .03rem;
}

/* transparent link */
.enlaces .transparent-link {
  position: relative;
  text-decoration: none;
  text-align: center;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.7;
  font-family: "Open Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-weight: 400;
  font-size: 1rem;
  letter-spacing: 1px;
  font-style: normal;
  text-transform: capitalize;
  transition: ease-in-out 0.5s;
  padding: 15px 20px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  cursor: pointer;
}
.enlaces .transparent-link > span {
  font-size: 1rem; 
  padding-bottom: .2rem;
}
/* finish transparent link */

/* dark link */
.enlaces .dark-link {
  position: relative;
  text-decoration: none;
  text-align: center;
  padding-bottom: 8px;
  color: #fff;
  line-height: normal;
  font-family: "Open Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-weight: 400;
  font-size: 1rem;
  letter-spacing: 1px;
  font-style: normal;
  text-transform: capitalize;
  transition: ease-in-out 0.5s;
  line-height: -6px;
}
.enlaces .dark-link::after{
  content: "";
  display: block;
  position: absolute;
  bottom: 0;
  width: 0%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-bottom: 4px solid #fff;
  transition: all .7s ease 0s; 
}
.enlaces a.dark-link.enlace-activo::after, .enlaces a.dark-link:hover::after  {
  width: 100%;
}
/* finish dark link */

.enlaces a.link-nav.enlace-activo, .menu .has-children .dropdown a.enlace-activo{
  color: #fd7e14;
}
.enlaces a.transparent-link.enlace-activo{
  color: #fff;
}
.enlaces a.dark-link.enlace-activo{
  color: #fff;
}


.nav-contenedor{
  display: none;
  z-index: 200;
}

.animationNavbar {
  animation-name: animationNabvar;
  animation-timing-function: ease-in-out;
  animation-duration: 1s;
}

#cellphone-elengy{
  transition: all ease-in-out .5s;
  animation-name: animationCellphone;
  animation-timing-function: ease-in-out;
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
}

/* sub menu */
.has-children{
  position: relative;
}

.has-children>a {
    position: relative;
    padding-right: 20px;
}

.menu .has-children .dropdown {
    visibility: hidden;
    top: 100%;
    left: 0;
    opacity: 0;
    height: auto;
    width: 250px;
    position: absolute;
    text-align: left;
    border-top: 2px solid #fd7e14;
    -webkit-box-shadow: 0 2px 10px -2px rgba(0, 0, 0, 0.1);
    box-shadow: 0 2px 10px -2px rgba(0, 0, 0, 0.1);
    padding: 0px;
    margin-left: 0;
    background: #fff;
    -webkit-transition: 0.2s 0s;
    -o-transition: 0.2s 0s;
    transition: 0.2s 0s;
    /* display: inline-block; */
    /* overflow: hidden; */
}

.menu .has-children2 .dropdown2 {
  visibility: hidden;
  top: 100%;
  margin-left:auto;
  margin-right:auto;
  left:0;
  right:0;
  opacity: 0;
  height: auto;
  /* display: inline-block; */
  position: absolute;
  /* width: 80%; */
  display: flex;
  justify-content: space-between;
  -webkit-transition: 0.2s 0s;
  -o-transition: 0.2s 0s;
  transition: 0.2s 0s;
    background: #fff;
    border-top: 2px solid #fd7e14;
    -webkit-box-shadow: 0 2px 10px -2px rgba(0, 0, 0, 0.1);
    box-shadow: 0 2px 10px -2px rgba(0, 0, 0, 0.1);
    padding-bottom: 0;
    padding-top: 0;

}


.menu .has-children .dropdown a, .menu .has-children2 .dropdown2 a {
    text-transform: none;
    letter-spacing: normal;
    -webkit-transition: 0s all;
    -o-transition: 0s all;
    transition: 0s all;
    color: #000;
    transition: color ease-in-out .2s;
}

.menu .has-children .dropdown .active, .menu .has-children2 .dropdown2 .active{
    color: #000 !important;
}

.menu .has-children .dropdown>li , .menu .has-children2 .dropdown2>li{
    list-style: none;
    padding: 0;
    margin: 0;
    width: 100%;
}

.menu .has-children2 .dropdown2 li a {
  text-decoration: none;
  padding: 30px 30px;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center; 
  font-size: .9em; 
  color: rgba(0,0,0,.5);
  font-family: 'Montserrat',Arial, "Helvetica Neue", Helvetica, sans-serif;
  font-weight: normal;
}

.menu .has-children2 .dropdown2 li a:hover {
  color: rgba(0,0,0,1);
}
.menu .has-children2 .dropdown2 li .dropdown2:hover ~.subenlaces2{
  background: rgba(0,0,0,1);
}


.menu .has-children2 .dropdown2 li a i{
  font-size: 2em; 
  margin-bottom: 12px;
  color: #6AAAE4;
}
.menu .has-children2 .dropdown2 li a span {
  text-align: center;
}
.menu .has-children .dropdown>li>a {
    padding: 9px 20px;
    display: block;
    text-align: left;
    text-decoration: none;
    width: 100%;
}


.menu .has-children2 .dropdown2 li .dropdown2 {
  background: #fff;
  border-top: none;
}

.menu .has-children2 .dropdown2 li .dropdown2 .container{
  background: #f6f6f6;
}

/* .menu .has-children2 .dropdown2 li .dropdown2 .container .col-lg-8{
  display: flex;
  align-items: center;
} */


.menu .has-children2 .dropdown2 li .dropdown2 .description{
  margin: auto 0px;
  top: 0;
  bottom: 0;
  padding: 2em;
  display: flex;
  justify-content: center;
  flex-flow: column nowrap;
}

.menu .has-children2 .dropdown2 li .dropdown2 .description ul{
  list-style-type: square;
  margin-left: 1.5em;
  margin-top: 5px;
  margin-bottom: 5px;
}

.menu .has-children2 .dropdown2 li .dropdown2 .description ul li span{
  color: rgba(0,0,0,0.65);
  font-size: .9em; 
}

.menu .has-children2 .dropdown2 li .dropdown2 .description h5 {
  color: rgba(253,126,20,.7);
  margin-bottom: .6em;
}

.menu .has-children2 .dropdown2 li .dropdown2 .description p{
  color: rgba(0,0,0,.8);
 margin-bottom: 0;
}


.menu .has-children2 .dropdown2 li .dropdown2 .col-lg-4 {
  background: #fff;
}
.menu .has-children2 .dropdown2 li .dropdown2 .img-link {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
}

.menu .has-children2 .dropdown2 li .dropdown2 .img-link img{
    max-width: 200px;
    margin-bottom: 10px;
}
.menu .has-children2 .dropdown2 li .dropdown2 .img-link .button, .menu .has-children2 .dropdown2 li .dropdown2 .description .button {
  padding: 5px 20px;
  background: rgba(170,0,0,.9);
  color: #fff;
  outline: none;
  border-radius: 0;
  max-width: 200px;
  margin-top: 10px;
}

.menu .has-children .dropdown>li>a:hover {
    background: #eff1f3;
    color: #fd7e14;
}

.menu .has-children .dropdown>li.has-children>a:before {
    content: "\e315";
    right: 20px;
}

.menu .has-children .dropdown>li.has-children>.dropdown,
.menu .has-children .dropdown>li.has-children>ul {
    left: 100%;
    top: 0;
}

.menu .has-children .link-nav:hover,
.menu .has-children .link-nav:focus,
.menu .has-children .link-nav:active,
.link-nav:hover,
.link-nav:focus
{
    color: #fd7e14;
}

.has-children .transparent-link:hover,
.has-children .transparent-link:focus,
.has-children .transparent-link:active,
.transparent-link:hover,
.transparent-link:focus
{
    color: #fff;
}

.menu .has-children:hover,
.menu .has-children:focus,
.menu .has-children:active {
    cursor: pointer;
}

.menu .has-children:hover>.dropdown,
.menu .has-children:focus>.dropdown,
.menu .has-children:active>.dropdown,
.menu .has-children2:hover>.dropdown2,
.menu .has-children2:focus>.dropdown2,
.menu .has-children2:active>.dropdown2 {
    -webkit-transition-delay: 0s;
    -o-transition-delay: 0s;
    transition-delay: 0s;
    margin-top: 0px;
    visibility: visible;
    opacity: 1;
}

/* end sub menu */

@keyframes animationCellphone {
    0%{
      opacity: 0;
    }
    75%{
      opacity: 1;
    }
    100%{
      opacity: 0;
    }
}

@keyframes animationNabvar {
  0%{
    transform: translateY(-200px);
    opacity: 0;
  }
  50%{
    transform: translateY(-200px);
    opacity: 0;
  }
  80%{
    transform: translateY(-100px);
    opacity: 0;
  }
  100%{
    transform: translateY(0);
    opacity: 1;
  }
}

@media screen and (max-width: 1030px){
  .menu {
    padding-right: 1em;
    padding-left: 1em;
  }
  
  .enlaces .link-nav {
    font-weight: 200;
    font-size: 12px;
  }
}

@media screen and (max-width: 1000px){
  .menu {
    z-index: 150;
  }
}

@media screen and (max-width: 840px){
    .logo {
      margin-left: 0;
    }
    .logo span {
      color: #fff;
      padding-top: 4px;
    }
}

/* hamburguer */
.hamburger {
  display: none;
  top: 0;
  bottom: 0;
  margin: auto;
  right: 5%;
  width: 35px;
  height: 5px;
  position: absolute;
  background:rgba(255, 255, 255, .9);
  box-shadow: 0 2px 5px rgba(0, 0, 0, .5);
  transition: 0.5s;
}

.hamburger:before {
  top: -12px;
}

.hamburger:after {
  top: 12px;
}

.icon-three {
  top: 0;
  bottom: 0;
  margin: auto;
  display: none;
  position: absolute;
  /* top: 25%; */
  right: 5%;
  width: 50px;
  height: 50px;
  cursor: pointer;
}

.hamburger-three:before,
.hamburger-three:after {
  content: '';
  position:absolute;
  width: 40px;
  height: 5px;
  background:rgba(255, 255, 255, .9);
  box-shadow: 0 2px 5px rgba(0, 0, 0, .5);
  transition:0.5s;
}

.hamburger.red-hamburger {
  background:rgba(170, 0, 0, .78);
}

.hamburger-three.red-hamburger:before,
.hamburger-three.red-hamburger:after {
  content: '';
  position:absolute;
  width: 40px;
  height: 5px;
  background:rgba(170, 0, 0, .8);
  box-shadow: 0 2px 5px rgba(0, 0, 0, .5);
  transition:0.5s;
}

.icon-three.active-three .hamburger-three {
  background:rgba(0,0,0,0);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0);
}

.icon-three.active-three .hamburger-three:before {
  top: 0;
  transform:rotate(135deg);
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.2);
}

.icon-three.active-three .hamburger-three:after {
  top: 0;
  transform:rotate(225deg);
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.2);
}


/* <600px */
.menu.short-menu {
 height: 70px; 
}

.menu.short-menu .logo span {
  display: none;
}
.menu.short-menu .logo #logo {
  height: 50px;
}

.menu.short-menu .hamburger {
  width: 30px;
  height: 3px;
}
.menu.short-menu .hamburger-three:before,
.menu.short-menu .hamburger-three:after {
  width: 32px;
  height: 3px;
}
/* .menu.short-menu .icon-three {
  height: 40px;
} */

@media screen and (max-width: 600px){
  .menu {
  height: 70px; 
  }

  .menu .logo span {
    display: none;
  }
  .menu .logo #logo {
    height: 50px;
  }

  .menu .hamburger {
    width: 30px;
    height: 3px;
  }
  .menu .hamburger-three:before,
  .menu .hamburger-three:after {
    width: 32px;
    height: 3px;
  }
  .menu .hamburger-three:after {
    top: -10px;
  }
  .menu .hamburger-three:before {
    top: 10px;
  }
}
/* Fin <600px */


/* >600px  on scroll*/
.menu.scroll-big-menu {
  height: 65px;
}
.menu.scroll-big-menu .logo {
  flex-flow: row nowrap;
  align-items: center;
}

.menu.scroll-big-menu .logo #logo {
  height: 50px;
}
.menu.scroll-big-menu  .navbar-logo {
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: flex-end;
  padding-top: 0;
}
/* >600px */



/* menu responsive in 840px */
@media screen and (max-width: 840px){
  .hamburger,.icon-three {
    display: flex;
  }
  .navbar-logo { 
    padding-top: 0px;
  }
}


@media screen and (max-width: 840px){
  .bg-menu {
    background: none;
  }
  .icon-three {
    z-index: 250;
  }

}

</style>