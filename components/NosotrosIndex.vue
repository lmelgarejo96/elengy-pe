<template>
  <section class="nosotros-section">
      <div class="container">
        <div class="row no-gutters align-items-center">
          <div class="col-md-5 mb-4 mb-md-0 pr-2 pl-3">
            <div class="about__content" data-aos="fade-up" data-aos-duration="1500">
              <h2 data-aos="fade-up" data-aos-duration="1500">Acerca de nosotros</h2>
              <p data-aos="fade-up" data-aos-duration="1500">ELENGY es una empresa, con sede central en Lima (Perú) y filial en Santiago (Chile), que cuenta con alto potencial humano especializado en planeamiento, administración y ejecución de proyectos electromecánicos y de telecomunicaciones.
Contamos con especialistas en subestaciones de media, alta y extra alta tensión, desarrollamos ingeniería, estudios, sistemas de control y protección.</p>
              <a class="button button-light" href="/nosotros" data-aos="fade-up" data-aos-duration="1500">Leer más</a>
            </div>
          </div>
          <div class="col-md-7">
            <div class="about__img" data-aos="fade-up" data-aos-duration="1500">
              <div class="img-about-container">
                <img draggable="false" class="img-fluid" src="../static/team-elengy.jpg" alt="" data-aos="fade-up" data-aos-duration="1500">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>

<script>
export default {

}
</script>

<style>
.nosotros-section{
    width: 100%;
    background: #faf9ff;
    padding: 60px 0;
    overflow: hidden;
}
.about__content h2 {
    margin-bottom: 20px
}

.about__content p {
  color: #797979;
  font-family: "Roboto", sans-serif;
  margin-bottom: 38px;
  font-size: 15px;
  font-weight: 400;
  line-height: 1.667;
}
.about__content a {
  text-decoration: none;
}

.button {
    display: inline-block;
    border: 1px solid transparent;
    text-transform: capitalize;
    font-size: 15px;
    font-weight: 500;
    padding: 10px 24px;
    border-radius: 30px;
    background-color: #fff;
    /* color: #21146a; */
    color: #3a414e;
    transition: all .4s ease;
    
}

.button-light {
    background-color: transparent;
    border-color: #BA0F22;
}

.button-light:hover {
    background-color: #BA0F22;
    color: #fff
}

.img-about-container{
  position: relative;
  margin: 0 1em;
  background: #faf9ff;
  box-shadow: 0px 0px 30px -4px rgba(0, 0, 0, 0.3);
}
.img-about-container img {
  position: relative;
  z-index: 2;
}
.img-about-container::before{
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    bottom: -10px;
    right: -10px;
    background: #000;
    box-sizing: border-box;
}


</style>