<template>
  <div class="service-content" data-app>
      <Navbar :isIndex="false" v-on:closeMenu="closeMenu($event)" v-on:openMenu="openMenu($event)"/>
      <MenuResponsive v-if="menu" v-on:closeMenuResponsive="closeMenuResponsive($event)" />
      <section class="section-servicios-page">
          
          <div class="container animationMoveUp pt-4 pb-4 mb-2">
              <h1 class="text-center mt-5 mb-0 pb-0">{{servicio.name_service}}</h1>
              <p><span>(Lista de características)</span></p>
              <div class="flex-fila ">

                  <div class="second-element">
                      <img draggable="false" class="img-fluid" src="../../static/valores2.svg" alt="">
                  </div>
                  <div class="first-element h-100">
                      <div class="card-servicio-page">
                          <ul>
                              <div v-for="(item, index) in servicio.characteristics" :key="index">
                                <li  v-if="index+1 < 6">
                                        {{item}}
                                </li>
                              </div>
                        </ul>
                      </div>
                  </div>
                  
              </div>

              <div v-if="servicio.characteristics.length >= 6" class="flex-fila ">
                  
                  <div class="first-element">
                      <div class="card-servicio-page">
                          <ul>
                              <div v-for="(item, index) in servicio.characteristics" :key="index">
                                <li  v-if="index+1 >= 6">
                                        {{item}}
                                </li>
                              </div>
                        </ul>
                      </div>
                  </div>
                  <div class="second-element">
                      <img draggable="false" class="img-fluid" src="../../static/engineer.svg" alt="">
                  </div>

              </div>
              <div class="controls-row mb-4 pl-3 pr-3">
              <!-- <div class="container"> -->
                    <div class="controls-services">
                        <a class="enlace-servicios" :href="controls.prev.Uri">
                            <i class="material-icons">skip_previous</i>
                            Prev
                            <!-- {{controls.prev.name_service}} -->
                        </a>
                        <a class="servicios-list-link animationMoveUp" href="/servicios" >Listado de Servicios</a>
                        <a class="enlace-servicios "   :href="controls.next.Uri">
                           <!--  {{controls.next.name_service}} -->
                            Next
                            <i class="material-icons">skip_next</i>

                        </a>
                    </div>
          </div>
          </div>

      </section>

      <Clientes/>
      <Footer/>

  </div>
</template>

