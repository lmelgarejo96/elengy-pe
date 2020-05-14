<template>
     <div id="loading-screen" class="init">
        <div class="loader">
            <div id="logo-init" class="logo-init">
                <img draggable="false" src="../static/logo.webp" class="logo-anim opacity-img" alt="logo">
                <!-- <h3 class="h3-init mt-3 text-center">Engineering for the World</h3> -->
                <h3 class="ml7" id="title">
                    <span class="text-wrapper">
                        <span class="letters">Engineering for the World</span>
                    </span>
                </h3>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    mounted(){
        this.preparaLoader();
        this.lettersAnimation();
    },
    methods: {
        preparaLoader(){
            setTimeout(() => {
                const logo = document.getElementById('logo-init');
                logo.style.display = 'flex';
            }, 400)
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
            /* TweenMax.from(".h3-init", 1, {
                delay: 1.5,
                opacity: 0,
                y: -15,
                ease: Expo.easeInOut
            }); */
            let t1 = new TimelineMax();
            t1.from(".logo-anim", 1, {
                delay: 0.4,
                opacity: 0,
                y: 100,
                ease: Expo.easeInOut
            });
        },
        lettersAnimation (){
            let textWrapper = document.querySelector('.ml7 .letters');
            textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

            anime.timeline({ loop: false })
                .add({
                    targets: '.ml7 .letter',
                    translateY: ["1.1em", 0],
                    translateX: ["0.55em", 0],
                    translateZ: 0,
                    rotateZ: [180, 0],
                    duration: 750,
                    easing: "easeOutExpo",
                    delay: function(el, i) {
                        return 2000 + 50 * i;
                    }
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
    z-index: 500;
   overflow: hidden;
   transition: all ease-in-out 2s;
}

.loader {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #1c2131;

}

.logo-init{
    display: none;
    margin-top: 20px;
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
    box-shadow: 0px 10px 20px 0px rgba(255,255,255,.8);
}
.h3-init{
    font-size: 1.3rem;
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


.ml7 {
    position: relative;
    font-weight: 900;
    /* font-size: 3.7em; */
}

.ml7 .text-wrapper {
    position: relative;
    display: inline-block;
    padding-top: 0.2em;
    padding-right: 0.05em;
    padding-bottom: 0.1em;
    overflow: hidden;
}

.ml7 .letter {
    transform-origin: 0 100%;
    display: inline-block;
    /* line-height: 1em; */
    font-size: 1.3rem;
    color: #fff;
    line-height: 1;
    font-weight: 600;
    font-family: 'Lemonada', cursive, monospace, "Helvetica Neue", Helvetica, sans-serif;
    text-shadow: -1px 1px 0 #000, -1px 1px 0 #0a0e27;
    z-index: 10;
}

@media screen and (max-width: 400px){
    .ml7 .letter {
        font-size: 1rem;
    }
    .logo-init img {
        max-width: 190px;
    }
}
</style>