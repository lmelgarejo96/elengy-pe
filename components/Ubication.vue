<template>
  <section class="map-section">
    <div class="container">
      <div class="direction row">
        <div class="col-lg-8">
          <iframe
            class="mapa-elengy"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.7929272648953!2d-77.11137414978246!3d-11.988825544047433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105cdd0a4282587%3A0x725b359f625564bd!2sElengy%20SAC!5e0!3m2!1ses!2spe!4v1589787976865!5m2!1ses!2spe"
            frameborder="0"
            style="border:0;"
            allowfullscreen
            aria-hidden="false"
            tabindex="0"
          ></iframe>
        </div>
        <div class="col-lg-3 offset-lg-1">
          <div class="media contact-info">
            <span class="contact-info__icon">
              <i class="material-icons">home</i>
            </span>
            <div class="media-body">
              <h3>San Martín de Porres</h3>
              <p>Manzana C Lote #</p>
            </div>
          </div>
          <div class="media contact-info">
            <span class="contact-info__icon">
              <i class="material-icons">tablet_android</i>
            </span>
            <div class="media-body">
              <h3>+51 999 999 999</h3>
              <p>Lunes a Sabado 8:00am a 6:30pm</p>
            </div>
          </div>
          <div class="media contact-info">
            <span class="contact-info__icon">
              <i class="material-icons">mail</i>
            </span>
            <div class="media-body">
              <h3>elengy@elengy.com</h3>
              <p>Envíenos su consulta en cualquier momento!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div style="width: 100%; height: 100%; background: #ccc; padding-bottom: 50px; padding-top: 50px;">
        <div style="box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.3); border-radius: 5px; background: #fff; margin: auto; padding: 15px 20px; max-width: 600px;">
            <div style="display:flex; align-items:center; justify-content: flex-start; margin-bottom: 1em;">
                <img draggable="false" style="max-width: 150px;" src="http://elengy-sac.herokuapp.com/_nuxt/img/c3ce78d.webp" alt="logo-elengy">
                <div style="margin-left:5px;"> 
                    <div style="font-size: 16px; font-weight: 500; margin-left-20px"> Elengy Team</div>
                    <div style="font-size: 12px; font-family:Arial; font-weight: 300;"> {{fecha}}</div>
                </div>
            </div>
            <hr>
            <div style="width: 100%; padding: 10px 20px">
                <div style="font-size: 16px; font-weight: 400; margin-left-20px; margin-bottom: 15px;">Hey, recibiste un nuevo mensaje  v&iacute;a web&nbsp;de <strong style="font-weight: 600;">{{nombres}} {{apellidos}}</strong>:</div>
                <div style="font-size: 16px; font-weight: 400; font-family: Monospace; margin-left-20px; margin-bottom: 15px; font-style: italic;">"{{mensaje}}"</div>
                
                <div style="font-size: 15px; font-weight: 400; margin-left-20px; margin-bottom: 5px;"><strong style="font-weight: 600;">N&uacute;mero de contacto:&nbsp;</strong> {{telefono}}</div>
                <div style="font-size: 15px; font-weight: 400; margin-left-20px; margin-bottom: 5px;"><strong style="font-weight: 600;">Correo de contacto:</strong> {{email}}</div>
                <div style="font-size: 15px; font-weight: 400; margin-left-20px; margin-bottom: 5px;"><strong style="font-weight: 600;">Servicio(s) elegido(s):</strong> {{servicios}}</div>
                <p>&nbsp;</p>
                <br>

                <div style="font-size: 16px; font-weight: 500; margin-bottom: 5px;">Buena suerte,</div>
                <div style="font-size: 16px; font-weight: 500; margin-bottom: 10px;"><a href="http://elengy-sac.herokuapp.com/" target="_blank" style="text-decoration:none; color: #000;">Elengy&nbsp;team</a> </div>
                
            </div>
        </div>
    </div> -->
    

  </section>
</template>

<script>
export default {};
</script>

<style>
.map-section {
  width: 100%;
  min-height: 20vh;
  box-sizing: border-box;
  overflow: hidden;
  position: relative;
  padding: 2em 0;
}

.map-section .direction {
  display: flex;
  justify-content: center;
  width: 80%;
  margin: auto;
}

.map-section .direction iframe {
  width: 100%;
  height: 300px;
}

@media screen and (max-width: 600px) {
  .map-section {
    width: 100%;
    min-height: 20vh;
  }
  .map-section .direction {
    width: 90%;
  }
}

@media screen and (max-width: 500px) {
  .map-section .direction {
    width: 96%;
  }
}

@media screen and (max-width: 350px) {
  .map-section .direction {
    width: 100%;
  }
}
.contact-info {
  margin-bottom: 25px;
}


.contact-info__icon {
  margin-right: 20px;
}

.contact-info__icon i, .contact-info__icon span {
  color: #8f9195;
  font-size: 27px;
}


.contact-info .media-body h3 {
  font-size: 16px;
  margin-bottom: 0;
  font-size: 16px;
  color: #2a2a2a;
}


.contact-info .media-body h3 a:hover {
  color: #ff5e13;
}


.contact-info .media-body p {
  color: #8a8a8a;
}

</style>