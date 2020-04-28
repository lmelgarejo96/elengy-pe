<template>
<section class="clients_logo_area section-padding">
      <div class="container">
        <div class="clients_slider owl-carousel">
          <div class="item">
            <img src="../static/abb.png" alt="">
          </div>
          <div class="item">
            <img src="../static/siemens.png" alt="">
          </div>
          <div class="item">
            <img src="../static/luzdelsur.png" alt="">
          </div>
          <div class="item">
            <img src="../static/enel.png" alt="">
          </div>
          <!-- <div class="item">
            <img src="../static/abb.png" alt="">
          </div> -->
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
  </section> -->
</template>

<script>
export default {
    mounted(){
        this.iniciaOWLCarousel();
    },
    methods: {
        iniciaOWLCarousel(){
            if ($('.clients_slider').length) {
            $('.clients_slider').owlCarousel({
                loop: true,
                margin: 30,
                items: 4,
                nav: false,
                dots: false,
                responsiveClass: true,
                autoplay: 3000,
                slideSpeed: 300,
                paginationSpeed: 500,
                responsive: {
                    0: {
                        items: 1,
                    },
                    768: {
                        items: 3,
                    },
                    1024: {
                        items: 4,
                    },
                    1224: {
                        items: 4
                    }
                }
            })
            }
        }
    }
}
</script>

<style>
.clientes-section{
    background: #fff;
    width: 100vw;
    padding-bottom: 2em;
}
.clientes-section img{
    width: 8em;
    filter: grayscale(100%);
    transition: all ease-in-out .5s;
    opacity: .5;
}
.clientes-section .title-clientes {
    font-size: 1.2em;
    margin-bottom: 1.2em;
    color: rgb(185, 179, 179);
    /* color: #2e4369; */
    font-family: 'Raleway', Arial;
    margin-bottom: 40px;
    font-weight: 600;
    text-align: center;
    position: relative;
}
.clientes-section .title-clientes::before{
    content: "";
    position: absolute;
    bottom: -15px;
    left: calc(50% - 100px);
    width: 200px;
    height: 6px;
    background: rgb(185, 179, 179);
    /* background: #2e4369; */
}

.oscurecedor {
    cursor: grabbing;
}
.clientes-section img:hover{
    filter: grayscale(0%);
}
.oscurecedor:hover img {
    transition: all ease-in-out .5;
    filter: grayscale(0%);
    opacity: 1;
}
/* .oscurecedor::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(238,238,238,.775);
    transition: all ease-in-out .4s;
    cursor: pointer;
}
.oscurecedor:hover::after{
    background: none;
} */





.clients_logo_area .clients_slider .item {
    text-align: center
}

.clients_logo_area .clients_slider .item img {
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
    opacity: .2;
    -webkit-transition: all 0.3s ease 0s;
    -moz-transition: all 0.3s ease 0s;
    -o-transition: all 0.3s ease 0s;
    transition: all 0.3s ease 0s;
    max-width: 200px;
}

.clients_logo_area .clients_slider .item:hover img {
    opacity: 1;
    -webkit-filter: grayscale(0%);
    -moz-filter: grayscale(0%);
    -o-filter: grayscale(0%);
    -ms-filter: grayscale(0%);
    filter: grayscale(0%)
}

</style>