<template>
  <section id="clientes-elengy" class="clients_logo_area section-padding">
    <div class="container h-100">
      <div class="clients_slider owl-carousel">
        
        <div class="item">
          <img src="../static/clientes/abb.png" alt="abb-logo" />
        </div>
        <div class="item">
          <img src="../static/clientes/siemens.png" alt="siemens-logo" />
        </div>
        <div class="item">
          <img src="../static/clientes/luzdelsur.png" alt="luzdelsur-logo" />
        </div>
        <div class="item">
          <img src="../static/clientes/enel.png" alt="enel-logo" />
        </div>
        <div class="item">
          <img src="../static/clientes/cobra.png" alt />
        </div>
        <div class="item">
          <img src="../static/clientes/milpo.png" alt />
        </div>
        <div class="item">
          <img src="../static/clientes/abengoa.png" alt />
        </div>
      </div>

    </div>
  </section>
  <!-- <section class="clientes-section">
      <div class="container">
          <div class="row d-flex flex-column justify-content-center align-items-center flex-nowrap p-3 m-auto">
                  <h4 class="title-clientes">Nuestros potenciales clientes</h4>

                  <div class="clientes-container d-flex justify-content-center align-items-center flex-wrap">
                    <div class="oscurecedor m-2">
                        <img draggable="false" src="../static/abb.png" alt="">  
                    </div>


                    <div class="oscurecedor m-2">
                        <img draggable="false" src="../static/siemens.png" alt="">  
                    </div>
                    


                    <div class="oscurecedor m-2">
                        <img draggable="false" src="../static/luzdelsur.png" alt="">  
                    </div>
                    

                    <div class="oscurecedor m-2">
                        <img draggable="false" src="../static/enel.png" alt="">  
                    </div>
                  </div>
                
          </div>
      </div>
  </section>-->
</template>

<script>

export default {
  data: () => ({
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 3
      },
      1024: {
        items: 4
      },
      1224: {
        items: 5
      }
    }
  }),
  mounted() {
    this.iniciaOWLCarousel();
  },
  methods: {
    iniciaOWLCarousel() {
      if ($(".clients_slider").length) {
        $(".clients_slider").owlCarousel({
          loop: true,
          margin: 25,
          items: 7,
          nav: false,
          dots: false,
          responsiveClass: true,
          autoplay: 3000,
          slideSpeed: 300,
          paginationSpeed: 500,
          responsive: {
            0: {
              items: 1
            },
            768: {
              items: 3
            },
            1024: {
              items: 4
            },
            1224: {
              items: 5
            }
          }
        });
      }
    }
  }
};
</script>

<style>
#clientes-elengy {
  width: 100%;
  background: #fff;
}

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