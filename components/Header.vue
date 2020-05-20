<template>
  <header id="header-elengy" class="header-elengy">

    <!-- <div id="carousel-elengy" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carousel-elengy" data-slide-to="0" class="active">1</li>
        <li data-target="#carousel-elengy" data-slide-to="1">2</li>
        <li data-target="#carousel-elengy" data-slide-to="2">3</li>
        <li data-target="#carousel-elengy" data-slide-to="3">4</li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active" data-interval="6500">
          <div class="content-slide carousel1 opacity-animation" >
              <div class="items-slide">
                <div class="izquierda animation-card">
                    <div class="service ">
                      <h3 class="animation-details-info1"><span>Soluciones y servicios integrales para sus proyectos</span></h3>
                      <p class="animation-details-info1">Te invitamos a conocer nuestra lista de servicios integrales.</p>
                      <a href="#" class="animation-2">
                        <span class="material-icons">keyboard_arrow_right</span>
                        Conoce más aquí
                      </a>
                    </div>
                </div>
              </div>
          </div>
        </div>
        <div class="carousel-item" data-interval="6500">
          <div class="content-slide carousel2 opacity-animation" >
              <div class="items-slide">
                <div class="izquierda animation-card">
                    <div class="service ">
                      <h3 class="animation-details-info1"><span>Soluciones y servicios integrales para sus proyectos</span></h3>
                      <p class="animation-details-info1">Te invitamos a conocer nuestra lista de servicios integrales.</p>
                      <a href="#" class="animation-2">
                        <span class="material-icons">keyboard_arrow_right</span>
                        Conoce más aquí
                      </a>
                    </div>
                </div>
              </div>
          </div>
        </div>
        <div class="carousel-item" data-interval="6500">
          <div class="content-slide carousel3 opacity-animation">
              <div class="items-slide">
                <div class="izquierda animation-card">
                    <div class="service ">
                      <h3 class="animation-details-info1"><span>Soluciones y servicios integrales para sus proyectos</span></h3>
                      <p class="animation-details-info1">Te invitamos a conocer nuestra lista de servicios integrales.</p>
                      <a href="#" class="animation-2">
                        <span class="material-icons">keyboard_arrow_right</span>
                        Conoce más aquí
                      </a>
                    </div>
                </div>
              </div>
          </div>
        </div>
        <div class="carousel-item" data-interval="6500">
          <div class="content-slide carousel4 opacity-animation">
              <div class="items-slide">
                <div class="izquierda animation-card">
                    <div class="service ">
                      <h3 class="animation-details-info1"><span>Soluciones y servicios integrales para sus proyectos</span></h3>
                      <p class="animation-details-info1">Te invitamos a conocer nuestra lista de servicios integrales.</p>
                      <a href="#" class="animation-2">
                        <span class="material-icons">keyboard_arrow_right</span>
                        Conoce más aquí
                      </a>
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
        <div class="content-btn-slide">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </div>
      </a>
      <a
        class="carousel-control-next"
        href="#carousel-elengy"
        role="button"
        data-slide="next"
      >
        <div class="content-btn-slide">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </div>
      </a>
    </div>
    <a href="#servicios-elengy" class="mouse smoothscroll">
        <span class="mouse-icon">
          <span class="mouse-wheel"></span>
        </span>
    </a> -->

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
    document.getElementById('carousel-elengy').style.display = "none";
    setTimeout(() => {
      document.getElementById('carousel-elengy').style.display = "flex";
    }, 5000);
    
  }
};
</script>

<style>

header {
  width: 100%;
  margin-top: 130px;
  height: calc(90vh - 130px );
  /* height: 100vh; */
  transition: all ease-in-out .5;
  position: relative;
  overflow: hidden;
  /* margin-bottom: 40px; */
  max-height: 750px;
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
  background: linear-gradient(rgba(22,123,177,.3), rgba(0, 0, 0, 0.3) ), url(../static/bg/autogenerador.jpg);
}
.carousel2 {
  background: linear-gradient(rgba(22,123,177,.3), rgba(0, 0, 0, 0.3)), url(../static/bg/altoVoltaje.jpg);
}
.carousel3 {
  background: linear-gradient(rgba(22,123,177,.3), rgba(0, 0, 0, 0.3) ),  url(../static/bg/termomagneticos.jpg);
}
.carousel4 {
  transition: all ease-in-out .5s;
  width: 100vw;
  background: linear-gradient(rgba(184, 178, 166, 0.3), rgba(0, 0, 0, 0.5), rgba(0,0,0,.2) ), url(../static/4.jpg);
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
  transition: all ease-in-out .5s;
}
.izquierda, .derecha{
    display: flex;
    margin: 20px 50px;
    padding-top: 20px;
    transition: all ease-in-out .5s;
}
.izquierda {
  flex-flow: column nowrap;
  background: linear-gradient(to right,rgba(0, 13, 20, 0.7) 0,rgba(0, 13, 13, 0.7) 50%,rgba(0, 12, 12, 0.7) 83%,rgba(0, 12, 30, 0.7) 100%);
  width: 37%;
  height: auto;
  /* margin: 60px 0; */
  padding: 30px 30px;
  transition: all ease-in-out 2s;
  
}
.items-slide .izquierda .service{
  width: 100%;
  height: 100%;
 /*  min-width: 260px; */
  font-family: 'Montserrat',Arial, "Helvetica Neue", Helvetica, sans-serif;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  transition: all ease-in-out .5s;
  color: #fff;

}