<script>
import Navbar from '../../components/Navbar';
import MenuResponsive from '../../components/MenuResponsive';
import Clientes from '../../components/ClientesIndex';
import Footer from '../../components/Footer';
export default {
    components: {
        Navbar,
        MenuResponsive,
        Footer,
        Clientes
    },
    data: () => ({
        menu: false,
        servicios: [],
        restServices: [],
        servicio: {
            name_service: '',
            characteristics: []
        },
        controls: {
            next: {
                Uri: '',
                name_service: ''
            },
            prev: {
                Uri: '',
                name_service: ''
            }
        }
    }),
    computed: {
    
    },
    async mounted(){
        try {
            AOS.init();
            let bodyEl = document.body;
            bodyEl.scrollTop = 0;
            this.servicios = await this.$store.state.services.all;
            /* this.servicio.nombre = this.$route.params.NombreServicio; */
            document.getElementById('hamburger-menu').classList.add('red-hamburger');
            this.buscaServicio(this.$route.params.NombreServicio);
            if(window.screen.width >840){
                this.addActiveLink();
            }
        } catch (error) {}
    },
    methods: {
        openMenu(bool){ 
            try {
                if(bool){
                document.querySelector('.icon-three').classList.add('active-three');
                this.menu = bool;
                }else{
                document.querySelector('.icon-three').classList.remove('active-three');
                const menu = document.getElementById('menu-responsive');
                menu.style.left = '-100vh';
                this.closeMenuResponsive(bool);

                }
            } catch (error) {}
        },
        closeMenu(bool){
            this.menu = bool;
        },
        closeMenuResponsive(bool){
            setTimeout(() => {
                this.menu = bool;
            }, 700)
        },
        changePage(){
            this.buscaServicio(this.$route.params.NombreServicio);
        },
        buscaServicio(nombre){
            try {
                let servicio;
                this.restServices = [];
                for(let i=0; i<this.servicios.length; i++){
                    const completeName = this.servicios[i].redirectTo;
                    const uri = completeName.substring((completeName.length-nombre.length), completeName.length);
                    if(uri === nombre){
                        if(i === 0){
                            this.controls.prev.Uri = this.servicios[this.servicios.length-1].redirectTo;
                            this.controls.prev.name_service = this.servicios[this.servicios.length-1].name_service;
                            this.controls.next.Uri = this.servicios[i+1].redirectTo;
                            this.controls.next.name_service = this.servicios[i+1].name_service;
                        }else if(i>0 && i<this.servicios.length-1){
                            this.controls.prev.Uri = this.servicios[i-1].redirectTo;
                            this.controls.prev.name_service = this.servicios[i-1].name_service;

                            this.controls.next.Uri = this.servicios[i+1].redirectTo;
                            this.controls.next.name_service = this.servicios[i+1].name_service;
                        }else{
                            this.controls.prev.Uri = this.servicios[i-1].redirectTo;
                            this.controls.prev.name_service = this.servicios[i-1].name_service;

                            this.controls.next.Uri = this.servicios[0].redirectTo;
                            this.controls.next.name_service = this.servicios[0].name_service;
                        }
                        
                        servicio = this.servicios[i];
                        /* break; */
                    }else {
                        this.restServices.push(this.servicios[i])
                    } 
                }
                this.servicio = servicio;
            } catch (error) {}
        },
        addActiveLink(){
            const links = document.querySelectorAll('.link-nav');
            const sub_enlaces = document.querySelectorAll('.sub-enlaces2');
            const URIactual = window.location.pathname.substring(1, window.location.pathname.length);
            for(let i=0; i<links.length; i++) {
                const pathName = links[i].pathname.toString()
                const nameEnlace = pathName.substring(1, pathName.length);
                if(nameEnlace === 'servicios'){
                    links[i].classList.add('enlace-activo');
                     for(let j=0; j<sub_enlaces.length; j++) {
                        const pathName2 = sub_enlaces[j].pathname.toString()
                        const nameEnlace2 = pathName2.substring(1, pathName2.length);
                        if(URIactual === nameEnlace2){
                            sub_enlaces[j].classList.add('active');
                            break;
                        }
                    }
                    break;
                }
            }
           
        }
    }
}
</script>

<style>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body{
    background: #faf9ff;
    height: 100%;
}

body::-webkit-scrollbar {
    width: .7em;
}

/* body::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
} */

