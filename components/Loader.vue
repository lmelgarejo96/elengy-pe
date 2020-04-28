<template>
     <div id="loading-screen" class="init">
        <div class="loader">
            <div id="logo-init" class="logo-init">
                <img src="../static/logo.webp" class="logo-anim opacity-img" alt="logo">
                <h3 class="h3-init mt-3 text-center">Engineering for the World</h3>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    mounted(){
        this.preparaLoader();
    },
    methods: {
        preparaLoader(){
            setTimeout(() => {
                const ring = document.getElementById('logo-init');
                ring.style.display = 'flex';
            }, 800)
            TweenMax.to(".init", 2, {
                delay: 3,
                top: "-200vh",
                ease: Expo.easeInOut,
                onComplete: function() {
                    document.body.style.overflowY = 'visible';
                    document.documentElement.style.overflow = 'visible';
                }
            });
            TweenMax.to(".logo-anim", 3, {
                delay: 3,
                top: "-500%",
                ease: Expo.easeInOut
            });
            TweenMax.from(".h3-init", 1, {
                delay: 1.5,
                opacity: 0,
                y: -15,
                ease: Expo.easeInOut
            });
            let t1 = new TimelineMax();
            t1.from(".logo-anim", 1, {
                delay: 0.4,
                opacity: 0,
                y: 50,
                ease: Expo.easeInOut
            });
        }
    }
}
</script>

<style>
.init {
    position: relative;
    z-index: 200;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: #000;
    /* overflow-y: hidden;
    overflow: hidden; */
   /*  z-index: 500; */
   transition: all ease-in-out 2s;
}

.loader {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.logo-init{
    display: none;
    justify-content: center;
    flex-flow: column nowrap;
    align-items: center;
    width: 100%;
    height: 100%;
}


.animation-loading {
    animation-name: escondeLoading;
    animation-timing-function: ease-in-out;
    animation-duration: 5s;
}
.h3-init{
    font-size: 1.4rem;
    color: #fff;
    line-height: 1;
    font-weight: 600;
    font-family: 'Lemonada', cursive, monospace, "Helvetica Neue", Helvetica, sans-serif;
    text-shadow: -1px 1px 0 #000, -1px 1px 0 #0a0e27;
    z-index: 10;
}
@keyframes escondeLoading {
    0% {
        transform: translateY(0);
        opacity: 0;
    }
    25%{
        transform: translateY(0);
        opacity: 1;

    }
    50%{
        transform: translateY(0);
        opacity: 1;

    }
    75%{
        transform: translateY(0);
        opacity: 0;

    }
    100%{
        transform: translateY(-100vh);
        opacity: 0;

    }
}

</style>