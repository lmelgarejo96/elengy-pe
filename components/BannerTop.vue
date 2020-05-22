<template>
  <div id="banner-top" class="banner-top">
        <div id="nav-contact" class="contact">
          <div>
            <a class="contact-nav p-1" href="/" style="font-size: 14px;"><v-icon dark>mdi-home</v-icon></a>
          </div>
          <div>
            <a class="contact-nav p-1 d-flex align-tems-center" href="#" style="font-size: 14px;">
              <span style="font-size: 18px;" class="material-icons mr-1" >
              call
              </span>
              {{telefonoPrincipal}}</a>
          </div>

        </div>
        <div id="social-links" class="social-links">
                <div class="social-item" v-for="(item, index) in socialItems" :key="index+3550" >
                    <!-- facebook -->
                    <a v-if="item.footer" class="contact-nav" :href="item.href" target="_blank">
                      <i :class="item.icon" aria-hidden="true"></i>
                    </a>
                </div>      
            </div>
      </div>
</template>

<script>
import {mapState} from 'vuex';
export default {
  computed: {
    ...mapState({
        telefonoPrincipal: state => state.datosElengy.datos.telefonoPrincipal, //socialItems
        socialItems: state => state.datosElengy.datos.socialItems, //socialItems
    })
  },
}
</script>

<style>
/* banner top */
.banner-top {
  position: absolute;
  top: 0;
  right: 70px;
  width: 360px;
  height: 60px;
 /*  background: #BA0F22; */
  background: rgba(170,0,0,.87);
  transition: all ease-in-out 0.6s;
  z-index: 50;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Roboto', "Helvetica Neue", Helvetica, sans-serif;
}

.banner-top a {
  color: #fff;
}
.banner-top >div {
  padding: 0 15px;
}
.banner-top >div:first-child {
  padding-left: 0;
}
.banner-top >div:last-child {
  padding-right: 5px;
}
.banner-top .contact {
  display: flex;
  flex-flow: row nowrap;
}
.banner-top .contact div {
  border-right: 1px solid #fff;
}
.banner-top .contact div:last-child {
   border-right: none;
}
.banner-top .contact div a {
  margin-right: 10px;
  margin-left: 10px;
  text-decoration: none;
  color: #fff;
  /* font-family: 'Montserrat', sans-serif; */
  font-weight: bold;
}
.banner-top .social-links {
  margin-left: auto;
  display: flex;
  flex-flow: row nowrap;
  transition: all ease-in-out 0.5s;
}
.banner-top .social-links a{
  padding: 0 8px;
}

.banner-top:hover {
  transition: all ease-in-out .5s;
  height: 75px;
}

@media screen and (max-width: 1030px){
  .banner-top {
    right: 25px;
  }
}

@media screen and (max-width: 922px){
  .banner-top {
    right: 1.5em;
  }
}

/* menu responsive in 840px */
@media screen and (max-width: 840px){
  .banner-top, .menu #enlaces {
    display: none;
  }
}
/* fin banner top */
</style>