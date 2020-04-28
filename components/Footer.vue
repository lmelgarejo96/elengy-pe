<template>
  <div class="footer-container">
    <footer>
      <div class="footer">
        <div class="container">
          <div class="row">
            <div class="footer-links col-xl-3 col-lg-3 col-md-6 col-sm-12">
              <img draggable="false" class="logo1" src="../static/logo.webp" style="max-width: 150px;" alt="logo-elengy-sac" />
              <ul class="social_icon">
                <li>
                  <a href=" # ">
                    <i class="fa fa-facebook" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="# ">
                    <i class="fa fa-twitter" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="# ">
                    <i class="fa fa-linkedin" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="# ">
                    <i class="fa fa-instagram" aria-hidden="true"></i>
                  </a>
                </li>
              </ul>
              <p class="text-muted">
                <small>Siguenos en nuestras redes sociales</small>
              </p>
            </div>
            <div id="menu-footer" class="col-xl-2 col-lg-2 col-md-6 col-sm-12">
              <div class="enlaces-footer">
                <h3 class="pl-1">Menú</h3>
                <ul>
                  <li>
                    <a href="/">
                      <p>
                        <span class="material-icons">keyboard_arrow_right</span>Inicio
                      </p>
                    </a>
                    
                  </li>
                  <li>
                    <a href="/nosotros">
                      <p >
                        <span class="material-icons">keyboard_arrow_right</span>Nosotros
                      </p>
                    </a>
                    
                  </li>
                  <li>
                    <a href="/servicios">
                      <p>
                        <span class="material-icons">keyboard_arrow_right</span>Servicios
                      </p>
                    </a>
                    
                  </li>
                  <li>
                    <a href="/portafolio">
                      <p >
                        <span class="material-icons">keyboard_arrow_right</span>Portafolio
                      </p>
                    </a>
                    
                  </li>
                  <li>
                    <a href="/contacto">
                      <p >
                        <span class="material-icons">keyboard_arrow_right</span>Contacto
                      </p>
                    </a>
                   
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
              <h3>Contacto</h3>
              <div class="contacto-footer">
                <div class="direccion">
                  <h6>Dirección:</h6>
                  <p class="text-muted">Manzana C Lote, San Martín de Porres 15112</p>
                </div>
                <div class="telefonos">
                  <h6>Telefonos:</h6>
                  <ul>
                    <li class="text-muted">(+51) 933153669</li>
                    <li class="text-muted">(+51) 933153669</li>
                    <li class="text-muted">(+51) 933153669</li>
                  </ul>
                </div>
                <div class="correos">
                  <h6>Correos:</h6>
                  <ul>
                    <li class="text-muted">elengy@gmail.com</li>
                    <li class="text-muted">elengy2@gmail.com</li>
                  </ul>
                </div>
              </div>
            </div>
            <div id="about-footer" class="col-xl-4 col-lg-4 col-md-6 col-sm-12">
              <h3>Acerca de Elengy</h3>
              <div class="about-us">
                  <p class="text-muted"> Somos una empresa peruana dedicada al rubro de Ingeniería Electrica. Contamos con especialistas en subestaciones de media, alta y extra alta tensión, desarrollamos ingeniería, estudios, sistemas de control y protección.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="copyright">
          <div class="container pb-0 pt-0 mt-0 mb-0">
            <div class="row pb-0 pt-0 mt-0 mb-0">
              <div class="col-md-12 m-2">
                <p>
                  © 2020 <a href="#">Luis Melgarejo.</a> Todos los derechos reservados.
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
export default {};
</script>

<style>
.footer-container {
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-end;
  z-index: 10;
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
  font-size: 18px;
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