<template>
  <section id="caracteristicas-elengy" class="section-caract section-padding">
      <div class="container">
        <div class="section-intro pb-85px text-center">
          <h2 class="section-intro__title mb-3" data-aos="fade-up" data-aos-duration="1000">Características que ofrecemos</h2>
          <!-- <p class="section-intro__subtitle" data-aos="fade-up" data-aos-duration="1000">Vel aliquam quis, nulla pede mi commodo tristique nam hac. Luctus torquent velit felis commodo pellentesque nulla cras. Tincidunt hacvel alivquam quis nulla pede mi commodo tristique nam hac  luctus torquent</p> -->
        </div>

        <div class="row">
          <div class="col-lg-6">

            <div class="row offer-single-wrapper">
              
              
              <div v-for="(caracteristica, i) in caracteristicas" :key="i+3300"   class="col-lg-6 offer-single">
                <div class="card offer-single__content text-center m-3" data-aos="fade-up" data-aos-duration="1500">
                  <span class="offer-single__icon" data-aos="fade-up" data-aos-duration="1500">
                    <i :class="caracteristica.icons" aria-hidden="true"></i>
                  </span>
                  <h4 data-aos="fade-up" data-aos-duration="1500">{{caracteristica.title}}</h4>
                  <p data-aos="fade-up" data-aos-duration="1500">{{caracteristica.desc}}</p>
                </div>
              </div>

            </div>


          </div>
          <div class="col-lg-6">
            <div class="offer-single__img">
              <img draggable="false" class="img-fluid" :src="imgCaracteristicas" alt="undraw-elengy-offer"  data-aos="fade-up" data-aos-duration="1500">
            </div>
          </div>
        </div>
      </div>
    </section>
</template>

<script>
import {mapState} from 'vuex';
export default {
  computed: {
        ...mapState({
            caracteristicas: state => state.datosElengy.datos.caracteristicas,
            imgCaracteristicas: state => state.datosElengy.datos.imgCaracteristicas,
        })
  },
}
</script>

<style>
.section-caract{
  min-height: 100vh;
  width: 100%;
  overflow: hidden;
  background: #faf9ff;
}
.section-intro {
    max-width: 630px;
    margin-right: auto;
    margin-left: auto;
}

.section-intro__title {
    font-weight: 700;
    color: #3a414e;
    margin-bottom: 10px;
}
.section-intro__subtitle {
    font-size: 15px;
    color: #797979;
    margin-bottom: 0;
}
.offer-single {
    margin-bottom: 30px;
}

.offer-single__icon {
    display: inline-block;
    margin-bottom: 15px;
}

.offer-single__icon i,
.offer-single__icon span {
    font-size: 30px;
    color: #21146a;
}

.section-caract .card {
  -webkit-transition: all 0.3s ease 0s;
    -moz-transition: all 0.3s ease 0s;
    -o-transition: all 0.3s ease 0s;
    transition: all 0.3s ease 0s;
}

.offer-single__content {
    border: 0;
    border-radius: 0;
    background: #fff;
    padding: 30px 23px;
    -webkit-transition: all 0.3s ease 0s;
    -moz-transition: all 0.3s ease 0s;
    -o-transition: all 0.3s ease 0s;
    transition: all 0.3s ease 0s;
}

.offer-single__content h4 {
    font-size: 22px;
    font-weight: 600;
}

.offer-single__content p {
    margin-bottom: 0;
    font-size: 14px;

}

.offer-single__content:hover {
    background: #fff;
    box-shadow: 0px 10px 20px 0px rgba(33, 20, 106, 0.1);
}
@media (min-width: 991px) {
    .offer-single-wrapper .offer-single:nth-child(even) {
        position: relative;
        top: 40px;
    }
}

@media (min-width: 991px) {
    .offer-single__img {
        position: absolute;
        width: 100%;
        top: 50%;
        transform: translateY(-50%);
    }
}

@media (min-width: 991px) and (min-width: 1200px) {
    .offer-single__img {
        transform: translateY(0);
        top: 50px;
        left: 100px;
    }
}
</style>