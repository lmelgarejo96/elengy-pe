<template>
  <section id="history" class="history-elengy padding-sections">
      <div class="container">
        <div class="row no-gutters align-items-center">
          <div class="col-md-5 mb-4 mb-md-0 pr-2 pl-3">
            <div class="about__content" data-aos="fade-up" data-aos-duration="1500">
              <h2 data-aos="fade-up" data-aos-duration="1500">Acerca de Elengy</h2>
              <p data-aos="fade-up" data-aos-duration="1500">Elengy es una empresa peruana, con sede central en Lima - Perú y filial en Santiago – Chile, que cuenta con alto potencial humano especializado en planeamiento, administración y ejecución de proyectos electromecánicos y de telecomunicaciones, y que presta servicios en el campo de la Ingeniería eléctrica, en donde se realizan pruebas primarias, de protección y secundarias a subestaciones eléctricas y mineras de alta y baja tensión. Fue fundada el 17 de noviembre del año 2016.</p>
            </div>
          </div>
          <div class="col-md-7">
            <div class="about__img" data-aos="fade-up" data-aos-duration="1500">
              <div class="img-about-container">
                <img draggable="false" class="img-fluid" src="../../static/team-elengy.jpg" alt="" data-aos="fade-up" data-aos-duration="1500">
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
.history-elengy {
    width: 100%;
    min-height: 100vh;
    background: #fff;
    position: relative;
    margin-top: 65px;
    display: flex;
    align-items: center;
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

@media screen and (max-width: 600px) {
    .about__content h2, .about__content p {
        text-align: center;
    }
}


</style>