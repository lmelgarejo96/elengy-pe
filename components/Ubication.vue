<template>
  <section class="map-section">
      <div class="container">
          <div class="direction">
            <iframe class="mapa-elengy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.7929272648953!2d-77.11137414978246!3d-11.988825544047433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105cdd0a4282587%3A0x725b359f625564bd!2sElengy%20SAC!5e0!3m2!1ses!2spe!4v1589787976865!5m2!1ses!2spe"  frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
          </div>
      </div>
  </section>
</template>

<script>
export default {

}
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

.map-section .direction iframe{
    width: 100%;
    height: 250px;
}


@media screen and (max-width: 600px){
    .map-section {
        width: 100%;
        min-height: 20vh;
    }
    .map-section .direction {
        width: 90%;
    }
}

@media screen and (max-width: 500px){
    .map-section .direction  {
        width: 96%;
    }
}

@media screen and (max-width: 350px){
    .map-section .direction {
        width: 100%;
    }
}


</style>