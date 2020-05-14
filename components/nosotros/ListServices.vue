<template>
  <div data-app class="list-services">
    <!-- Swiper -->
    <div class="container-fluid">
        <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(servicio, index) in servicios" :key="index">

                <div class="img-box">
                    <img
                    draggable="false"
                    :src="servicio.img"
                    alt
                    />
                </div>
                <div class="details">
                    <h3 >{{servicio.name_service}} </h3>
                    <a class="button" :href="servicio.redirectTo">Ver más...</a>
                </div>

                <div class="eye"  data-aos="fade-up" data-aos-duration="1500">
                    <v-tooltip style="text-align: center;" max-width="260" min-width="210" color="rgba(0,0,0,.975)" :v-model="`tooltip${index+1}`" left>
                      <template v-slot:activator="{ on }">
                        <a href="#contacto-elengy" v-on="on"  @click="contactService(index)" style="outline:none;">
                          <i  class="far fa-envelope" style="font-size: 20px; color: #fff;"></i>
                        </a>
                      </template>
                      <span style="text-align: center;">Presiona para contactar por {{servicio.name_service}}</span>
                    </v-tooltip>
                </div>

        </div>

      </div>
      <!-- Add Pagination -->
      <!-- <div class="swiper-pagination"></div> -->
    </div>
    </div>   
    
  </div>
</template>

<script>
import IMGComunicaciones from '../../static/redescomunicaciones.webp';
export default {
    data: () => ({
        servicios: [],
        tooltip1: false,
        tooltip2: false,
        tooltip3: false,
        tooltip4: false,
    }),
    created(){
        this.servicios = this.$store.state.services.all;
    },
    mounted() {
            let swiper = new Swiper(".swiper-container", {
            effect: "coverflow",
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: "auto",
            autoplay: {
                delay: 5000,
                disableOnInteraction: true,
            },
            coverflowEffect: {
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true
            },
            pagination: {
                el: ".swiper-pagination"
            }
        });

    },
    methods: {
        contactService(index){
            const message = {
                index: index,
                mensaje: `Hola, quisiera contar con su servicio de ${this.servicios[index].name_service}.`
            }
            this.$emit('contactService', message);
        }
    }
};
</script>

<style>
*{
    margin: 0;
    padding: 0;
}
/* body {
  background: #000;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
} */

.list-services {
    background: #fff;
    width: 100%;
}

.swiper-container {
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
}
.swiper-wrapper {
    width: 100%;
}
.swiper-slide {
  width: auto;
  height: 65vh;
  max-height: 560px;
  background: #faf9ff;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  /* background: #000; */
  border: none;
  margin: 0 1.5em;
  box-shadow: 0px 10px 20px 0px rgba(33, 20, 106, 0.3);
  position: relative;
  box-sizing: border-box;
}

.swiper-slide  .img-box{
    min-width: 330px;
    width: 100%;
    /* max-height: 225px; */
    background-position: top;
    background-repeat: no-repeat;
    background-size: cover;
    height: 85%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #faf9ff;
    padding-top: 15px;
    padding-left: 15px;
    padding-right: 15px;
}

.swiper-slide .img-box img {
    /* display:block; */
    height: 100%;
    width: auto;
}

.swiper-slide  .details {
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    height: 15%;
    margin: 0;
    padding: 10px 10px;
}

.swiper-slide  .details h3{
    font-size: .9rem;
    margin-bottom: 10px;
    color: #000;
    /* color: #fff; */
    z-index: 10;
    text-align: center;
}
/* .swiper-slide  .details  span{
    color: #f44336;
    font-size: 14px;
    text-align: center;
} */

.swiper-slide  .details a {
    text-decoration: none;
    color: #fff;
}
.swiper-slide  .button {
  padding: 5px 10px;
  background: rgba(170,0,0,.8);;
  color: #fff;
  text-transform: uppercase;
  border-radius: 20px;
  font-size: 10px;
  font-weight: bold;
  width: 50%;
  text-align: center;
  transition: all ease-in-out .2s;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
}

.swiper-slide .button:hover {
  background: rgba(20, 20, 20, 0.9);
}

.eye {
  position: absolute;
  top: 3.5%;
  right: 0;
  left: 0;
  margin: auto;
  width: 35px;
  height: 35px;
  color: #fff;
  z-index: 40;
}

.eye a {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  background: rgba(0,0,0,.3);
  text-decoration: none;
}
.eye a i{
  margin-left: 0;
  padding-left: 0;
}

@media screen and (max-width: 600px){
    .swiper-slide {
        height: 70vh;
    }
    .swiper-slide  .img-box{
        padding-top: 15px;
        height: 80%;
        min-width: 300px;
    }
    .swiper-slide .details {
        height: 20%;
    }
    .swiper-slide  .details h3{
        font-size: .8rem;
    }
    .swiper-slide  .button {
        padding: 4px 8px;
        width: 50%;
    }
    
}

@media screen and (min-width: 1200px){
    .swiper-slide {
        min-width: 340px;
        height: 68vh;
    }
}

@media screen and (min-height: 1000px){
    .swiper-slide  .details h3{
        font-size: 1.3rem;
        margin-bottom: 15px;
    }
    .swiper-slide  .button {
        padding: 9px 15px;
        font-size: 13px;
    }
}

</style>