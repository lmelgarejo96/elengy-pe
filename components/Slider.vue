<template>
  <header id="header-elengy" class="slider">
    <div class="oakslider">
      <div class="oakslider__ui">
        <div class="oakslider__nav">
          <div class="oakslider__navpoint">
            <!-- <p class="point-slide">01</p> -->
            01
            <div class="oakslider__timer">
              <div class="timer__progress"></div>
            </div>
            <span class="oakslider__label"></span>
          </div>
          <div class="oakslider__navpoint">
            <!-- <button class="point-slide"></button> -->
            02
            <div class="oakslider__timer">
              <div class="timer__progress"></div>
            </div>
            <span class="oakslider__label"></span>
          </div>
          <div class="oakslider__navpoint">
            <!-- <button class="point-slide"></button> -->
            03
            <div class="oakslider__timer">
              <div class="timer__progress"></div>
            </div>
            <span class="oakslider__label"></span>
          </div>
          <div class="oakslider__navpoint">
            <!-- <button class="point-slide"></button> -->
            04
            <div class="oakslider__timer">
              <div class="timer__progress"></div>
            </div>
            <span class="oakslider__label"></span>
          </div>
        </div>
        <div class="oakslider__controls">
          <div class="oakslider__arrow oakslider__arrow--left oakslider__prev">
              <span class="material-icons">
                keyboard_arrow_left
              </span>
          </div>
          <div class="oakslider__arrow oakslider__arrow--right oakslider__next">
              <span class="material-icons">
                keyboard_arrow_right
              </span>
          </div>
        </div>
      </div>

      <div class="oakslider__slider">
        <div class="oakslider__slide slide--active" data-slide="1">
          <div class="slide__image">
            <img src="../static/bg/altoVoltaje.jpg" alt="bg-slide-elengy" />
          </div>
          <div class="slide__container">
            <div class="slide__content">
              <div class="items-slide">
                <div class="izquierda animation-card">
                  <div class="service">
                    <h3 class="animation-details-info1">
                      <span>Somos una empresa Peruana dedicada al rubro de Ingeniería Eléctrica.</span>
                    </h3>
                    <p
                      class="animation-details-info1"
                    >Te invitamos a conocer más acerca de nosotros.</p>
                    <a href="/nosotros" class="animation-2">
                      <span class="material-icons">keyboard_arrow_right</span>
                      Leer más aquí
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="oakslider__slide" data-slide="2">
          <div class="slide__image">
            <img src="../static/bg/elengy.jpg" alt="bg-slide-elengy" />
          </div>
          <div class="slide__container">
            <div class="slide__content">
              <div class="items-slide">
                <div class="izquierda animation-card">
                  <div class="service">
                    <h3 class="animation-details-info1">
                      <span>Soluciones y servicios integrales para sus proyectos</span>
                    </h3>
                    <p
                      class="animation-details-info1"
                    >Desarrollamos ingeniería, estudios eléctricos, sistemas de control y protección.</p>
                    <a href="/servicios" class="animation-2">
                      <span class="material-icons">keyboard_arrow_right</span>
                      Conoce más aquí
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="oakslider__slide" data-slide="3">
          <div class="slide__image">
            <img src="../static/bg/teamElengy.jpg" alt="bg-slide-elengy" />
          </div>
          <div class="slide__container">
            <div class="slide__content">
              <div class="items-slide">
                <div class="izquierda animation-card">
                  <div class="service">
                    <h3 class="animation-details-info1">
                      <span>Soluciones y servicios integrales para sus proyectos</span>
                    </h3>
                    <p
                      class="animation-details-info1"
                    >Contamos con especialistas en subestaciones de media, alta y extra alta tensión.</p>
                    <a href="#" class="animation-2">
                      <span class="material-icons">keyboard_arrow_right</span>
                      Conoce más aquí
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="oakslider__slide" data-slide="4">
          <div class="slide__image">
            <img
              src="../static/bg/elengy-desinfection.jpg"
              alt="bg-slide-elengy"
            />
          </div>
          <div class="slide__container">
            <div class="slide__content">
              <div class="items-slide">
                <div class="izquierda animation-card">
                  <div class="service">
                    <h3 class="animation-details-info1">
                      <span>Elengy, un aliado en la lucha contra el Coronavirus</span>
                    </h3>
                    <p
                      class="animation-details-info1"
                    >Te invitamos a leer acerca de nuestra cabina de desinfección en la lucha contra el covid-19.</p>
                    <a href="#" class="animation-2">
                      <span class="material-icons">keyboard_arrow_right</span>
                      Conoce más aquí
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    <a href="#descubre_mas" class="mouse smoothscroll">
        <span class="mouse-icon">
          <span class="mouse-wheel"></span>
        </span>
    </a>
    <AudioReproductor/>
    </div>
  </header>