.items-slide .izquierda .service h3{
  font-size: 2.1rem;
  font-weight: 600;
  letter-spacing: 1px;
  
}
.items-slide .izquierda .service p{
  color: rgba(255,255,255,.6);
  font-family: 'Raleway', "Helvetica Neue", Helvetica, sans-serif;
  font-weight: 400;
  letter-spacing: 1px;
  font-size: 16px;
}
.items-slide .izquierda .service a{
  padding: 10px 15px;
  background: rgba(170,0,0,.75);
  color: rgba(255,255,255,.88);
  font-weight: 500;
  display: flex;
  align-items: center;
  width: auto;
  max-width: 220px;
  text-decoration: none;
}

@media screen and (max-width: 1200px){
  .izquierda {
    width: 40%;
  }
}

@media screen and (max-width: 1000px){
  .izquierda {
    width: 60%;
  }
}

@media screen and (max-width: 780px){
  .izquierda {
    width: 80%;
  }
  .items-slide {
    justify-content: center;
  }
}

@media screen and (max-width: 700px){
  .izquierda {
    width: 95%;
    margin: 0;
  }
}

@media screen and (max-width: 720px){
  .items-slide .izquierda .service h3{
    font-size: 2em;
  }
  .items-slide .izquierda .service p{
    font-size: 15px;
  }
  .items-slide .izquierda .service a{
    padding: 8px 12px;
    font-size: 16px;
    max-width: 210px;
  }
}

