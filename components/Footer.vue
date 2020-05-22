<template>
  <div class="footer-container">
    <footer>
      <div class="footer">
        <div class="container">
          <div class="row">
            <div class="footer-links col-xl-3 col-lg-3 col-md-6 col-sm-12">
              <img draggable="false" class="logo1" src="../static/logo.webp" style="max-width: 150px;" alt="logo-elengy-sac" data-aos="fade-up" data-aos-duration="1500"/>
              <ul class="social_icon" data-aos="fade-up" data-aos-duration="1500">
                <li v-for="(social, index) in datosE.socialItems" :key="index+10">
                  <a v-if="social.footer" :href="social.href" target="_blank">
                    <i :class="social.icon" aria-hidden="true"></i>
                  </a>
                </li>
              </ul>
              <p class="text-muted" data-aos="fade-up" data-aos-duration="1500">
                <small>Siguenos en nuestras redes sociales</small>
              </p>
            </div>
            <div id="menu-footer" class="col-xl-2 col-lg-2 col-md-6 col-sm-12">
              <div class="enlaces-footer">
                <h3 class="pl-1" data-aos="fade-up" data-aos-duration="1500">Menú</h3>
                <ul data-aos="fade-up" data-aos-duration="1500">
                  <li v-for="(nav, index) in datosE.navegacion" :key="index+100">
                    <a :href="nav.redirectTo">
                      <p>
                        <span class="material-icons">keyboard_arrow_right</span>{{nav.name}}
                      </p>
                    </a>
                    
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
              <h3 data-aos="fade-up" data-aos-duration="1500">Contacto</h3>
              <div class="contacto-footer">
                <div class="direccion" data-aos="fade-up" data-aos-duration="1500">
                  <h6>Dirección:</h6>
                  <p class="text-muted">{{datosE.direccion}}, {{datosE.distrito}}, {{datosE.provincia}}, {{datosE.pais}}</p>
                </div>
                <div class="telefonos" data-aos="fade-up" data-aos-duration="1500">
                  <h6>Telefonos:</h6>
                  <ul>
                    <li v-for="(telefono, index) in datosE.telefonos" :key="index+1000" class="text-muted">{{telefono}}</li>
                    <!-- <li class="text-muted">(+51) 933153669</li>
                    <li class="text-muted">(+51) 933153669</li> -->
                  </ul>
                </div>
                <div class="correos" data-aos="fade-up" data-aos-duration="1500">
                  <h6>Correos:</h6>
                  <ul data-aos="fade-up" data-aos-duration="1500">
                    <li v-for="(correo, index) in datosE.correos" :key="index*10" class="text-muted">{{correo}}</li>
                  </ul>
                </div>
              </div>
            </div>
            <div id="about-footer" class="col-xl-4 col-lg-4 col-md-6 col-sm-12">
              <h3 data-aos="fade-up" data-aos-duration="1500">Acerca de Elengy</h3>
              <div class="about-us" data-aos="fade-up" data-aos-duration="1500">
                  <p class="text-muted"> {{datosE.descripcion}} </p>
              </div>
            </div>
          </div>
        </div>
        <div class="copyright">
          <div class="container pb-0 pt-0 mt-0 mb-0">
            <div class="row pb-0 pt-0 mt-0 mb-0">
              <div class="col-md-12 m-2" >
                <p >
                  © {{year}} <a href="/">{{datosE.empresa}}.</a> Todos los derechos reservados.
                  <!-- Design by<a href="# "> Luis Melgarejo</a> -->
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import {mapState} from 'vuex';
export default {
  computed: {
    ...mapState({
        datosE: state => state.datosElengy.datos,
    })
  },
  data: () => ({
    year: 2020
  }),
  beforeMount(){
    this.year = new Date().getFullYear();
  }
};
</script>

<style>
.footer-container {
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-end;
  z-index: 10;
  overflow: hidden;
}

.footer {
  /* background: url(../assets/img/footer.jpg);
    background-repeat: no-repeat;
    background-size: 100% 100%; */
  background: #0e1424;
  padding-top: 2em;
  text-align: center;
}

.footer .titlepage {
  text-align: left;
  padding-bottom: 0px;
}

.footer .titlepage h2 {
  color: #fff;
  margin: inherit;
  border-bottom: #fff solid 1px;
}

.logo1 {
  margin-top: -30px;
}

.footer-links ul {
  text-align: center;
  margin-left: 0;
  padding-left: 0;
}

.social_icon {
  padding-top: 37px;
  width: 100%;
  display: flex;
  justify-content: center;
}

.social_icon li {
  display: inline-block;
}

