<template>
  <section id="galeria-elengy" class="galery-section">
      <div id="slider-elengy" class="slider">
          <div class="element-slider"  style="background: #00bb31;">
              <div class="content-slide">
                  <h1 class="title-slide">Obras Electromecánicas</h1>
                  <p class="text-slide">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem excepturi incidunt repudiandae enim, nostrum a?</p>
                  <button class="btn-content-slide">Ver más</button>
              </div>
              <div class="img-content">
                <img class="img-slide" src="../../static/offer.png" alt="">
              </div>
          </div>
          <div class="element-slider"  style="background: #64b4e7;">
              <div class="content-slide">
                  <h1 class="title-slide">Ingeniería Secundaria y Protecciones</h1>
                  <p class="text-slide">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem excepturi incidunt repudiandae enim, nostrum a?</p>
                  <button class="btn-content-slide">Ver más</button>
              </div>
              <div class="img-content">
                <img class="img-slide" src="../../static/engineer.svg" alt="">
              </div>
          </div>
          <div class="element-slider"  style="background: #3F51B5;">
              <div class="content-slide">
                  <h1 class="title-slide">Estudios en AT, MT y BT</h1>
                  <p class="text-slide">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem excepturi incidunt repudiandae enim, nostrum a?</p>
                  <button class="btn-content-slide">Ver más</button>
              </div>
              <div class="img-content">
                <img class="img-slide" src="../../static/valores2.svg" alt="">
              </div>
          </div>
          <div class="element-slider" style="background: #64b4e7;">
              <div class="content-slide">
                  <h1 class="title-slide">Redes, Comunicaciones y Fibra Óptica</h1>
                  <p class="text-slide">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem excepturi incidunt repudiandae enim, nostrum a?</p>
                  <button class="btn-content-slide">Ver más</button>
              </div>
              <div class="img-content">
                <img class="img-slide" src="../../static/valores.svg" alt="">
              </div>
          </div>
      </div>
  </section>
</template>

<script>
export default {
    data: () => ({
        currentIndex: -1,
        elements: [],
        activeElement: null,
        contentSlide: [],
        mouseOverSlide: false,
        counter: null,
        textSlide: [],
        btnsSlide: []

    }),
    mounted(){
        this.currentIndex = -1;
        this.elements = document.querySelectorAll('.element-slider');
        this.contentSlide = document.querySelectorAll('.title-slide');
        this.textSlide = document.querySelectorAll('.text-slide');
        this.btnsSlide = document.querySelectorAll('.btn-content-slide');
        this.nextSlide()
        const slider = document.getElementById('galeria-elengy');
        this.counter = setInterval(() => {
            this.nextSlide();
        },5000);;
        $('.galery-section').mousemove((e) => {
            const pageY = e.pageY;
            const pageX = e.pageX;
            const alturaSlider = document.getElementById('slider-elengy').clientHeight;
            const anchoSlider = document.getElementById('slider-elengy').clientHeight;
            const resta = alturaSlider - pageY;
            if(resta<=60 ||  pageY<=60 || pageX<60 || pageX>anchoSlider-60){
                clearInterval(this.counter);
                this.counter = setInterval(() => {
                    this.nextSlide();
                },5000);;
            }else{
                clearInterval(this.counter);
            }
            /* if($(".slider").is(":hover")) { 
                this.mouseOverSlide = true;
                
            }else{
                this.mouseOverSlide = false;
                if(!this.mouseOverSlide){
                    
                }
            } */
        });

    },
    methods: {
        nextSlide(){
            this.currentIndex = this.currentIndex+1;

            if(this.currentIndex>=this.elements.length) {
                this.currentIndex = 0;
            }

            const el = this.elements[this.currentIndex];
            /* el.classList.add('active-slide'); */

            this.activeElement = document.querySelector('.element-slider.active-slide');

            if(this.activeElement!=null || this.activeElement!=undefined){
                this.activeElement.classList.add('start-out');
                setTimeout(this.moveActive, 1500);
            }

            el.classList.add('active-slide');

            this.contentSlide[this.currentIndex].classList.add('animation-details-info2');
            this.textSlide[this.currentIndex].classList.add('animation-details-info2');
            this.btnsSlide[this.currentIndex].classList.add('animation-details-info3');
            setTimeout(() => {
                this.contentSlide[this.currentIndex].classList.remove('animation-details-info2');
                this.textSlide[this.currentIndex].classList.remove('animation-details-info2');
                this.btnsSlide[this.currentIndex].classList.remove('animation-details-info3');
            }, 2000);

        },
        prevSlide(){
            this.currentIndex = this.currentIndex-1;

            if(this.currentIndex<0) {
                this.currentIndex = this.elements.length-1;
            }

            const el = this.elements[this.currentIndex];

            this.activeElement = document.querySelector('.element-slider.active-slide');

            if(this.activeElement!=null || this.activeElement!=undefined){
                this.activeElement.classList.add('start-out');
                setTimeout(this.moveActive, 1500);
            }

            el.classList.add('left-slide');
            
        },
        moveActive(){
            this.activeElement.classList.remove('active-slide');
            this.activeElement.classList.remove('start-out');
        }

    }
}
</script>

