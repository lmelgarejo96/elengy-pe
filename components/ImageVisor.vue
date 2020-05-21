<template>
  <div id="modal-lightbox" class="lightbox">
    <div class="wrapper-post">
      <div class="container-fluid">
        <div class="row m-0">
          <div class="col-lg-8 col-md-8 col-sm-12 p-0 m-0">
            <div class="img-bg">
              <div class="image swiper-container">
                <div class="swiper-wrapper">
                  <div v-for="(media, index) in post.media" :key="index*50" class="swiper-slide">
                    <div>
                      <div
                        v-if="media.type === 'img'"
                        class="wrapper-zoom"
                        :id="`img-zoomer-box${index}`"
                      >
                        <!-- <img src="https://bit.ly/2mgDw0y" id="img1" /> -->
                        <img
                          :id="`img-elengy-${index}`"
                          class="img-fluid"
                          draggable="false"
                          :src="media.src"
                          :alt="`${post.title}${index}`"
                        />
                        <!-- <div class="img-zoomed" :style="`background: url(${media.uri}) no-repeat #FFF;`" :id="`img-zoom-${index}`"></div> -->
                        <div class="loupe-zoom">
                          <button @click="openZoom(media)">
                            <i class="material-icons">fullscreen</i>
                          </button>
                        </div>
                      </div>
                      <video v-else setup="{}" controls>
                        <source :src="media.src" :type="`video/${media.type}`" />
                      </video>
                    </div>
                  </div>
                </div>

                <div class="swiper-pagination"></div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-12 p-0 m-0 col-description">
            <div class="description-img">
              <div class="bg-description">
                <div class="banner-description">
                  <div class="img-square">
                    <img :src="post.author.img" :alt="post.author.names" />
                  </div>
                  <div class="details-pub">
                    <h5>{{post.author.names}}</h5>
                    <span>{{post.date}}</span>
                  </div>
                </div>
                <div class="description-content">
                  <hr />
                  <div class="title-description">{{post.title}}</div>
                  <div class="desc" v-html="post.description"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <button @click="closeLightbox" style="outline: none;" class="btn-close-lightbox">
      <i class="material-icons">close</i>
    </button>

    <PhotoSlide v-if="photosList.length > 0" :items="photosList" v-on:closeVisor="closeVisor" />
  </div>
</template>

<script>
import PhotoSlide from "../components/PhotoSwipe";
export default {
  components: {
    PhotoSlide
  },
  props: {
    post: Object
  },
  data: () => ({
    slideSwiper: null,
    playsinline: true,
    photosList: []
  }),
  mounted() {
    this.initSwiper();
    this.closeOnClick();
  },
  methods: {
    closeLightbox() {
      this.$emit("closeLightbox");
    },
    closeOnClick() {
      const lightbox = document.getElementById("modal-lightbox");
      const id_lightbox = lightbox.id;
      const content = document.getElementById("content-lightbox");
      lightbox.addEventListener("click", e => {
        if (e.target.id === id_lightbox) {
          this.closeLightbox();
        }
      });
    },
    initSwiper() {
      this.slideSwiper = new Swiper(".swiper-container", {
        lazy: true,
        pagination: {
          el: ".swiper-pagination",
          type: "fraction"
        }
      });
    },
    openZoom(media) {
      this.photosList = [];
      this.photosList.push(media);
    },
    closeVisor() {
      this.photosList = [];
    }
  }
};
</script>

<style>
.lightbox {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 260;
  background: rgba(0, 0, 0, 0.92);
  /* box-sizing: border-box; */
  transform: scale(0);
  /* overflow: hidden; */
  display: flex;
  align-items: center;
  justify-content: center;
}

.lightbox .wrapper-post {
  width: 80%;
  height: 80%;
  max-height: 80%;
  max-width: 80%;
}

.lightbox .wrapper-post .container-fluid,
.lightbox .wrapper-post .container-fluid .row {
  width: 100%;
  height: 100%;
}

.lightbox .wrapper-post .img-bg {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #000;
}

.lightbox .img-bg {
  width: 100%;
  height: 100%;
}

.lightbox .description-img {
  height: 100%;
  width: 100%;
  padding: 16px;
  background: #fff;
}
.lightbox .description-responsive-img {
  display: none;
  width: 80%;
  padding: 16px;
  margin: auto;
}
.lightbox .description-img .banner-description,
.lightbox .description-responsive-img .banner-description {
  display: flex;
  flex-flow: row nowrap;
}

