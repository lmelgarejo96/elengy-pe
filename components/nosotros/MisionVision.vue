<template>
  <section id="misionyvision" class="section-padding section-mv">
      <div class="container">
          <div class="row"> 
              <div class="col-lg-4 col-md-4 col-sm-12 mb-4" style="display: block;">
                  <div class="card-mv h-100" data-aos="fade-up" data-aos-duration="1500">
                      <img draggable="false" src="../../static/offer.png" alt="" data-aos="fade-up" data-aos-duration="1500">
                      <div class="card-mv-content">
                          <h4 data-aos="fade-up" data-aos-duration="1500">Misión</h4>
                          <p data-aos="fade-up" data-aos-duration="1500">Ofrecer el mejor servicio en pruebas primarias, de protección y secundarías de Ingeniería eléctrica a nuestros clientes.</p>
                      </div>
                  </div>
              </div>
              <div class="col-lg-4 col-md-4 col-sm-12 mb-4" style="display: block;">
                  <div class="card-mv h-100" data-aos="fade-up" data-aos-duration="1500">
                        <img draggable="false" src="../../static/vision.svg" alt="" data-aos="fade-up" data-aos-duration="1500">

                      <div class="card-mv-content">
                          <h4 data-aos="fade-up" data-aos-duration="1500">Visión</h4>
                          <p data-aos="fade-up" data-aos-duration="1500">Ser la opción número uno en soluciones de Ingeniería eléctrica a nivel nacional.</p>

                      </div>
                  </div>
              </div>
              <div class="col-lg-4 col-md-4 col-sm-12 mb-4" style="display: block;">
                  <div class="card-mv h-100" data-aos="fade-up" data-aos-duration="1500">
                        <img draggable="false" src="../../static/valores.svg" alt="" data-aos="fade-up" data-aos-duration="1500">
                      <div class="card-mv-content">
                          <h4 data-aos="fade-up" data-aos-duration="1500">Valores</h4>
                          <ul data-aos="fade-up" data-aos-duration="1500">
                              <li >Responsabilidad</li>
                              <li >Compromiso</li>
                              <li >Puntualidad</li>
                              <li >Calidad</li>
                              <li >Ética</li>
                          </ul>
                          <!-- <p  style="text-align: left;" data-aos="fade-up" data-aos-duration="1500">
                              - Responsabilidad <br>
                              - Compromiso <br>
                              - Puntualidad <br>
                              - Calidad <br>
                              - Ética <br>
                            </p> -->


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
.section-mv{
    width: 100%;
    /* position: relative; */
    min-height: 90vh;
   /*  margin-top: 65px; */
    overflow: hidden;
    display: flex;
    align-items: center;
}

.card-mv {
    background: #faf9ff;
    /* box-sizing: border-box; */
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    color: #2e4369;
    padding: 50px 1.2em 20px;
    border-radius: 5px;
    transition: all ease-in-out 0.5s; 
    /* box-shadow: 0 0 10px 0 rgba(0,0,0,.1); */
}
.card-mv:hover {
    transition: all ease-in-out 0.5s; 
    box-shadow: 0 0 10px 0 rgba(0,0,0,.1);
    background: #fff;

    
}
.card-mv i{
    font-size: 4em;
    margin-bottom: 20px;
}
.card-mv img{
    width: auto;
    height: 150px;
    margin-bottom: 20px;
}
.card-mv .card-mv-content h4, .card-mv .card-mv-content p{
    display: inline-block;
    width: 100%;
    text-align: center;
    font-family: 'Raleway', Arial, Helvetica, sans-serif;

}
.card-mv .card-mv-content h4{
    color: #2e4369;
    font-weight: normal;
    margin-bottom: 20px;
}
.card-mv .card-mv-content p,.card-mv .card-mv-content ul  {
    color: #797979;
    font-size: .9em;
    height: auto;
}
.card-mv .card-mv-content ul{
    width: 100%;
    list-style-type: square;
}
</style>