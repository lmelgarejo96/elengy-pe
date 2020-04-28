<template>
  <div>
    
    <nav class="menu" id="menu">
      <div id="banner-top" class="banner-top">
        <div id="nav-contact" class="contact">
          <div>
            <a class="contact-nav p-1" href="#home" style="font-size: 14px;"><v-icon dark>mdi-home</v-icon></a>
          </div>
          <div>
            <a class="contact-nav p-1" href="#home" style="font-size: 14px;"><v-icon dark>mdi-phone</v-icon> (+51) 922576590</a>
          </div>

        </div>
        <div id="social-links" class="social-links">
                <div class="social-item">
                    <!-- facebook -->
                    <a  href="https://www.facebook.com/IEEEComputerSocietyUTP" target="_blank " class="st-btn contact-nav">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-3 7h-1.924c-.615 0-1.076.252-1.076.889v1.111h3l-.238 3h-2.762v8h-3v-8h-2v-3h2v-1.923c0-2.022 1.064-3.077 3.461-3.077h2.539v3z"/></svg>
                    </a>
                </div>
                <div class="social-item">
                    <!-- instagram -->
                    <a href="https://www.instagram.com/computersocutp/" target="_blank " class="st-btn contact-nav">
                        <svg  version="1.1 " id="Layer_1 " x="0px " y="0px " width="24 " height="24" viewBox="0 0 169.063 169.063 " style="enable-background:new 0 0 169.063 169.063;
                                                " xml:space="preserve ">
                            <g>
                                <path d="M122.406,0H46.654C20.929,0,0,20.93,0,46.655v75.752c0,25.726,20.929,46.655,46.654,46.655h75.752 c25.727,0,46.656-20.93,46.656-46.655V46.655C169.063,20.93,148.133,0,122.406,0z M154.063,122.407 c0,17.455-14.201,31.655-31.656,31.655H46.654C29.2,154.063,15,139.862,15,122.407V46.655C15,29.201,29.2,15,46.654,15h75.752
                                                c17.455,0,31.656,14.201,31.656,31.655V122.407z " fill="#fff "/>
                                <path d="M84.531,40.97c-24.021,0-43.563,19.542-43.563,43.563c0,24.02,19.542,43.561,43.563,43.561s43.563-19.541,43.563-43.561 C128.094,60.512,108.552,40.97,84.531,40.97z M84.531,113.093c-15.749,0-28.563-12.812-28.563-28.561 c0-15.75,12.813-28.563,28.563-28.563s28.563,12.813,28.563,28.563C113.094,100.281,100.28,113.093,84.531,113.093z
                                                " fill="#fff "/>
                                <path d="M129.921,28.251c-2.89,0-5.729,1.17-7.77,3.22c-2.051,2.04-3.23,4.88-3.23,7.78c0,2.891,1.18,5.73,3.23,7.78 c2.04,2.04,4.88,3.22,7.77,3.22c2.9,0,5.73-1.18,7.78-3.22c2.05-2.05,3.22-4.89,3.22-7.78c0-2.9-1.17-5.74-3.22-7.78 C135.661,29.421,132.821,28.251,129.921,28.251z
                                                " fill="#fff "/>
                            </g>
                        </svg>
                    </a>
                </div>
                <div class="social-item">
                    <!-- linkedin -->
                    <a href="https://www.linkedin.com/company/ieee-computer-society-utp/" target="_blank " class="st-btn contact-nav">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#fff" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                    </a>
                </div>
            </div>
      </div>
      <div class="logo">
        <a draggable="false" href="/">
          <img draggable="false" id="logo" src="../static/logo.webp" alt />
        </a>
      </div>
      <div id="enlaces" class="enlaces">
        <ul id="ul-menu">
          <li>
            <a class="link-nav" href="/">Inicio</a>
            <div class="cubo"></div>
          </li>

          <li>
            <a class="link-nav" href="/nosotros">Nosotros</a>
          </li>
          <li>
            <a class="link-nav" href="/servicios">Servicios</a>
          </li>
          <li>
            <a class="link-nav" href="/portafolio">Portafolio</a>
          </li>
          <li>
            <a class="link-nav" href="/contacto">Contacto</a>
          </li>
          <!-- <li>
            <a class="link-nav" href="/noticias">Noticias</a>
          </li> -->
        </ul>
      </div>
      <div id="buttons-nav" class="nav-contenedor contenedor-buttons">
      <v-btn @click="openMenu" id="btn-bars" style="outline: none;" class="ma-2"  large color="teal" icon>
        <v-icon>mdi-menu</v-icon>
      </v-btn>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  props: {
    isIndex: Boolean
  },
  mounted() {
    const menu = document.getElementById("menu");
    if(this.$props.isIndex){
      menu.style.display = 'flex';
      this.cargaEnlaces();
    }else{
      menu.classList.add('animationNavbar');
      setTimeout(() => {
        menu.style.display = 'flex';
      }, 500);
    }
    this.cambiaLinkActivo();
    const bannerTop = document.getElementById("banner-top");
    const logo = document.getElementById("logo");
    const enlaces = document.getElementById("enlaces");
    const lis = document.querySelectorAll('#ul-menu > li');
    const menu_ul = document.getElementById("ul-menu");

    window.onscroll = () => {
      const scroll = document.documentElement.scrollTop || document.body.scrollTop;
      if (scroll > 100) {
        menu.style.height = "65px";
        bannerTop.style.top = "-35px";
        menu.classList.add("short-navbar");
        logo.style.height = "55px";
        enlaces.style.height = "65px";
        menu_ul.style.height = "65px";
        document.getElementById('social-ads').style.left='0';
        this.ordenaNavbar(lis, 1);
      } else {
        menu.style.height = "100px";
        bannerTop.style.top = "0";
        logo.style.height = "80px";
        enlaces.style.height = "65px";
        menu_ul.style.height = "65px";
        menu.classList.remove("short-navbar");
        document.getElementById('social-ads').style.left='-100px';
        this.ordenaNavbar(lis, 2);
      }
    }
  },
  methods: {
    ordenaNavbar(array, opc) {
      if(opc === 1){
        for (let i = 0; i < array.length; i++) {
          array[i].style.marginBottom = "30px";
        }
      }else{
        for (let i = 0; i < array.length; i++) {
          array[i].style.marginBottom = "10px";
        }
      } 
    },
    openMenu(){
      this.$emit('openMenu', true);
    },
    closeMenu(){
      this.$emit('closeMenu', false);
    },
    cargaEnlaces(){
      TweenMax.from(".link-nav", 3, {
        delay: 3,
        opacity: 0,
        y: 20,
        ease: Expo.easeInOut
      });
      TweenMax.from("#logo", 3, {
          delay: 3,
          opacity: 0,
          y: 20,
          ease: Expo.easeInOut
      });
      TweenMax.from(".contact-nav", 4, {
          delay: 4.1,
          opacity: 0,
          y: 50,
          ease: Expo.easeInOut
      });
      /* TweenMax.from(".menu", 4, {
          delay: 2.5,
          opacity: 0,
          y: -50,
          ease: Expo.easeInOut
      }); */
    },
    cambiaLinkActivo(){
      const path = window.location.pathname;
      const ruta = path.substring(1,location.length);
      const links = document.querySelectorAll('.link-nav');
      for(let i =0; i<links.length; i++){
        const linkName = links[i].childNodes[0].nodeValue;
        if(ruta.toLowerCase() !== linkName.toLowerCase()){
          links[i].classList.remove('enlace-activo');
        }else{
          links[i].classList.add('enlace-activo');
        }
      }
      if(ruta === ''){ //verificamos si es la ruta inicial
        links[0].classList.add('enlace-activo'); 
      }
    }

  }
};
</script>

