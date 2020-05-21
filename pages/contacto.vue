<template>
  <div data-app class="nosotros-page">
        <MenuResponsive v-if="menu" v-on:closeMenuResponsive="closeMenuResponsive($event)" />
        <Navbar :isIndex="false" :isAbout="false" v-on:openMenu="openMenu($event)"/>
        <div>
            <ContactoForm class="padding-contact" :contact.sync="contact" :servicios="servicios"/>
            <Ubicacion/>
            <Footer/>
        </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar';
import MenuResponsive from '../components/MenuResponsive';
import ContactoForm from '../components/ContactIndex';
import Ubicacion from '../components/Ubication';
import Footer from '../components/Footer';
export default {
     components: {
        Navbar,
        MenuResponsive,
        ContactoForm,
        Ubicacion,
        Footer,
    },
    data: () => ({
        menu: false,
        servicios: [],
        contact: {
            nombres: "",
            apellidos: "",
            servicios: [],
            email: "",
            telefono: "",
            descripcion: ""
        },
    }),
    beforeMount(){
        this.servicios = this.$store.state.services.servicesNames;
    },
    mounted(){
        try {
            AOS.init();
            document.getElementById('hamburger-menu').classList.add('red-hamburger');
            if(window.screen.width>840){
                this.addActiveLink()
            }
        } catch (error) { }
    },
    methods: {
        openMenu(bool) {
            try {
                if (bool) {
                document.querySelector(".icon-three").classList.add("active-three");
                this.menu = bool;
                } else {
                document
                    .querySelector(".icon-three")
                    .classList.remove("active-three");
                const menu = document.getElementById("menu-responsive");
                menu.style.left = "-100vh";
                this.closeMenuResponsive(bool);
                }
            } catch (error) {}
        },
        closeMenuResponsive(bool){
            setTimeout(() => {
                this.menu = bool;
            }, 700)
        },
        addActiveLink(){
            const links = document.querySelectorAll('.link-nav');
            const URIactual = window.location.pathname.substring(1, window.location.pathname.length);
            for(let i=0; i<links.length; i++){
                const pathName = links[i].pathname.toString()
                const nameEnlace = pathName.substring(1, pathName.length);
                if(URIactual === nameEnlace){
                    links[i].classList.add('enlace-activo');
                    break;
                }
            }
        }
    }
}
</script>

<style>
body,
html {
    scroll-behavior: smooth;
    box-sizing: border-box;
    /* overflow: hidden; */
}

body::-webkit-scrollbar {
    width: .7em;
}
body::-webkit-scrollbar-thumb {
    background-color: #BA0F22;
    outline: 1px solid slategrey
}

.bg-menu {
    background: #fff !important;
}

.contact-section.padding-contact {
    padding-top: 130px;
}

@media screen and (max-width: 600px){
    .contact-section.padding-contact {
        padding-top: 70px;
    }
}
</style>