<template>
  <section id="clientes-elengy" class="clients_logo_area section-padding">
    <div class="container">
      
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div class="item">
              <img src="../static/clientes/abb.png" alt="abb-logo" />
            </div>
          </div>
          <div class="swiper-slide">
             <div class="item">
              <img src="../static/clientes/siemens.png" alt="siemens-logo" />
            </div>
          </div>
          <div class="swiper-slide">
            <div class="item">
              <img src="../static/clientes/luzdelsur.png" alt="luzdelsur-logo" />
            </div>
          </div>
          <div class="swiper-slide">
            <div class="item">
              <img src="../static/clientes/enel.png" alt="enel-logo" />
            </div>
          </div>
          <div class="swiper-slide">
            <div class="item">
              <img src="../static/clientes/cobra.png" alt />
            </div>
          </div>
          <div class="swiper-slide">
            <div class="item">
              <img src="../static/clientes/milpo.png" alt />
            </div>
          </div>
          <div class="swiper-slide">
            <div class="item">
              <img src="../static/clientes/abengoa.png" alt />
            </div>
          </div>
        </div>
      </div>
    </div>

  </section>
</template>

<script>
export default {
  data: () => ({
    swiperClients: null
  }),
  mounted() {
      this.initSwiper();
  },
  methods: {
    initSwiper(){
      this.swiperClients = new Swiper('.swiper-container', {
      /* init: false, */
      loop: true,
      spaceBetween: 30,
      slidesPerView: 1,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      /* pagination: {
        el: '.swiper-pagination',
        clickable: true,
      }, */
      breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1224: {
          slidesPerView: 5,
          spaceBetween: 40,
        },
      }
    });
    }
  }
};
</script>

<style>
#clientes-elengy {
  width: 100%;
  background: #fff;
}

/*  Swiper */
.swiper-container {
      width: 100%;
      height: 100%;
    }
    .swiper-slide {
      text-align: center;
      font-size: 18px;
      background: #fff;

      /* Center slide text vertically */
      display: -webkit-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      align-items: center;
    }


/*  Swiper */
.clients_logo_area /* .clients_slider */ .item {
  text-align: center;
}

.clients_logo_area /* .clients_slider */ .item img {
  width: auto;
  text-align: center;
  display: block;
  margin: auto;
  line-height: 70px;
  -webkit-filter: grayscale(100%);
  -moz-filter: grayscale(100%);
  -o-filter: grayscale(100%);
  -ms-filter: grayscale(100%);
  filter: grayscale(100%);
  opacity: 0.2;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
  max-height: 60px;
  cursor: grabbing;
}

.clients_logo_area /* .clients_slider */ .item:hover img {
  opacity: 1;
  -webkit-filter: grayscale(0%);
  -moz-filter: grayscale(0%);
  -o-filter: grayscale(0%);
  -ms-filter: grayscale(0%);
  filter: grayscale(0%);
  transform: scale(1.035);
}
</style>