<style>
.galery-section {
    height: 70vh;
    width: 100%;
}
.slider {
    width: 100%;
    height: 100%;
    max-width: 100%;
    max-height: 100vh;
    position: relative;
    overflow: hidden;
}

.element-slider {
    width: 100%;
    height: 100%;
    /* background-position: center;
    background-size: cover;
    background-repeat: no-repeat; */
    position: absolute;
    top: 0px;
    right: -100%;
    box-shadow: 2px 0px 6px rgba(0, 0, 0, .3);
    transition: left ease-in-out 1.5s;
    
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    padding-left: 7.5em;
    padding-right: 4em;
    overflow: hidden;
}

.element.left-slide {
    left: -100%;
}
.element.right-slide {
    right: -100%;
}


.element-slider .content-slide {
    height: 100%;
    width: 100%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    font-family: 'Raleway', sans-serif;
    /* align-items: center; */
}
.element-slider .content-slide h1 {
    color: #fff;
    margin: 0;
    font-weight: bold;
    font-size: 2.75rem;
    line-height: 1.09091;
    transition: all ease-in-out .5s;
    margin-bottom: .5em;
}
.element-slider .content-slide p{
    font-size: 13px;
    color: #eee;
    max-width: 350px;
    transition: all ease-in-out .5s;
}
.element-slider .content-slide button{
    padding: 8px 15px;
    background: none;
    border-radius: 30px;
    border: 1px solid #fff;
    color: #fff;
    max-width: 150px;
    outline: none;
    font-size: 12px;
    text-transform: uppercase;
    transition: all ease-in-out 1s;
}


.element-slider .content-slide, .element-slider .img-content {
    width: 50%;
    display: flex;
    justify-content: center;
}

.element-slider img {
    max-width: 60%;
    transition: all ease-in-out .5s;
}

.element-slider.active-slide {
    z-index: 10;
    right: 0;
    animation-name: slideAnimation;
    animation-timing-function: ease-in-out;
    animation-duration: 1.5s;
}
.element-slider.start-out{
    z-index: 5;
}
@keyframes slideAnimation {
    0% {
        transform: scale(1.2);
        opacity: 0;
        width: 10%;
    }
    50% {
        /* transform: scale(1.); */
        /* width: 50%; */
        opacity: 1;
    }
    100%{
        transform: scale(1);
        width: 100%;
    }
}

.letter-slide-animation {
    animation-name: lettersAnimation;
    animation-timing-function: ease-in-out;
    animation-duration: 3s;

}   

@keyframes lettersAnimation {
    0%{
        opacity: 0;
        transform: translateY(100px);
    }
    100%{
        transform: translateY(0);
        opacity: 1;
    }
}

.animation-details-info2 {
  transition: all ease-in-out .5s;
  animation-name: detailsAnimation2;
  animation-duration: 2s;
  animation-timing-function: ease-in-out;
}
.animation-details-info3 {
  transition: all ease-in-out .5s;
  animation-name: detailsAnimation2;
  animation-duration: 2.5s;
  animation-delay: .5s;
  animation-timing-function: ease-in-out;
}
@keyframes detailsAnimation2 {
  0%{
    transform: translateY(60px);
    opacity: 0;
  }
  75%{
    transform: translateY(60px);
    opacity: 0;
  }
  100%{
    transform: translateY(0);
    opacity: 1;
  }
  
}
</style>