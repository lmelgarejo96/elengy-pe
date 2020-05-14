<template>
  <header id="header-elengy" class="header-nosotros-elengy animationHeaderNosotros">
      <h1 class="titulo-nosotros animationTitle">Acerca de nosotros</h1>
      <!-- <div class="bg-nosotros"></div> -->
      <a href="#nosotros" class="animationArrow">
        <i class="material-icons">keyboard_arrow_down</i>
      </a>
  </header>

</template>

<script>
export default {

}
</script>

<style>
.header-nosotros-elengy{
  margin-top: 100px;
  width: 100vw;
  height: calc(80vh - 100px);
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background-size: cover;
  z-index: 1;
  transition: all ease-in-out .5s;
}
.header-nosotros-elengy::after{
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(22,123,177,.35), rgba(0,0,0,.55)), url(../../static/bg/elengy.jpg) center no-repeat;
  background-size: cover;
  z-index: -1;
}
/* .header-nosotros-elengy .bg-nosotros{
  display: none;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(22,123,177,.35), rgba(0,0,0,.85)), url(../../static/bg/elengy.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
} */
.header-nosotros-elengy .titulo-nosotros {
  color: #fff;
  font-family: Arial, Helvetica, sans-serif, cursive;
  font-size: 30px;
  font-weight: 900;
  font-size: 4em;
  /* text-shadow: -1px 2px 0 #000, -1px 1px 0 #0a0e27; */
  z-index: 15;
  text-align: center;
  padding: 0 15px;
  transition: all ease-in-out .5s;
}
.header-nosotros-elengy .titulo-nosotros::after {
    display: block;
    width: 33%;
    height: 10px;
    content: "";
    margin: auto;
    margin-top: 10px;
    background: #fff;
}
.header-nosotros-elengy a {
  position: absolute;
  bottom: 5px;
  color: #fff;
  text-decoration: none;
  z-index: 15;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(0,0,0,.2);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all ease-in-out .5s;
}
.header-nosotros-elengy a:hover {
  background: rgba(0,0,0,.5);
}
.header-nosotros-elengy a i{
  font-size: 38px;
}
@media screen and (max-width: 900px){
  .header-nosotros-elengy .titulo-nosotros {
    font-size: 3em;
  }
}
@media screen and (max-width: 900px){
  .header-nosotros-elengy .titulo-nosotros {
    font-size: 3em;
  }
}

@media screen and (max-width: 840px){
  /* .header-nosotros-elengy {
    height: calc(100vh - 100px);
  } */
  .header-nosotros-elengy .bg-nosotros{
    display: flex;
  }
}

@media screen and (max-width: 650px){
  .header-nosotros-elengy .titulo-nosotros {
    padding-top: .5em;
    font-size: 2.5em;
  }
}

@media screen and (max-width: 600px){
  .header-nosotros-elengy {
    height: 100vh;
    padding-top: 0;
    margin-top: 0;
  }
}

@media screen and (max-width: 460px){
  .header-nosotros-elengy .titulo-nosotros {
    font-size: 2em;
  }
}

.animationHeaderNosotros {
  animation-name: moveHeaderNosotrosLeft;
  animation-duration: 2s;
  animation-timing-function: ease-in-out;
}

.animationTitle{
  animation-name: moveLetterBottom;
  animation-duration: 2.8s;
  animation-timing-function: ease-in-out;
}


.animationArrow{
  animation-name: moveLetterBottom;
  animation-duration: 3.5s;
  animation-timing-function: ease-in-out;
}


@keyframes moveHeaderNosotrosLeft {
  from{
    opacity: 0;
    transform: translateY(200%);
  }
  to{
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes moveLetterBottom {
  0% {
    opacity: 0;
    transform: translateY(-60px);
  }
  85% {
    opacity: 0;
    transform: translateY(-60px);
  }
  100%{
    opacity: 1;
    transform: translateY(0);
  }
}
</style>