<style lang="scss">
.banner-top {
  position: absolute;
  top: 0;
  right: 70px;
  width: 360px;
  height: 35px;
  background: #aa0000;
  transition: all ease-in-out 0.5s;
  z-index: 50;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.banner-top >div {
  padding: 0 15px;
}
.banner-top >div:first-child {
  padding-left: 0;
}
.banner-top >div:last-child {
  padding-right: 5px;
}
.banner-top .contact {
  display: flex;
  flex-flow: row nowrap;
}
.banner-top .contact div {
  border-right: 1px solid #fff;
}
.banner-top .contact div:last-child {
   border-right: none;
}
.banner-top .contact div a {
  margin-right: 10px;
  margin-left: 10px;
  text-decoration: none;
  color: #fff;
  font-family: 'Montserrat', sans-serif;
}
.banner-top .social-links {
  margin-left: auto;
  display: flex;
  flex-flow: row nowrap;
  transition: all ease-in-out 0.5s;
}
.banner-top .social-links a{
  padding: 0 5px;
}

.menu {
  font-family: Arial, sans-serif;
  width: 100%;
  height: 100px;
  background: #fff;
  /* background: none; */
  display: none;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
/*   border-bottom: 1px solid #ccc; */
  position: fixed;
  z-index: 50;
  transition: all ease-in-out .5s;
  overflow: hidden;
}

.menu .nav-contenedor {
  margin: auto;
  width: 90%;
  max-width: 1500px;
}

/* .logo {
  margin-bottom: -50px;
  background: #000;
  padding-top: 10px;
  padding-bottom: 20px;
  transition:  all ease-in-out .5s;
}
.logo:hover {
   padding-top: 40px;
} */
.logo a img {
  height: 80px;
  width: auto;
  transition: all ease-in-out 0.5s;
 /*  margin: 20px; */
}
.enlaces {
  height: 100px;
}
.enlaces ul {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 90px;
  margin-bottom: 0;
}
.enlaces ul li {
  list-style: none;
  margin: 0 20px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  height: 100%;
  margin-bottom: 10px;
  transition: all ease-in-out 0.5s;
}

.enlaces .link-nav {
  text-decoration: none;
  text-align: center;
  padding-bottom: 6px;
  color: #2e4369;
  line-height: normal;
  font-family: "Raleway",sans-serif;
  font-weight: 200;
  font-size: 15px;
  letter-spacing: 1px;
  font-style: normal;
  text-transform: capitalize;
  /* border-bottom: 4px solid #000; */
  position: relative;
  transition: ease-in-out 0.5s;
  line-height: -6px;
  /* margin-bottom: 20px; */
}

.enlaces .link-nav::after,
.enlaces .link-nav::before {
  content: "";
  display: block;
  position: absolute;
  bottom: 0;
  width: 0px;
  left: 30%;
  /* height: 4px; */
  /* background: #aa0000; */
  transform: scale(0);
  transition: ease-in-out 0.5s;
}
.enlaces .link-nav::after {
  border-bottom: 4px solid #aa0000;
  transform-origin: 100% 0%;
}

.enlaces a.link-nav:hover::after,
.enlaces a.link-nav:hover::before {
  transform: scale(1);
  left: 0;
  width: 100%;
}

.enlaces a.link-nav.enlace-activo::after {
  width: 100%;
  left: 0;
  transform: scale(1);
  border-bottom: 4px solid #aa0000;
}
.enlaces a.link-nav.enlace-activo{
  /* font-weight: bold; */
  color: #aa0000;
}

.short-navbar {
  background: #fff;
}

.banner-top:hover {
  transition: all ease-in-out .5s;
  height: 42px;
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
  .banner-top {
    right: 25px;
  }
  .enlaces .link-nav {
  font-weight: 200;
  font-size: 12px;
}
}
@media screen and (max-width: 922px){
  .banner-top {
    right: 1.5em;
  }
}

/* menu responsive in 840px */
@media screen and (max-width: 840px){
  .banner-top, .menu #enlaces {
    display: none;
  }
  .nav-contenedor{
    display: flex;
    justify-content: flex-end;
  }
 

}

</style>