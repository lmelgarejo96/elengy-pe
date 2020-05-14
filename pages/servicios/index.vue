<template>
    <div data-app>
        <MenuResponsive v-if="menu" v-on:closeMenuResponsive="closeMenuResponsive($event)" />
        <Navbar :isIndex="false" v-on:openMenu="openMenu($event)"/>
        <!-- <div class="d-flex justify-content-center align-items-center" style="height: 200vh;">
            servicios
        </div> -->
        <ServicesSection/>
        <Clientes />
        <SocialAds/>
        <Footer/>
    </div>
</template>

<script>
import Navbar from '../../components/Navbar';
import MenuResponsive from '../../components/MenuResponsive';
import ServicesSection from '../../components/ServicesIndex';
import Clientes from '../../components/ClientesIndex';
import SocialAds from '../../components/RedesSociales';
import Footer from '../../components/Footer';
export default {
    components: {
        Navbar,
        MenuResponsive,
        ServicesSection,
        Clientes,
        SocialAds,
        Footer
    },
    data: () => ({
        menu: false,
    }),
    mounted(){
        AOS.init();
        this.addActiveLink();
        document.getElementById('hamburger-menu').classList.add('red-hamburger');
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

section {
    min-height: 30vh;
    width: 100%;
    scroll-snap-align: center;
}

.section-margin {
    margin: 60px 0;
}

.section-margin-2 {
  margin: 50px 0;
}

@media (min-width: 1000px) {
    .section-margin {
        margin: 100px 0
    }
    .section-margin-2 {
        margin: 80px 0
    }
}

@media (min-width: 1200px) {
    .section-margin {
        margin: 135px 0
    }
    .section-margin-2 {
        margin: 80px 0
    }
}

.section-margin--medium {
    margin: 40px 0
}

@media (min-width: 800px) {
    .section-margin--medium {
        margin: 80px 0
    }
}

@media (min-width: 1200px) {
    .section-margin--medium {
        margin: 120px 0
    }
}


.section-padding {
    padding: 60px 0
}

/* @media (min-width: 1000px) {
    .section-padding {
        padding: 100px 0
    }
} */

@media (min-width: 1200px) {
    .section-padding {
        padding: 100px 0
    }
}

.bg-menu {
    background: #fff !important;
}


</style>