<template>
    <div>
        <MenuResponsive v-if="menu" v-on:closeMenuResponsive="closeMenuResponsive($event)" />
        <Navbar :isIndex="false" v-on:closeMenu="closeMenu($event)" v-on:openMenu="openMenu($event)"/>
        <div class="d-flex justify-content-center align-items-center" style="height: 200vh;">
            servicios
        </div>
        <SocialAds/>
        <Footer/>
    </div>
</template>

<script>
import Navbar from '../components/Navbar';
import MenuResponsive from '../components/MenuResponsive';
import SocialAds from '../components/RedesSociales';
import Footer from '../components/Footer';
export default {
    components: {
        Navbar,
        MenuResponsive,
        SocialAds,
        Footer
    },
    data: () => ({
        menu: false,
    }),
    methods: {
        openMenu(bool){
            this.menu = bool;
        },
        closeMenu(bool){
        this.menu = bool;
        },
        closeMenuResponsive(bool){
        setTimeout(() => {
            this.menu = bool;
        }, 700)
        },
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
</style>