</template>

<script>
import AudioReproductor from '../components/ReproductorAudio';
export default {
  components: {
    AudioReproductor
  },
  data: () => ({
    oakSlider: null
  }),
  mounted() {
    this.oakSlider = {
      /*------------------------------------------------
            # Slider Settings
            ------------------------------------------------*/
      settings: {
        currentSlide: 4,
        totalSlides: 0,
        animating: false,
        autoPlay: true,
        autoPlaySpeed: 7, // Increase to stay on slides for longer
        transitionSpeed: 2.5, // Changes transition speed
        autoPlayInterval: false,
        ease: "expo",
        timeline: gsap.timeline({}),
        imageScale: "",
        controls: {
          next: document.querySelector(".oakslider__next"),
          prev: document.querySelector(".oakslider__prev"),
          nav: document.querySelectorAll(".oakslider__navpoint")
        }
      },

      /*------------------------------------------------
            # Initiate Slider
            ------------------------------------------------*/
      init: function() {
        this.settings.totalSlides = document.querySelectorAll(
          ".oakslider__slide"
        ).length;
        this.settings.controls.prev.addEventListener("click", () => {
          /* this.stopAutoPlay(); */
          this.changeSlide("prev");
        });
        this.settings.controls.next.addEventListener("click", () => {
          /* this.stopAutoPlay(); */
          this.changeSlide("next");
        });
        this.settings.controls.nav.forEach((el, key) => {
          el.addEventListener("click", () => {
            /* this.stopAutoPlay(); */
            this.jumpToSlide(key + 1);
          });
        });

        this.settings.imageScale = gsap.to(
          ".slide--active .slide__image img",
          15,
          {
            scale: 1.1,
            ease: "sine.inOut",
            yoyo: true,
            yoyoEase: true,
            repeat: -1
          }
        );

        if (this.settings.autoPlay) {
          this.autoPlay();
        }
      },

      /*------------------------------------------------
            # Change Slide
            ------------------------------------------------*/
      changeSlide: function(dir) {
        if (this.settings.animating) return;
        let animateFrom = this.settings.currentSlide;
        if (dir === "next") {
          if (this.settings.currentSlide >= this.settings.totalSlides) {
            this.settings.currentSlide = 1;
          } else {
            this.settings.currentSlide++;
          }
        } else {
          if (this.settings.currentSlide <= 1) {
            this.settings.currentSlide = this.settings.totalSlides;
          } else {
            this.settings.currentSlide--;
          }
        }
        this.slideAnimation(animateFrom, this.settings.currentSlide, dir);
      },

      /*------------------------------------------------
            # Slide Navigation
            ------------------------------------------------*/
      jumpToSlide: function(slide) {
        if (this.settings.animating || slide === this.settings.currentSlide)
          return;
        let animateFrom = this.settings.currentSlide;
        this.settings.currentSlide = slide;
        let dir;
        if (slide > animateFrom) {
          dir = "next";
        } else {
          dir = "prev";
        }

        this.slideAnimation(animateFrom, this.settings.currentSlide, dir);
      },

      /*------------------------------------------------
            # Autoplaying
            ------------------------------------------------*/
      autoPlay: function() {
        this.settings.autoPlay = true;

        let el = this.settings.controls.nav[this.settings.currentSlide - 1]
          .children[0].children[0];
        this.settings.timeline.fromTo(
          el,
          this.settings.autoPlaySpeed - this.settings.transitionSpeed,
          {
            x: "-100%"
          },
          {
            x: 0,
            ease: "none",
            delay: 0.5,
            onComplete: () => {
              this.changeSlide("next");
            }
          }
        );
      },

      stopAutoPlay: function() {
        if (this.settings.autoPlay) {
          this.settings.timeline.progress(100);
        }
        this.settings.autoPlay = false;
      },

      /*------------------------------------------------
            # Update Nav
            ------------------------------------------------*/
      updateNav: function(from, to) {
        gsap.to(
          this.settings.controls.nav[from - 1].children[0],
          this.settings.transitionSpeed,
          {
            width: 30,
            ease: this.settings.ease + ".inOut"
          }
        );
        gsap.to(
          this.settings.controls.nav[from - 1].children[1],
          this.settings.transitionSpeed,
          {
            opacity: 0,
            ease: this.settings.ease + ".inOut"
          }
        );
        gsap.to(
          this.settings.controls.nav[to - 1].children[0],
          this.settings.transitionSpeed,
          {
            width: 30,
            ease: this.settings.ease + ".inOut"
          }
        );
        gsap.to(
          this.settings.controls.nav[to - 1].children[1],
          this.settings.transitionSpeed,
          {
            opacity: 1,
            ease: this.settings.ease + ".inOut"
          }
        );
        gsap.to(
          this.settings.controls.nav[from - 1].children[0].children[0],
          this.settings.transitionSpeed,
          {
            x: "100%",
            ease: this.settings.ease + ".inOut"
          }
        );
      },

      /*------------------------------------------------
            # Slide Animation
            ------------------------------------------------*/
      slideAnimation: function(from, to, dir) {
        this.settings.animating = true;
        this.updateNav(from, to);

        from = '.oakslider__slide[data-slide="' + from + '"]';
        to = '.oakslider__slide[data-slide="' + to + '"]';

        this.settings.timeline.clear();
        this.settings.timeline.play(0);
        this.settings.timeline
          .set(to, {
            display: "block"
          })
          .to(
            from + " .slide__content ",
            (this.settings.transitionSpeed / 100) * 40,
            {
              y: -20,
              opacity: 0,
              ease: this.settings.ease + ".in",
              stagger: 0.1
            },
            "slideAnimation"
          )
          .fromTo(
            to + " .slide__content ",
            (this.settings.transitionSpeed / 100) * 40,
            {
              y: 20,
              opacity: 0
            },
            {
              y: 0,
              opacity: 1,
              ease: "Power3.out",
              stagger: 0.1
            },
            ">0.5"
          )
          .fromTo(
            from + " .slide__image",
            this.settings.transitionSpeed,
            {
              display: "block",
              x: "0%"
            },
            {
              x: dir === "next" ? "-100%" : "100%",
              ease: this.settings.ease + ".inOut"
            },
            "slideAnimation"
          )
          .fromTo(
            from + " .slide__image img",
            this.settings.transitionSpeed,
            {
              transformOrigin: "center",
              x: "0%"
            },
            {
              x: dir === "next" ? "50%" : "-50%",
              ease: this.settings.ease + ".inOut"
            },
            "slideAnimation"
          )
          .fromTo(
            to + " .slide__image img",
            this.settings.transitionSpeed,
            {
              transformOrigin: "center",
              x: dir === "next" ? "-50%" : "50%"
            },
            {
              x: "0%",
              ease: this.settings.ease + ".inOut"
            },
            "slideAnimation"
          )
          .fromTo(
            to + " .slide__image",
            this.settings.transitionSpeed,
            {
              display: "block",
              transformOrigin: "right center",
              x: dir === "next" ? "100%" : "-100%"
            },
            {
              x: "0%",
              ease: this.settings.ease + ".inOut",
              onComplete: () => {
                this.settings.animating = false;
                gsap.set(from, {
                  display: "none"
                });
                this.settings.imageScale.kill();
                gsap.set(from + " .slide__image", {
                  scale: 1
                });
                this.settings.imageScale = gsap.to(
                  to + " .slide__image img",
                  15,
                  {
                    scale: 1.1,
                    ease: "sine.inOut",
                    yoyo: true,
                    yoyoEase: true,
                    repeat: -1
                  }
                );
              }
            },
            "slideAnimation"
          );
        /*  */
        if (this.settings.autoPlay) {
          let el = this.settings.controls.nav[this.settings.currentSlide - 1]
            .children[0].children[0];
          this.settings.timeline.fromTo(
            el,
            this.settings.autoPlaySpeed - this.settings.transitionSpeed,
            {
              x: "-100%"
            },
            {
              x: 0,
              ease: "none",
              onComplete: () => {
                this.changeSlide("next");
              }
            },
            ">"
          );
        } /* else {
                    this.settings.autoPlay = true;
                } */
      }
    };

    /* setTimeout(() => { */
    this.$emit('slideFull', this.oakSlider);
      /* this.oakSlider.init(); */
    /* }, 4000) */
  }
};
</script>