.lightbox .description-img .banner-description .details-pub,
.lightbox .description-responsive-img .banner-description .details-pub {
  font-family: "Roboto";
  font-weight: normal;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-left: 10px;
  font-size: 15px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  box-sizing: border-box;
}
.lightbox .description-img .banner-description .details-pub h5,
.lightbox .description-responsive-img .banner-description .details-pub h5,
.lightbox .description-img .banner-description .details-pub span,
.lightbox .description-responsive-img .banner-description .details-pub span {
  padding: 0;
  font-size: 15px;
  margin: 0;
}
.lightbox .description-img .banner-description .details-pub span,
.lightbox .description-responsive-img .banner-description .details-pub span {
  font-size: 11px;
}

.lightbox .description-img .banner-description .img-square,
.lightbox .description-responsive-img .banner-description .img-square {
  width: 55px;
  height: 55px;
  border-radius: 50%;
  overflow: hidden;
}

.lightbox .description-img .banner-description img,
.lightbox .description-responsive-img .banner-description img {
  display: block;
  width: 100%;
  height: 100%;
}
.description-content .title-description {
  font-weight: 500;
  color: #2a3549;
  padding: 0.5em 0;
  padding-bottom: 1rem;
  font-size: 17px;
  font-family: "Roboto";
}
.description-content hr {
  margin-top: 0.4rem;
  margin-bottom: 0.8rem;
}

.description-content .desc {
  width: 100%;
  height: auto;
  overflow: hidden;
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
  font-size: 13px;
}

/* .lightbox .scroll-modal {
    width: 100%;
    height: 85%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column nowrap;
}
.lightbox, .lightbox .wrapper-img  {
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    height: 100%;
    width: 100%;
}

.lightbox .wrapper-img {
    height: 80%;
    width: 90%;
    max-height: 800px;
    box-sizing: border-box;
    flex-wrap: wrap;
}

.lightbox .img-container {
    width: 70%;
    max-width: 80%;
    height: 100%;

    display: flex;
    justify-content: flex-end;
    align-items: center;

}   

.description-img {
    width: 30%;
    max-width: 30%;
    height: 100%;
    margin: auto 0;
    background: #ffff;
}

.lightbox .img-container .img-bg {
    width: 100%;
    height: 100%;
    background: #000;
    display: flex;
    align-items: center;
    justify-content: center;
}

.lightbox .img-container .img-bg .image{
    width: 100%;
    height: 100%;
    height: 60vh;
    max-height: 600px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.lightbox .img-container img{
    max-width: 100%;
    max-height: 100%;
    vertical-align: middle;


}



 */

.btn-close-lightbox {
  line-height: normal;
  color: #fff;
  opacity: 0.6;
  position: absolute;
  right: 12px;
  top: 12px;
  transition: opacity 1s cubic-bezier(0.23, 1, 0.32, 1);
}

.btn-close-lightbox i {
  outline: none;
}

/* swiper */
.lightbox .swiper-container {
  width: 100%;
  height: auto;
  /*  position: none; */
}

.lightbox .swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  /* position: relative; */
  width: 100%;
  margin: auto;
  /* overflow: hidden; */
}

