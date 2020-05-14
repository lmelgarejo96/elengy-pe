<template>
  <section data-app id="servicios-elengy" class="services-section">
    <!-- <div class="bg-section-index"></div> -->
    <div class="section-margin-2">
    <div class="container contenedor-servicios ">
      <div class="section-intro text-center" >
          <h2 class="section-intro__title" data-aos="fade-up" data-aos-duration="1000">Nuestros servicios</h2>
          <p class="section-intro__subtitle" data-aos="fade-up" data-aos-duration="1000">En elengy ofrecemos las siguientes soluciones y servicios integrales para sus proyectos.</p>
      </div>
    </div>
    <!-- <ServicesList v-on:contactService="contactService($event)"/> -->
    <div class="container">
      <div class="row">
        <CardService v-for="(servicio, index) in servicios" :key="index" :service="servicio" data-aos="fade-up" data-aos-duration="1500" :data-aos-delay="(index+1)*150"/>
      </div>
    </div>
    </div>
    
  </section>
</template>

<script>
import CardService from '../components/ServicesCard';
export default {
  components:{
    CardService,

  },
  data:() => ({
    delay: 150,
    servicio: {},
    servicios: [],
    tooltip1: false,
    tooltip2: false,
    tooltip3: false,
    tooltip4: false,
    dialog: false,
    card1: true,
    card2: true,
    card3: true,
    card4: true,
    /* dialog_servicios2: false,
    dialog_servicios3: false,
    dialog_servicios4: false, */
  }),
  computed: {
    /* servicios () { return this.$store.state.services} */
  },
  /* created(){
    }, */
  beforeMount(){
    
    this.servicios = this.$store.state.services.all;
  },
  mounted() {
  },
  methods: {
    contactService(message) {
      this.$emit('contactService', message);
    },
    openService(servicio, numero){
      /* const idCardSelected = 'card-service'+numero;
      const cardSelected = document.getElementById(idCardSelected);
      const el = document.querySelectorAll('#'+idCardSelected+' > .rotado')[0];
      cardSelected.style.transform = "scale(1.1) rotate3d(0,1,0, 180deg)";
      setTimeout(() => {
        el.style.zIndex = "50";
        this.card1 = false;
      }, 500); */

      this.dialog = true;
      this.servicio = servicio;
    },
    closeService(numero){
      /* const idCardSelected = 'card-service'+(numero+1);
      const cardSelected = document.getElementById(idCardSelected);
      cardSelected.style.transform = "scale(1) rotate3d(0,1,0, 0deg)";
      const el = document.querySelectorAll('#'+idCardSelected+' > .rotado')[0];
      setTimeout(() => {
        el.style.zIndex = "-1";
        this.card1 = true;
      }, 500); */

      this.dialog = false;
      
    },
    closeModal(ev){
      console.log('close', ev);
      this.dialog = ev;
      /* console.log(this.dialog); */
    }
  }
};
</script>

<style>
.services-section {
  width: 100vw;
  position: relative;
  overflow: hidden;
  /* background: #faf9ff; */
  background: #fff;
  border-bottom: 2px solid #faf9ff; ;
  padding-top: 70px;
  padding-bottom: 50px;
  box-sizing: border-box;
}

@media screen and (max-width: 1000px){
  .services-section {
    padding-top: 100px;
  }
}

/* .services-section img {
  height: 150px;
  width: 100%;
  z-index: 10;
}
 */
.services-section h2 {
  font-size: 2rem;
  color: #3a414e;
  /* color: #fff; */
  z-index: 10;
}
.contenedor-servicios {
  padding: 0 3rem; 
}




@media screen and (max-width: 600px){
  .contenedor-servicios {
    padding: 0 1.2rem; 
  }
}



</style>