body::-webkit-scrollbar-thumb {
    background-color: #BA0F22;
    outline: 1px solid slategrey;
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

/* @media (min-width: 1000px) {
    .section-padding {
        padding: 100px 0
    }
} */

@media (min-width: 1200px) {
    .section-padding {
        padding: 100px 0
    }
}

.service-content {
    position: relative;
}

.section-servicios-page {
    padding-top: 140px;
    min-height: 100vh;
    margin-bottom: 100px;
}

@media screen and (max-width: 600px){
    .section-servicios-page {
        padding-top: 77px;
    }
}

.section-servicios-page h1{
    font-family: 'Raleway',Arial, "Helvetica Neue", Helvetica, sans-serif;
    font-weight: 500;
}

.section-servicios-page  .container {
    background: #fff;
    border-radius: 5px;
    box-shadow: 0px 10px 20px 0px rgba(33, 20, 106, 0.1);
    transition:  all ease-in-out 1s;
}

.section-servicios-page  .container > p{
    padding-top: 0px;
    display: flex;
    justify-content: center;
}
.section-servicios-page img {
    max-height: 350px;
    min-width: 280px;
}
.card-servicio-page{
    margin: 20px 20px;
}
.card-servicio-page ul{
    list-style-type: square;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    height: 100%;
    min-width: 280px;
}

.card-servicio-page ul li, .controls-row h5{
    margin: 10px 0;
    font-family: 'Montserrat', Arial, Helvetica, sans-serif;
    font-weight: 100;
    color: rgba(0,0,0,.75);
    font-size: .85em;
}

.card-servicio-page ul li, .controls-row a{
    text-decoration: none;
}


.flex-fila {
    width: 100%;
    display: flex; 
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    padding: 60px 60px;

}



@media screen and (max-width: 960px){
    .flex-fila{
        flex-flow: column wrap;
    }
    .first-element {
        order: 1;
    }
}
/* @media screen and (max-width: 800px){
    .flex-fila:last-child {
        flex-flow: row-reverse nowrap;
    }
    .flex-fila:first-child {
        flex-flow: row-reverse nowrap;
    }
} */

@media screen and (max-width: 575px){
    .flex-fila {
        padding: 20px 15px;
    }
    .section-servicios-page > .container {
       width: 95%;
    }
    .section-servicios-page h1 {
        font-size: 25px;
    }
    .card-servicio-page ul li{
        font-size: 12px;
    }
    
}
@media screen and (max-width: 380px){
    .section-servicios-page img {
        min-width: 250px;
    }
    .card-servicio-page ul{
        min-width: 240px;
    }
}

/* .first-element{

} */
.second-element, .first-element{
    height: 100%;
    display: block;
    flex: 1;
}
.second-element {
    display: flex;
    justify-content: center;
}

.controls-services {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.controls-services .enlace-servicios{
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgba(38, 33, 85, 0.75); 
}
.controls-services .enlace-servicios:hover{
    color: rgba(0,0,0,.75);

}

.controls-services .enlace-servicios:first-child i{
    margin-right: 10px;
}
.controls-services .enlace-servicios:last-child i{
    margin-left: 10px;
}

.animationMoveUp {
    animation-name: moveUp;
    animation-timing-function: ease-in-out;
    animation-duration: 2s;
}

@keyframes moveUp {
    from {
        transform: translateY(400px) scale(0);
        opacity: 0;
    }
    to {
        transform: translateY(0) scale(1);
        opacity: 1;
    }
}

.animationMoveLeft {
    animation-name: moveLeft;
    animation-timing-function: ease-in-out;
    animation-duration: 2s;
}

@keyframes moveLeft {
    from {
        transform: translateX(400px);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
}

.animationMoveRight {
    animation-name: moveRight;
    animation-timing-function: ease-in-out;
    animation-duration: 2s;
}

@keyframes moveRight {
    from {
        transform: translateX(-400px);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
}

.other-services a {
    text-decoration: none;
    text-transform: uppercase;
    padding: 5px 25px;
    background: #882727;
    color: #fff;
    font-size: .78em;
    max-width: 80%;
    border-radius: 30px;
    transition: color ease-in-out .3s;
}

.other-services a:hover {
    background: #802424;
}

.card-other-services {
    padding: 20px 14px;
    background: #1A1A1A;
    font-family: 'Raleway', Arial, "Helvetica Neue", Helvetica, sans-serif;
    color: #fff;
    display: block;
    max-width: 320px;
    height: 425px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    align-items: center;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    margin: auto;
}
.card-other-services p{
    color: rgba(255, 255, 255, .6);
    font-size: 13px;
    text-align: center;
}

.card-other-services h5 {
    text-align: center;
    font-weight: bold;
    font-size: 1em;
    text-shadow: 0px 2px 1px rgba(0,0,0,.75);
}

.other-services h3 {
    font-weight: 700;
    color: #3a414e;
    margin-bottom: 10px;
}

.bg-menu {
    background: #fff !important;
}

.servicios-list-link {
    padding-top: 5px;
    font-size: 11px;
    font-family: 'Roboto', "Helvetica Neue", Helvetica, sans-serif;
    text-transform: uppercase;
}

</style>