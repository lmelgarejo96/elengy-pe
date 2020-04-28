<template>
  <section class="services-section">
    <div class="section-margin-2">
    <div class="container mt-2">
      <div class="section-intro pb-85px mb-5 text-center" >
          <h2 class="section-intro__title" data-aos="fade-up" data-aos-duration="1000">Nuestros servicios</h2>
          <p class="section-intro__subtitle" data-aos="fade-up" data-aos-duration="1000">Ofrecemos las siguientes soluciones y servicios integrales para sus proyectos.</p>
      </div>
      <div class="row">
        <div class="col-lg-3 col-md-6 col-sm-6 mb-3" >
          <div class="card card-block pt-3 pb-2 pr-3 pl-3 h-100" data-aos="fade-up" data-aos-duration="1500">
            <!-- <h4 class="card-title text-right">
              <i class="fa fa-external-link"></i>
            </h4> -->
            <img draggable="false" src="https://img1.wsimg.com/isteam/ip/ba69460f-3ac0-4f5b-afa5-8b6ef5b4ac63/IMG_20180104_154831.jpg/:/cr=t:3.03%25,l:0%25,w:100%25,h:89.29%25/rs=w:600,h:300,cg:true" alt="Photo of sunset"/>
            <h5 class="card-title mt-3 mb-3">Obras electromecánicas</h5>
            <p class="card-text mb-0">Realizamos servicio de obras electromecánicas.</p>
            <v-card-actions>
              <v-spacer></v-spacer>
                <v-btn to="/servicios" class="ma-2" style="border-radius: 20px; outline: none;" tile  text color="#af0000">
                  ver más  <i class="fa fa-external-link ml-2" style="font-size: 13px; padding-top: 2px;"></i> 
                </v-btn>
            </v-card-actions>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-6 mb-3" >
          <div class="card card-block pt-3 pb-2 pr-3 pl-3" data-aos="fade-up" data-aos-duration="1500">
            <!-- <h4 class="card-title text-right">
              <i class="material-icons">settings</i>
            </h4> -->
            <img draggable="false" src="../static/ingenieriasecyprotecciones.jpg" alt="Photo of sunset" />
            <h5 class="card-title mt-3 mb-3">Ingeniería secundaria y protecciones</h5>
            <p class="card-text mb-0">Brindamos servicios de Ingeniería secundaria y protecciones.</p>
            <!-- <a href="#" class="button button-light text-center">Ver más</a> -->
            <v-card-actions>
              <v-spacer></v-spacer>
                <v-btn to="/servicios" class="ma-2" style="border-radius: 20px; outline: none;" tile  text color="#af0000">
                  ver más  <i class="fa fa-external-link ml-2" style="font-size: 13px; padding-top: 2px;"></i> 
                </v-btn>
            </v-card-actions>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-6 mb-3" >
          <div class="card card-block pt-3 pb-2 pr-3 pl-3" data-aos="fade-up" data-aos-duration="1500">
            <!-- <h4 class="card-title text-right">
              <i class="material-icons">settings</i>
            </h4> -->
            <img draggable="false"
              src="//img1.wsimg.com/isteam/ip/ba69460f-3ac0-4f5b-afa5-8b6ef5b4ac63/IMG_20180813_114204.jpg/:/cr=t:5.76%25,l:0%25,w:100%25,h:60.24%25/rs=w:600,h:300,cg:true"
              alt="Photo of sunset"
            />
            <h5 class="card-title mt-3 mb-3">Redes, comunicaciones y fibra óptica</h5>
            <p class="card-text mb-0">Realizamos todo tipo de obras en redes, comunicaciones y fibra óptica.</p>
            <v-card-actions>
              <v-spacer></v-spacer>
                <v-btn to="/servicios" class="ma-2" style="border-radius: 20px; outline: none;" tile  text color="#af0000">
                  ver más  <i class="fa fa-external-link ml-2" style="font-size: 13px; padding-top: 2px;"></i> 
                </v-btn>
            </v-card-actions>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-6 mb-3">
          <div class="card card-block pt-3 pb-2 pr-3 pl-3"   data-aos="fade-up" data-aos-duration="1500">
            <!-- <h4 class="card-title text-right">
              <i class="material-icons">settings</i>
            </h4> -->
            <img draggable="false"
              src="https://img1.wsimg.com/isteam/ip/ba69460f-3ac0-4f5b-afa5-8b6ef5b4ac63/IMG_0985.JPG/:/cr=t:29.24%25,l:0%25,w:100%25,h:43.1%25/rs=w:600,h:300,cg:true"
              alt="Photo of sunset"
            />
            <h5 class="card-title mt-3 mb-3">Estudios Eléctricos en AT, MT y BT.</h5>
            <p class="card-text mb-0">Realizamos estudios eléctricos en AT, MT y BT.</p>
            <v-card-actions>
              <v-spacer></v-spacer>
                <v-btn to="/servicios" class="ma-2" style="outline: none;" tile  text color="#af0000">
                  ver más  <i class="fa fa-external-link ml-2" style="font-size: 13px; padding-top: 2px;"></i> 
                </v-btn>
            </v-card-actions>
          </div>
        </div>
      </div>
    </div>
    </div>
  </section>
</template>

<script>
export default {
  mounted() {},
  methods: {}
};
</script>

<style>
.services-section {
 /*  min-height: 100vh; */
  width: 100vw;
  background: #fff;
  position: relative;
  overflow: hidden;
}


.services-section img {
  height: 150px;
  width: 100%;
}

.services-section h2 {
  font-size: 2rem;
  color: #3a414e;
}

.services-section div [class^="col-"] {
  padding-left: 5px;
  padding-right: 5px;
}
.services-section .card {
  transition: 0.5s;
  /* cursor: pointer; */
  border: 1px solid #eae7f5;
}
.services-section .card-title {
  font-size: 15px;
  transition: 1s;
  /* cursor: pointer; */
}
.services-section .card-title i {
  font-size: 15px;
  transition: 1s;
  cursor: pointer;
  color: #ffa710;
}
.services-section .card-title i:hover {
  transform: scale(1.25) rotate(100deg);
  color: #18d4ca;
}
.services-section .card:hover {
  /* transform: scale(1.03); */
  box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.1);
}
.services-section .card-text {
  height: 80px;
}

.services-section .card::before,
.card::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transform: scale3d(0, 0, 1);
  transition: transform 0.3s ease-out 0s;
  background: rgba(255, 255, 255, 0.1);
  content: "";
  pointer-events: none;
}
.services-section .card::before {
  transform-origin: left top;
}
.services-section .card::after {
  transform-origin: right bottom;
}
.services-section .card:hover::before,
.card:hover::after,
.card:focus::before,
.card:focus::after {
  transform: scale3d(1, 1, 1);
}

.services-section a {
  text-decoration: none;
}
</style>