@media screen and (max-width: 600px){
  .items-slide .izquierda .service h3{
    font-size: 1.5em;
  }
  .items-slide .izquierda .service p{
    font-size: 13px;
  }
  .items-slide .izquierda .service a{
    padding: 6px 10px;
    font-size: 13px;
    max-width: 175px;
  }
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


.carousel-control-prev, .carousel-control-next {
  /* padding-top: 65px; */
  width: 8%;
  display: flex;
  color: #000;
}
.carousel-control-prev {
  background-image: -webkit-linear-gradient(left,rgba(0,0,0,.5) 0,rgba(0,0,0,.0001) 100%);
  background-image: -o-linear-gradient(left,rgba(0,0,0,.5) 0,rgba(0,0,0,.0001) 100%);
  background-image: -webkit-gradient(linear,left top,right top,from(rgba(0,0,0,.5)),to(rgba(0,0,0,.0001)));
  background-image: linear-gradient(to right,rgba(0,0,0,.5) 0,rgba(0,0,0,.0001) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#80000000', endColorstr='#00000000', GradientType=1);
  background-repeat: repeat-x;
}

.carousel-control-next {
  background-image: -webkit-linear-gradient(left,rgba(0,0,0,.0001) 0,rgba(0,0,0,.5) 100%);
  background-image: -o-linear-gradient(left,rgba(0,0,0,.0001) 0,rgba(0,0,0,.5) 100%);
  background-image: -webkit-gradient(linear,left top,right top,from(rgba(0,0,0,.0001)),to(rgba(0,0,0,.5)));
  background-image: linear-gradient(to right,rgba(0,0,0,.0001) 0,rgba(0,0,0,.5) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00000000', endColorstr='#80000000', GradientType=1);
  background-repeat: repeat-x;
}

.carousel-control-prev .content-btn-slide, .carousel-control-next .content-btn-slide {
  padding: 40px 15px;
  background: linear-gradient(rgba(0,0,0,.375), rgba(0,0,0,.375));
}
.carousel-control-prev .content-btn-slide:hover, .carousel-control-next .content-btn-slide:hover {
  background: linear-gradient(rgba(0,0,0,.475), rgba(0,0,0,.475));

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
  animation-duration: 2s;
  animation-timing-function: ease-in-out;
}

.animation-details-parrafo{
  animation-name: detailsAnimation;
  animation-duration: 2.5s;
  animation-timing-function: ease-in-out;
}

.animation-2{
  animation-name: detailsAnimationDos;
  animation-timing-function: ease-in-out;
  animation-duration: 3s;
}


.animation-card {
  animation-name: animationCard;
  animation-duration: 1s;
  animation-timing-function: ease-in-out;
  transition: all ease-in-out 1s;
}

@keyframes animationCard {
  /* 0%{
    opacity: 0;
    transform: translateY(-20px);
    height: 0;
  }
  75%{
    opacity: 0;
    height: auto;
    transform: translateY(-20px);
  }
  100%{
    height: auto;
    transform: translateY(0);
    opacity: 1;
  } */
  from{
    /* height: 0; */
    opacity: 0;
    transform: scale(1) translateY(-200px) ;
  }
  to{
    /* height: 280px; */
    opacity: 1;
    transform: scale(1) translateY(0) ;

  }
}

.opacity-animation {
  animation-name: opacityAnimation;
  animation-duration: 1s;
  animation-timing-function: ease-in-out;
}


.carousel-indicators {
  display: flex;
  justify-content: flex-end;
  margin-right: 3%;
  margin-left: 3%;
}
.carousel-indicators li{
  height: 30px;
  border-radius: 50%;
  background: none;
  border: 1px solid rgba(255,255,255,.3);
  color: rgba(255,255,255,.3);
  text-indent: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 1;
  font-family: 'Montserrat', Courier, monospace;
  font-size: 12px;
  transition: all ease-in-out .5s;
  font-weight: 600;
}
.carousel-indicators li.active {
  opacity: 1;
  font-weight: bold;
  width: 45px;
  border-radius: 30px;
  color: #fff;
  border: 1px solid #fff;
  /* background: #fff; */
  /* color: #000; */
}
.carousel-indicators li:hover {
  color: #fff;
}
@media screen and (max-width: 450px){
  .carousel-indicators li{
    height: 20px;
    width: 20px;
  }
  .carousel-indicators li.active {
    width: 35px;
  }
}

/* mouse */
.mouse {
    position: absolute;
    bottom: 15px;
    z-index: 5;
    left: 50%;
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
    display: block;
}

.mouse .mouse-icon {
    display: block;
    width: 25px;
    height: 45px;
    border: 2px solid white;
    border-radius: 15px;
    cursor: pointer;
    position: relative;
    text-align: center;
    -webkit-transition: .3s all ease-in-out;
    -o-transition: .3s all ease-in-out;
    transition: .3s all ease-in-out;
}
.mouse .mouse-wheel {
    height: 4px;
    margin: 2px auto 0;
    display: block;
    width: 4px;
    background-color: white;
    border-radius: 50%;
    -webkit-animation: 1.6s ease infinite wheel-up-down;
    -moz-animation: 1.6s ease infinite wheel-up-down;
    animation: 1.6s ease infinite wheel-up-down;
}

.mouse:hover .mouse-icon {
    border-color: #fff;
}
@keyframes wheel-up-down {
    0% {
        margin-top: 2px;
        opacity: 0;
    }
    30% {
        opacity: 1;
    }
    100% {
        margin-top: 20px;
        opacity: 0;
    }
}

/* mouse */

@keyframes moveupanddown {
  from {
    bottom: 5px;
  }
  to{
    bottom: 0;
  }
}

@keyframes detailsAnimation {
  0%{
    opacity: 0;
    transform: translateY(100px);
  }
  75%{
    opacity: 0;
    transform: translateY(100px);
  }
  100%{
    transform: translateY(0);
    opacity: 1;
  }
}


@keyframes detailsAnimationDos {
  0%{
    transform: translateY(80px);
    opacity: 0;
  }
  75%{
    transform: translateY(80px);
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


@media screen and (max-width: 600px){
  header {
    height: 100vh;
    margin-top: 0;
  }
  .items-slide {
    width: 80%;
    justify-content: center;
  }
  .items-slide .izquierda .view-more {
    max-width: 300px;
  }
}

@media screen and (max-width: 450px){
  .carousel-control-next span,.carousel-control-prev span, .content-btn-slide {
    display: none;
  }
  .izquierda {
    width: 100%;
    margin: 0;
  }
}





</style>