.social_icon li a {
  text-decoration: none;
  background: #0e1424;
  color: #fff;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  border-radius: 30px;
  margin: 0 3px;
  transition: all ease-in-out .3s;
  border: 2px solid #fff;
}



.social_icon li a:hover,.social_icon li a:hover~i{
    background-color: #fff;
    color: #000 !important;
}

.footer h3 {
  font-weight: 600;
  font-size: 25px;
  line-height: 25px;
  color: #fff;
  padding-bottom: 15px;
  text-align: left;
}

.enlaces-footer,
.enlaces-footer ul {
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  height: 100%;
}
.enlaces-footer ul {
  list-style: none;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: flex-start;
  text-align: left;
  padding: 5px 0;
  margin-bottom: 0;
}
/* .enlaces-footer ul li {
    width: 100%;
} */
.enlaces-footer ul li a {
  color: #6c757d;
  text-decoration: none;
  transition: all ease-in-out .5s;
}
.enlaces-footer ul li a:hover {
    color: #fff ;
}
.enlaces-footer ul li a  p{
    display: flex;
    justify-content: center;
    align-items: center;
}

.contacto-footer {
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
}
.contacto-footer .direccion,
.contacto-footer .telefonos,
.contacto-footer .correos {
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  padding: 5px 0;
}
.contacto-footer .direccion h6,
.contacto-footer .direccion p,
.contacto-footer .telefonos h6,
.contacto-footer .telefonos ul li,
.contacto-footer .correos h6,
.contacto-footer .correos ul li {
  text-align: left;
  padding: 0;
  margin: 0;
  color: #fff;
  padding-right: 10px;
}

.contacto-footer .direccion h6,
.contacto-footer .telefonos h6,
.contacto-footer .correos h6 {
  color: #ccc8c8;
}

.contacto-footer .telefonos ul,
.contacto-footer .correos ul {
  list-style: none;
  margin-bottom: 0;
}

.about-us {
    display: flex;
}

.about-us p{
    text-align: left;
}

footer .footer-links,
footer .iframe {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
}

footer .iframe p {
  color: #fff;
  font-size: 1.2rem;
  font-family: monospace;
}

footer .iframe iframe {
  width: 100%;
  height: 80%;
}

.bottom_form h3 {
  font-weight: 600;
  font-size: 25px;
  line-height: 25px;
  text-align: left;
  color: #fff;
  padding-bottom: 15px;
}

.bottom_form .enter {
  border: inherit;
  padding: 0px 19px;
  width: 100%;
  height: 45px;
  background: #fffffff2;
  color: #ccc8c8;
  font-size: 17px;
  font-weight: 600;
  float: left;
  border-radius: 10px;
  margin-bottom: 20px;
}

.sub_btn {
  font-size: 17px;
  transition: ease-in all 0.5s;
  background-color: #48ca95;
  color: #fff;
  padding: 10px 0px;
  max-width: 147px;
  border-radius: 10px;
  width: 100%;
  display: block;
  font-weight: 500;
  text-transform: uppercase;
}

.sub_btn:hover {
  background-color: #000;
  transition: ease-in all 0.5s;
  color: #fff;
}

.copyright {
  margin-top: 2em;
  /* padding-bottom: 20px; */
}

@media screen and (max-width: 1263px) {
    #menu-footer, #about-footer{
        display: none;
    }
    .footer {
        padding-top: 60px;
    }
    .copyright {
        margin-top: 20px;
        padding-bottom: 0;
    }
}

@media screen and (max-width: 959px) {
    #menu-footer, #about-footer{
        display: none;
    }
    .contacto-footer .direccion h6,
    .contacto-footer .direccion p,
    .contacto-footer .telefonos h6,
    .contacto-footer .telefonos ul li,
    .contacto-footer .correos h6,
    .contacto-footer .correos ul li,
    .about-us p,
    .footer h3
    {
        text-align: center;
        padding-left: 10px;
        padding-right: 10px;
    }
    .enlaces-footer ul { 
        align-items: center;
    }
    .copyright {
        margin-top: 10px;
        padding-bottom: 0;
    }
}

@media screen and (max-width: 600px){
    .footer {
        padding-top: 40px;
    }
    #menu-footer, #about-footer{
        display: none;
    }
    
    
}

.copyright p {
  color: #ddd;
  font-size: 1em;
  line-height: 22px;
  text-align: center;
  border-top: #ddd solid 1px;
  padding-top: 25px;
  font-weight: normal;
}

.copyright a {
  color: #ddd;
  text-decoration: none;
}

.copyright a:hover {
  color: #ffffff;
}
</style>