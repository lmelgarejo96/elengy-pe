<template>
  <div class="details">
      <div class="rectangle-description">
        <h4>Soluciones y servicios integrales para sus proyectos</h4>
      </div>
      <div class="triangle"></div>
      
    </div>
</template>

<script>
export default {

}
</script>

<style>
.details {
  width: 100%;
  position: relative;
  margin: 0 auto;
  margin-top: 40px;
}



.rectangle-description {
  background:rgba(255,159,0,.775);
  width: 80%;
  min-height: 80px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 1em;
  display: flex;
  align-items: center;
  justify-content: center;
}

.rectangle-description h4 {
    margin: 0;
    text-align: center;
    color: #fff;
    font-family: 'Raleway', "Helvetica Neue", Helvetica, sans-serif;
    font-weight: 500;
}

.rectangle-description:after {
    content: '';
    position: absolute;
    margin-top: 1px;
    top: 100%;
    left: 0; 
    right: 0;
    padding-bottom: 5%;
    background: rgba(255,159,0,.775);
    -webkit-clip-path: polygon(0% 0%, 100% 0%, 50% 100%);
    clip-path: polygon(0% 0%, 100% 0%, 50% 100%);
  }

  @media screen and (max-width: 900px){
      .rectangle-description h2 {
        font-size: 26px;
      }
  }

  @media screen and (max-width: 650px){
      .rectangle-description h2 {
        font-size: 20px;
      }
  }

  @media screen and (max-width: 420px){
      .rectangle-description h2 {
        font-size: 18px;
      }
  }

  @media screen and (max-width: 340px){
      .rectangle-description h2 {
        font-size: 15px;
      }
  }

</style>