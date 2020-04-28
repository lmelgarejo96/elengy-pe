<template>
  <section>
    <div class="caracteristicas-section">
      <div class="container">
      <h2 class="text-center">Nuestras Características</h2>
      <div class="row p-3">
        <div class="col-lg-3 col-md-6 col-sm-6">
          <div class="card-services">
            <i class="fa fa-diamond"></i>
            <h4>Calidad</h4>
            <p>Regístrate desde la página web o desde la App de forma gratuita. Todo lo que necesitas es tu email o una cuenta con Google o Facebook.</p>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-6">
          <div class="card-services">
            <i class="fa fa-flash"></i>
            <h4>Velocidad</h4>
            <p>Regístrate desde la página web o desde la App de forma gratuita. Todo lo que necesitas es tu email o una cuenta con Google o Facebook.</p>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-6">
          <div class="card-services">
            <i class="fa fa-shield"></i>
            <h4>Seguridad</h4>
            <p>Regístrate desde la página web o desde la App de forma gratuita. Todo lo que necesitas es tu email o una cuenta con Google o Facebook.</p>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-6">
          <div class="card-services">
            <i class="fa fa-users" aria-hidden="true"></i>
            <h4>Profesionalidad</h4>
            <p>Regístrate desde la página web o desde la App de forma gratuita. Todo lo que necesitas es tu email o una cuenta con Google o Facebook.</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>
.caracteristicas-section {
    padding: 2em 0 1em;
    background: #fff;
    /* background: #eee; */
    position: relative;
}

.caracteristicas-section .container h2{
    margin-bottom: 50px;
    color: #2e4369;
    /* color: #fff; */
    font-weight: 600;
    line-height: 1.2;
    font-family: averta,avenir w02,avenir,Helvetica,Arial,sans-serif;
    font-size: 1.2em;
    position: relative;
    width: 100%;
}
.caracteristicas-section .container h2::before{
    content: "";
    position: absolute;
    bottom: -15px;
    left: calc(50% - 100px);
    width: 200px;
    height: 6px;
    background: #2e4369;
}
/* .caracteristicas-section .container h2::after{
    content: "";
    position: absolute;
    bottom: -30px;
    left: calc(50% - 150px);
    width: 300px;
    height: 5px;
    background: #2e4369;
} */
/* .row .col-lg-4 {
    width: -webkit-calc(33.33333333% - 1px);
} */

@media screen and (max-width: 575px) {
    .container> .row> div{
      padding: 0;
    }
}
.caracteristicas-section .container .row .card-services {
    width: 100%;
    padding: 30px 23px;
    margin-bottom: 24px;
    border: none;
    border-radius: 3px;
    /* box-shadow: 0 0 10px 0 rgba(0,0,0,.3); */
    background-size: 100%;
    background-color: #faf9ff;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    cursor: grabbing;
    position: relative;
    color: #2e4369;
    transition: all ease-in-out .4s;
}



.card-services::after {
    content: "";
    position: absolute;
    border-radius: 3px;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0;
    /* height: 0; */
    transition: all ease-in-out .5s;
}

.card-services:hover::after{
    /* height: 100%; */
    /* border: 1px solid rgba(0,0,0,.475); */
    /* background: rgba(0,0,0,.575); */
    /* top: 0; */
}


/* .card-services img {
    width: 100%;
    margin-bottom: 24px;
    border: 0;
    vertical-align: middle;
} */
.card-services i {
    font-size: 30px;
    margin-bottom: 24px;
    border: 0;
    vertical-align: middle;
    /* color: #2e4369; */
    z-index: 5;
}

.card-services h4 {
    font-weight: 800;
    position: relative;
    font-family: Averta,Avenir W02,Avenir,Helvetica,Arial,sans-serif;
    font-weight: 600;
    letter-spacing: 0;
    line-height: 1.2;
    /* color: #2e4369; */
    margin-top: 0;
    margin-bottom: 0;
    text-transform: none;
    font-size: 1em;
    z-index: 5;

}

.card-services p {
    margin-top: 8px;
    margin-bottom: 0;
    font-size: 14px;
    color: #000;
    text-align: center;
}

.container .row .card-services:hover{
    /* background: rgba(186,15,34,.775); */
    background: #fff;
    color: #2e4369;
    box-shadow: 0px 10px 20px 0px rgba(33, 20, 106, 0.1);
}
</style>