<template>
  <header class="header-elengy">
    <div id="carousel-elengy" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carousel-elengy" data-slide-to="0" class="active"></li>
        <li data-target="#carousel-elengy" data-slide-to="1"></li>
        <li data-target="#carousel-elengy" data-slide-to="2"></li>
        <li data-target="#carousel-elengy" data-slide-to="3"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div class="content-slide carousel1 opacity-animation" >
              <div class="items-slide">
                <div class="izquierda">
                    <div class="service animation-details-info1">
                      <p>Servicios y obras electromecánicas</p>
                    </div>
                    <div class="view-more animation-details-info2">
                      <p>Calidad en el servicio brindado</p>
                    </div>
                </div>
              </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="content-slide carousel2 opacity-animation" >
              <div class="items-slide">
                <div class="izquierda">
                    <div class="service animation-details-info1">
                      <p>Ingeniería secundaria y protecciones</p>
                    </div>
                    <div class="view-more animation-details-info2">
                      <p>Responsabilidad ante todo</p>
                    </div>
                </div>
              </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="content-slide carousel3 opacity-animation">
              <div class="items-slide">
                <div class="izquierda">
                    <div class="service animation-details-info1">
                      <p>Redes, comunicaciones y fibra óptica.</p>
                    </div>
                    <div class="view-more animation-details-info2">
                      <p>Profesionales a su servicio</p>
                    </div>
                </div>
              </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="content-slide carousel4 opacity-animation">
              <div class="items-slide">
                <div class="izquierda">
                    <div class="service animation-details-info1">
                      <p>Estudios Eléctricos en AT, MT y BT.</p>
                    </div>
                    <div class="view-more animation-details-info2">
                      <p>Compromiso y puntualidad</p>
                    </div>
                </div>
              </div>
          </div>
        </div>
        
      </div>
      <a
        class="carousel-control-prev"
        href="#carousel-elengy"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carousel-elengy"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
    <!-- <div class="circle-wave">
      <img src="../static/circle.png" alt="">
      <a href="#"><span class="material-icons">
        keyboard_arrow_down
        </span>
      </a>
    </div> -->
  </header>
</template>

<script>
export default {
  data: () => ({
      img1: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'
  }),
  mounted(){
    TweenMax.from(".header-elengy", 3, {
        delay: 4.5,
        opacity: 0,
        y: 500,
        ease: Expo.easeInOut
    });
  }
};
</script>

<style>

header {
  width: 100vw;
  height: calc(100vh - 160px);
  transition: all ease-in-out .5;
  /* position: relative; */
  overflow: hidden;
}
header .carousel, .carousel-inner, .carousel-item, .content-slide {
    width: 100%;
    height: 100%;
}
header .carousel-item .carousel1, header .carousel-item .carousel2, header .carousel-item .carousel3{
    width: 100%;
    height: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    transition: all ease-in-out .5s;
}
header .carousel-item .carousel1{
  background-position:  bottom;
}

header .carousel-item .carousel2, header .carousel-item .carousel3{
  background-position:  center;
}

/* https://img1.wsimg.com/isteam/ip/ba69460f-3ac0-4f5b-afa5-8b6ef5b4ac63/20180525_120228-0002.jpg */
.carousel1 {
  background: linear-gradient(rgba(22,123,177,.4), rgba(0,0,0,.475) ), url(https://img1.wsimg.com/isteam/ip/ba69460f-3ac0-4f5b-afa5-8b6ef5b4ac63/20180620_170345.jpg);
}
.carousel2 {
  background: linear-gradient(rgba(22,123,177,.4), rgba(0,0,0,.475) ), url(https://img1.wsimg.com/isteam/ip/ba69460f-3ac0-4f5b-afa5-8b6ef5b4ac63/20171027_074005.jpg/:/rs=w:1300,h:800);
}
.carousel3 {
  background: linear-gradient(rgba(22,123,177,.4), rgba(0,0,0,.475) ), url(https://img1.wsimg.com/isteam/ip/ba69460f-3ac0-4f5b-afa5-8b6ef5b4ac63/20171021_103749.jpg/:/rs=w:1300,h:800);
}
.carousel4 {
  transition: all ease-in-out .5s;
  width: 100vw;
  background: linear-gradient(rgba(22,123,177,.4), rgba(0,0,0,.475) ), url(../static/4.jpg);
  background-position:  center;
  background-size: cover;
  background-repeat: no-repeat;
}



.items-slide {
  width: 84%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
}
.izquierda, .derecha{
    display: flex;
    margin: 20px 50px;
    padding-top: 20px;
}
.izquierda {
  flex-flow: column nowrap;

}
.items-slide .izquierda .service{
  min-width: 260px;
  background: rgba(251,218,77, .675);
  padding: 20px;
  transition: all ease-in-out .5s;
}

.items-slide .izquierda .service p{
  margin: 10px 10px;
  color: #000;
  font-family: 'Raleway', "Helvetica Neue", Helvetica, sans-serif;
  font-weight: 600;
  font-size: 25px;
}


.items-slide .izquierda .view-more {
  margin-top: 8px;
  max-width: 275px;
  padding: 10px 30px;
  background: rgba(0,0,0, .775);
}



.items-slide .izquierda .view-more  p{
  display: inline;
  font-family: 'Raleway', "Helvetica Neue", Helvetica, sans-serif;
  font-weight: 400;
  font-size: 15px;
  color: #fff;
}

.derecha img {
    max-width: 300px;
    max-height: 400px;
    border-radius: 20px;
}


.carousel-control-prev,.carousel-control-next {
  width: 8%;
}

.carousel-control-prev span,.carousel-control-next span {
  margin-top: 50px;
}


.circle-wave{
  position: absolute;
  bottom: 0;
  margin-bottom: -10px;
  width: 100%;
  display: flex;
  justify-content: center;
}
.circle-wave a {
  position: absolute;
  bottom: 0;
  transition: all ease-in-out .5;
  animation-name: moveupanddown;
  animation-duration: .8s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
}
.circle-wave a span {
  color: #000;
  font-weight: bold;
  font-size: 32px;
}

.animation-details-info1 {
  animation-name: detailsAnimation;
  animation-duration: 1s;
  animation-timing-function: ease-in-out;
}
.animation-details-info2 {
  animation-name: detailsAnimation2;
  animation-duration: 1.8s;
  animation-timing-function: ease-in-out;
}

.opacity-animation {
  animation-name: opacityAnimation;
  animation-duration: 1s;
  animation-timing-function: ease-in-out;
}
@keyframes moveupanddown {
  from {
    bottom: 5px;
  }
  to{
    bottom: 0;
  }
}

@keyframes detailsAnimation {
  from {
    transform: translateY(-200px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes detailsAnimation2 {
  0%{
    transform: translateY(-50px);
    opacity: 0;
  }
  75%{
    transform: translateY(-50px);
    opacity: 0;
  }
  100%{
    transform: translateY(0);
    opacity: 1;
  }
  
}

@keyframes opacityAnimation {
  from{ 
    opacity: 0;
  }
  to{
    opacity: 1;
  }
}

@keyframes animationUp {
  from{ 

  }
  to{

  }
}

@media screen and (max-width: 650px){
  header {
    height: 100vh;
  }
  .items-slide {
    width: 80%;
    justify-content: center;
  }
  .items-slide .izquierda .view-more {
    max-width: 300px;
  }
}
</style>