<style>
.slider {
  padding-top: 100px;
  min-height: calc(80vh + 100px);
  background: #fff;
  font-family: sans-serif;
  max-height: 750px;
  /* position: relative; */
}

.oakslider {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 80vh;
  background: #22273c;
  color: #fff;
  display: flex;
  align-items: flex-start;
  overflow: hidden;
  max-height: 750px;
}

/* .oakslider__ui {
  position: relative;
  
  max-width: 1500px;
  min-width: 100%;
  height: 80vh;
  margin: 0 auto;
  
  display: flex;
  justify-content: center;
  justify-content: space-between;
  
} */

.oakslider__ui .oakslider__arrow {
  width: 6%;
  height: 100%;
  opacity: 0.5;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  position: absolute;
  cursor: pointer;
}
.oakslider__ui .oakslider__arrow span{
    margin-top: 60px;
}
/* .oakslider__controls {
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 25;
} */

.oakslider__prev {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  color: #fff;
  z-index: 50;
  background-image: -webkit-linear-gradient(left,rgba(0,0,0,.5) 0,rgba(0,0,0,.0001) 100%);
  background-image: -o-linear-gradient(left,rgba(0,0,0,.5) 0,rgba(0,0,0,.0001) 100%);
  background-image: -webkit-gradient(linear,left top,right top,from(rgba(0,0,0,.5)),to(rgba(0,0,0,.0001)));
  background-image: linear-gradient(to right,rgba(0,0,0,.5) 0,rgba(0,0,0,.0001) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#80000000', endColorstr='#00000000', GradientType=1);
  background-repeat: repeat-x;
}

.oakslider__prev:hover {
  background-image: -webkit-linear-gradient(left,rgba(0,0,0,.7) 0,rgba(0,0,0,.0001) 100%);
  background-image: -o-linear-gradient(left,rgba(0,0,0,.7) 0,rgba(0,0,0,.0001) 100%);
  background-image: -webkit-gradient(linear,left top,right top,from(rgba(0,0,0,.7)),to(rgba(0,0,0,.0001)));
  background-image: linear-gradient(to right,rgba(0,0,0,.7) 0,rgba(0,0,0,.0001) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#80000000', endColorstr='#00000000', GradientType=1);
  background-repeat: repeat-x;
}

.oakslider__next {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  color: #fff;
  z-index: 50;
  background-image: -webkit-linear-gradient(left,rgba(0,0,0,.0001) 0,rgba(0,0,0,.5) 100%);
  background-image: -o-linear-gradient(left,rgba(0,0,0,.0001) 0,rgba(0,0,0,.5) 100%);
  background-image: -webkit-gradient(linear,left top,right top,from(rgba(0,0,0,.0001)),to(rgba(0,0,0,.5)));
  background-image: linear-gradient(to right,rgba(0,0,0,.0001) 0,rgba(0,0,0,.5) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00000000', endColorstr='#80000000', GradientType=1);
  background-repeat: repeat-x;
}

.oakslider__next:hover {
  background-image: -webkit-linear-gradient(left,rgba(0,0,0,.0001) 0,rgba(0,0,0,.7) 100%);
  background-image: -o-linear-gradient(left,rgba(0,0,0,.0001) 0,rgba(0,0,0,.7) 100%);
  background-image: -webkit-gradient(linear,left top,right top,from(rgba(0,0,0,.0001)),to(rgba(0,0,0,.7)));
  background-image: linear-gradient(to right,rgba(0,0,0,.0001) 0,rgba(0,0,0,.7) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00000000', endColorstr='#80000000', GradientType=1);
  background-repeat: repeat-x;
}

.oakslider__nav {
  position: absolute;
  bottom: 1%;
  /* left: 0; */
  right: 0;
  /* width: 40%; */
  margin: auto;
  display: flex;
  justify-content: flex-end;
  z-index: 100;
  /* max-width: 300px; */
  
}

.oakslider__navpoint, .oakslider__next, .oakslider__prev {
    -webkit-user-select: none;
    -moz-user-select: none;
    -khtml-user-select: none;
    -ms-user-select:none;
}

.oakslider__navpoint {
  display: flex;
  padding: 0 1px;
  align-items: center;
  flex-flow: column nowrap;
  justify-content: center;
  margin-bottom: 10px;
  font-weight: 900;
  cursor: pointer;
  outline: none;
 /*  max-width: 50px; */
  color: rgba(255, 255, 255, 0.5);;
  transition: color ease-in-out .5s;
  /* text-align: center; */
  font-family: 'Montserrat',Arial, "Helvetica Neue", Helvetica, sans-serif;
  font-size: .9em;
 
}

.oakslider__navpoint:hover{
  color: rgba(255, 255, 255, 1);;

}

/* .oakslider__navpoint .oakslider__timer {
  width: 50px;
} */

.oakslider__navpoint .oakslider__label {
  opacity: 1;
}

.oakslider__navpoint .oakslider__label {
  opacity: 0;
  font-weight: 400;
}

.oakslider__navpoint .oakslider__timer {
  margin-left: 1px;
  position: relative;
  width: 30px;
  height: 1px;
  background: rgba(255, 255, 255, 0.1);
  overflow: hidden;
}

.oakslider__timer .timer__progress {
  position: absolute;
  top: 0;
  left: 0;
  background: #fff;
  height: 1px;
  width: 100%;
  transform: translateX(-100%);
}

.point-slide {
    width: 15px;
    height: 15px;
    background: none;
    border-radius: 50%;
    border: 1px solid rgba(255, 255, 255, .5);
}

.oakslider__slide {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: none;
}

.oakslider__slide .slide--active {
  display: block;
}



.slide__image {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.slide__image::after {
    content: "";
     position: absolute;
      left: 0;
  top: 0;
    background: linear-gradient(rgba(22,123,177,.22), rgba(0, 0, 0, 0.22));
    width: 100%;
  height: 100%;
}


.slide__image img {
  position: absolute;
  object-fit: cover;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0.5;
}

.slide__container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.slide__content {
  padding-top: 80px;
  max-width: 1500px;
  min-width: 100%;
  /* font-family: sans-serif; */
  z-index: 15;
}

/* .izquierda  {
    z-index: 100;
} */

.slide__title {
  font-size: 45px;
  max-width: 650px;
  line-height: 1.2;
  font-weight: 600;
}

.slide__link {
  margin-top: 25px;
}

@media screen and (max-width: 840px) {
  .slider {
    height: 100vh;
    padding-top: 0;
  }
  .oakslider, .oakslider__ui{
    height: 100vh;
  }
  
}


.items-slide {
  width: 84%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  transition: all ease-in-out .5s;
}
.izquierda, .derecha{
    display: flex;
    margin: 20px 50px;
    padding-top: 20px;
    transition: all ease-in-out .5s;
}
.izquierda {
  flex-flow: column nowrap;
  background: linear-gradient(to right,rgba(0, 13, 20, 0.7) 0,rgba(0, 13, 13, 0.7) 50%,rgba(0, 12, 12, 0.7) 83%,rgba(0, 12, 30, 0.7) 100%);
  width: 37%;
  height: auto;
  /* margin: 60px 0; */
  padding: 30px 30px;
  transition: all ease-in-out 2s;
  
}
.items-slide .izquierda .service{
  width: 100%;
  height: 100%;
 /*  min-width: 260px; */
  font-family: 'Montserrat',Arial, "Helvetica Neue", Helvetica, sans-serif;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  transition: all ease-in-out .5s;
  color: #fff;

}

.items-slide .izquierda .service h3, .items-slide .izquierda .service p{
    -webkit-user-select: none;
    -moz-user-select: none;
    -khtml-user-select: none;
    -ms-user-select:none;
}

.items-slide .izquierda .service h3{
  font-size: 2.1rem;
  font-weight: 600;
  letter-spacing: 1px;
  
}
.items-slide .izquierda .service p{
  color: rgba(255,255,255,.6);
  font-family: 'Raleway', "Helvetica Neue", Helvetica, sans-serif;
  font-weight: 400;
  letter-spacing: 1px;
  font-size: 16px;
}
.items-slide .izquierda .service a{
  padding: 10px 15px;
  background: rgba(170,0,0,.75);
  color: rgba(255,255,255,.88);
  font-weight: 500;
  display: flex;
  align-items: center;
  width: auto;
  max-width: 220px;
  text-decoration: none;
}

@media screen and (max-width: 1200px){
  .izquierda {
    width: 40%;
  }
}

@media screen and (max-width: 1000px){
  .izquierda {
    width: 60%;
  }
}

@media screen and (max-width: 780px){
  .izquierda {
    width: 80%;
  }
  .items-slide {
    justify-content: center;
  }
}

@media screen and (max-width: 700px){
  .izquierda {
    width: 95%;
    margin: 0;
  }
}

@media screen and (max-width: 720px){
  .items-slide .izquierda .service h3{
    font-size: 2em;
  }
  .items-slide .izquierda .service p{
    font-size: 15px;
  }
  .items-slide .izquierda .service a{
    padding: 8px 12px;
    font-size: 16px;
    max-width: 210px;
  }
}

@media screen and (max-width: 600px){
  .items-slide .izquierda .service h3{
    font-size: 1.5em;
  }
  .items-slide .izquierda .service p{
    font-size: 13px;
  }
  .items-slide .izquierda .service a{
    padding: 6px 10px;
    font-size: 13px;
    max-width: 175px;
  }
}

.animation-details-info1 {
  animation-name: detailsAnimation;
  animation-duration: 2s;
  animation-timing-function: ease-in-out;
}

.animation-details-parrafo{
  animation-name: detailsAnimation;
  animation-duration: 2.5s;
  animation-timing-function: ease-in-out;
}

.animation-2{
  animation-name: detailsAnimationDos;
  animation-timing-function: ease-in-out;
  animation-duration: 3s;
}

@keyframes detailsAnimation {
  0%{
    opacity: 0;
    transform: translateY(100px);
  }
  75%{
    opacity: 0;
    transform: translateY(100px);
  }
  100%{
    transform: translateY(0);
    opacity: 1;
  }
}


@keyframes detailsAnimationDos {
  0%{
    transform: translateY(80px);
    opacity: 0;
  }
  75%{
    transform: translateY(80px);
    opacity: 0;
  }
  100%{
    transform: translateY(0);
    opacity: 1;
  }
  
}

@media screen and (max-width: 840px){
  .slider {
    min-height: 80vh;
  }
}

/* mouse */
.mouse {
    position: absolute;
    bottom: 15px;
    z-index: 50;
    left: 50%;
    width: auto;
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
    display: block;
}

.mouse .mouse-icon {
    display: block;
    width: 25px;
    height: 45px;
    border: 2px solid white;
    border-radius: 15px;
    cursor: pointer;
    position: relative;
    text-align: center;
    -webkit-transition: .3s all ease-in-out;
    -o-transition: .3s all ease-in-out;
    transition: .3s all ease-in-out;
}
.mouse .mouse-wheel {
    height: 4px;
    margin: 2px auto 0;
    display: block;
    width: 4px;
    background-color: white;
    border-radius: 50%;
    -webkit-animation: 1.6s ease infinite wheel-up-down;
    -moz-animation: 1.6s ease infinite wheel-up-down;
    animation: 1.6s ease infinite wheel-up-down;
}

.mouse:hover .mouse-icon {
    border-color: #fff;
}
@keyframes wheel-up-down {
    0% {
        margin-top: 2px;
        opacity: 0;
    }
    30% {
        opacity: 1;
    }
    100% {
        margin-top: 20px;
        opacity: 0;
    }
}

/* mouse */
</style>