.lightbox .swiper-slide .loupe-zoom {
  position: absolute;
  bottom: 0;
  right: 0;
}
.lightbox .swiper-slide .loupe-zoom button {
  color: #fff;
  width: 30px;
  height: 35px;
  border-radius: 50% 0px 0px 50%;
  /* background: rgba(0,0,0,.6); */
  background: rgba(0, 0, 0, 0.65);
  outline: none;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.lightbox .wrapper-post video {
  max-width: 100%;
  max-height: 100%;
  outline: none;
}
.swiper-container-horizontal > .swiper-pagination-bullets,
.swiper-pagination-custom,
.swiper-pagination-fraction {
  bottom: calc(90% + 10px);
  left: 5px;
  width: 100%;
  z-index: 265;
  text-align: right;
  padding: 3px 8px;
  border-radius: 15px;
  background: rgba(0, 0, 0, 0.6);
  width: auto;
}

@media screen and (max-width: 1100px) {
  .lightbox .wrapper-post {
    height: 85%;
    width: 85%;
    max-height: 85%;
    max-width: 85%;
  }
}
@media screen and (max-width: 959px) {
  .lightbox .wrapper-post {
    height: 85%;
    width: 85%;
    max-height: 85%;
    max-width: 85%;
    overflow-y: scroll;
  }
  .lightbox .wrapper-post .container-fluid {
    padding: 0;
    margin: 0;
  }
  .lightbox .wrapper-post::-webkit-scrollbar {
    width: 0.2em;
  }
  .lightbox .wrapper-post::-webkit-scrollbar-thumb {
    background-color: rgb(54, 51, 51);
    outline: 1px solid slategrey;
  }
}

@media screen and (max-width: 600px) {
  .lightbox .wrapper-post {
    /*  height: 100%; */
    width: 100%;
    max-width: 92%;
    height: 88%;
    max-height: 88%;
    margin-left: 0.2em;
    margin-bottom: 0.2em;
  }
  .lightbox .wrapper-post::-webkit-scrollbar-thumb {
    background-color: rgba(133, 13, 13, 0.7);
    outline: 1px solid slategrey;
  }
}

@media screen and (max-width: 500px) {
  .lightbox .wrapper-post {
    /*  height: 100%; */
    width: 100%;
    max-width: 100%;
    height: 100%;
    max-height: 100%;
  }
}

@media screen and (max-width: 400px) {
  .lightbox .wrapper-post {
    /*  height: 100%; */
    width: 100%;
    max-height: 100%;
    max-width: 100%;
    overflow-y: scroll;
    height: 100%;
  }

  /* .swiper-pagination {
        position: absolute;
        z-index: 265;
    } */
  /* .lightbox .swiper-container {
        width: 100%;
        height: auto;
        max-height: 300px;
    }
    .lightbox .swiper-slide {
        max-height: 300px;
    } */
  .lightbox .swiper-slide img,
  .lightbox .swiper-slide video {
    max-height: 200px;
  }
  .lightbox .swiper-slide video {
    width: 100%;
  }
  .swiper-container-horizontal > .swiper-pagination-bullets,
  .swiper-pagination-custom,
  .swiper-pagination-fraction {
    bottom: calc(86%);
  }
  .lightbox .swiper-container {
    height: 100%;
    max-height: 200px;
  }
}

.swiper-pagination,
.swiper-pagination span {
  color: #fff !important;
  font-family: "Roboto", Arial, "Helvetica Neue", Helvetica, sans-serif;
  font-size: 15px;
  letter-spacing: 1px;
}
@keyframes animationLightBox {
  0% {
    transform: translateY(100vh);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

/* animation lightbox */

.lightbox.animationLightBox {
  transform: scaleY(0.01) scaleX(0);
  animation: unfoldIn 1s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
}
.lightbox.animationLightBox .wrapper-post {
  transform: scale(0);
  animation: zoomIn 0.5s 1s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
}
.lightbox.animationLightBox.outLightBox {
  transform: scale(1);
  animation: unfoldOut 1s 0.3s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
}
.lightbox.animationLightBox.outLightBox .wrapper-post {
  animation: zoomOut 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
}

@keyframes unfoldIn {
  0% {
    transform: scaleY(0.005) scaleX(0);
  }
  50% {
    transform: scaleY(0.005) scaleX(1);
  }
  100% {
    transform: scaleY(1) scaleX(1);
  }
}

@keyframes unfoldOut {
  0% {
    transform: scaleY(1) scaleX(1);
  }
  50% {
    transform: scaleY(0.005) scaleX(1);
  }
  100% {
    transform: scaleY(0.005) scaleX(0);
  }
}

@keyframes zoomIn {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes zoomOut {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}

.lightbox .wrapper-post .wrapper-zoom {
  position: relative;
}

.lightbox .wrapper-post .wrapper-zoom:hover,
.lightbox .wrapper-post .wrapper-zoom:active {
  cursor: grabbing;
  display: block;
}

.lightbox .wrapper-post .wrapper-zoom:hover .img-zoomed,
.lightbox .wrapper-post .wrapper-zoom:active .img-zoomed {
  opacity: 1;
}

.lightbox .wrapper-post .wrapper-zoom .img-zoomed {
  width: 340px;
  height: 340px;
  box-shadow: 0 5px 10px -2px rgba(0, 0, 0, 0.3);
  pointer-events: none;
  position: absolute;
  opacity: 0;
  border: 4px solid whitesmoke;
  z-index: 99;
  border-radius: 100%;
  display: block;
  transition: opacity 0.2s;
}

.img-magnifier-glass {
  position: absolute;
  border: 3px solid #000;
  border-radius: 50%;
  cursor: none;
  /*Set the size of the magnifier glass:*/
  width: 100px;
  height: 100px;
}
</style>