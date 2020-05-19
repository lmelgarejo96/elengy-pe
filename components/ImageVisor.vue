<template>
    <div id="modal-lightbox" class="lightbox">
        <div class="scroll-modal">

            <div id="content-lightbox" class="wrapper-img">
                <div class="img-container">
                    <div class="img-bg">
                        <div class="image swiper-container">
                                <div class="swiper-wrapper">
                                    <div v-for="(media, index) in post.media" :key="index*50" class="swiper-slide">
                                        <div>
                                            <img v-if="media.type === 'img'" class="img-fluid" draggable="false" :src="media.uri" :alt="`${post.title}${index}`">
                                            
                                            <!-- <div class="video-container" > -->
                                            <video v-else  :src="media.uri" controls></video>

                                        </div>
                                        <!-- </div> -->
                                    </div>
                                    <!-- <div class="swiper-slide">Slide 2</div>
                                    <div class="swiper-slide">Slide 3</div> -->
                                </div>

                            
                            <div class="swiper-pagination"></div>
                                <!-- <img draggable="false" :src="post.portada" :alt="post.title"> -->
                            <!-- <div class="swiper-button-next"></div>
                            <div class="swiper-button-prev"></div> -->
                        </div>
                    </div>
                </div>
                <div class="description-img">
                    <div class="bg-description">
                        <div class="banner-description">
                            <div class="img-square">
                                <img :src="post.author.img" :alt="post.author.names">
                            </div>
                            <div class="details-pub">
                                <h5>{{post.author.names}}</h5>
                                <span>{{post.date}}</span>
                            </div>
                        </div>
                        <div class="description-content">
                            <p></p>
                            <div class="desc" v-html="post.description">
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div class="description-responsive-img">
                    <div class="bg-description">
                        <div class="banner-description">
                            <div class="img-square">
                                <img :src="post.author.img" :alt="post.author.names">
                            </div>
                            <div class="details-pub">
                                <h5>{{post.author.names}}</h5>
                                <span>{{post.date}}</span>
                            </div>
                        </div>
                        <div class="description-content">
                            <p></p>
                            <div class="desc" v-html="post.description">
                            </div>
                        </div>
                    </div>
            </div>
        </div>

        <button @click="closeLightbox" style="outline: none;" class="btn-close-lightbox">
            <i class="material-icons">close</i>
        </button>

    </div>
</template>

<script>
export default {
    props: {
        post: Object
    },
    data: () => ({
        slideSwiper: null
    }),
    mounted(){
        this.initSwiper();
        this.closeOnClick()
    },
    methods: {
        closeLightbox(){
            this.$emit('closeLightbox');
        },
        closeOnClick(){  
            const lightbox =  document.getElementById('modal-lightbox');
            const id_lightbox = lightbox.id;
            const content = document.getElementById('content-lightbox');
            lightbox.addEventListener('click', (e) => {
                if(e.target.id === id_lightbox){
                    this.closeLightbox();
                }    
            });
        },
        initSwiper(){
            this.slideSwiper = new Swiper('.swiper-container', {
            pagination: {
                el: '.swiper-pagination',
                type: 'fraction',
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            });
        }
    }
}
</script>

<style>
.lightbox {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 260;
    background: rgba(0,0,0,.9);
    /* box-sizing: border-box; */
    transform: scale(0);
    /* overflow: hidden; */
}
.lightbox .scroll-modal {
    width: 100%;
    height: 80%;
    margin: auto;
}
.lightbox, .lightbox .wrapper-img  {
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    margin: auto;
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
    max-height: 800px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
   /*  box-sizing: border-box; */
   /*  overflow: hidden; */
}   

.description-img {
    width: 30%;
    max-width: 30%;
    height: 100%;
    margin: auto 0;
    background: #ffff;
}
/* .description-img  .bg-description {
    width: 80%;
    margin: auto 0;
    background: #ffff;
} */

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
    /*z-index: 1; */

}

.lightbox .img-container video {
    max-width: 100%;
    max-height: 100%;
}

.lightbox .description-img {
    height: 100%;
    width: 100%;
    padding: 16px;
}
.lightbox .description-responsive-img {
    display: none;
    width: 80%;
    padding: 16px;
    background: #fff;
    margin: auto;
}
.lightbox .description-img .banner-description,
.lightbox .description-responsive-img .banner-description {
   /*  max-height: 150px; */
    display: flex;
    flex-flow: row nowrap;
}

.lightbox .description-img .banner-description .details-pub,
    .lightbox .description-responsive-img .banner-description .details-pub{
    font-family: 'Roboto';
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
.lightbox .description-responsive-img .banner-description .details-pub span{
    padding: 0;
    font-size: 15px;
    margin: 0;
}
.lightbox .description-img .banner-description .details-pub span,
.lightbox .description-responsive-img .banner-description .details-pub span{
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
.lightbox .description-responsive-img .banner-description img{
    display: block;
    width: 100%;
    height: 100%;
    /* cursor: pointer; */
}

.description-content .desc {
    width: 100%;
    height: auto;
    overflow: hidden;
    font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
    font-size: 14px;
}



.btn-close-lightbox {
    line-height: normal;
    color: #fff;
    opacity: .6;
    position: absolute;
    right: 12px;
    top: 12px;
    transition: opacity 1s cubic-bezier(.23, 1, .32, 1);
}

.btn-close-lightbox i{
    outline: none;
}


/* swiper */
.lightbox .swiper-container  {
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

}




@media screen and (min-width: 1200px){
    .lightbox .wrapper-img {
        width: 80%;
    }
}
@media screen and (max-width: 1000px){
    .lightbox .img-container {
        width: 65%;
        max-width: 75%;
    }   

    .description-img {
        width: 35%;
        max-width: 35%;
    }
}
@media screen and (max-width: 870px){
    .lightbox .img-container {
        width: 62%;
        max-width: 62%;
    }   

    .description-img {
        width: 38%;
        max-width: 38%;
    }
}

@media screen and (max-width: 840px){
    .lightbox .img-container {
        max-height: 380px;
        width: 100%;
        width: 100%;
        max-width: 100%;
    }
    .swiper-slide {
        width: 100%;
        height: 100%;
        display: flex;
        max-height: 380px;
        align-items: center;
    }
    .lightbox .img-container .img-bg {
        width: 100%;
        height: auto;
        background: #000;
        display: flex;
        align-items: flex-end;
        justify-content: center;
    }
    .lightbox .img-container .img-bg {
        width: 100%;
        height: auto;
        background: #000;
        display: flex;
        align-items: flex-end;
        justify-content: center;
    }
    .lightbox .img-container .img-bg .image {
        width: auto;
        height: auto;
    }
    /* .swiper-wrapper {
        display: flex;
        align-items: center;
    } */
    .lightbox .wrapper-img {
        flex-flow: column nowrap;
        width: 80%;
        height: auto;
    }
    .description-img {
        display: none;
       /*  width: 97%;
        max-width: 97%; */
    }
    .lightbox .description-responsive-img {
        display: flex;
    }

    .lightbox .scroll-modal {
        overflow-y: scroll;
        height: 90%;
    }
    .lightbox .scroll-modal::-webkit-scrollbar {
        width: .2em;
    }
    .lightbox .scroll-modal::-webkit-scrollbar-thumb {
        background-color: rgb(54, 51, 51);
        outline: 1px solid slategrey
    }

    /* .lightbox .img-container {
        height: auto;
    }
    .lightbox .img-container .img-bg {
        width: 100%;
        height: auto;
        background: #000;
        display: flex;
        align-items: flex-end;
        justify-content: center;
    }
    .lightbox .img-container .img-bg .image {
        width: auto;
        height: auto;
    }
    .lightbox .wrapper-img {
        flex-flow: column nowrap;
        width: 80%;
        height: 85%;
        overflow-y: scroll;
    }
    .lightbox .wrapper-img::-webkit-scrollbar {
        width: .2em;
    }
    .lightbox .wrapper-img::-webkit-scrollbar-thumb {
        background-color: #000;
        outline: 1px solid slategrey
    }
    .lightbox .img-container {
        width: 97%;
        max-width: 97%;
        height: auto;
    }   

    .description-img {
        width: 97%;
        max-width: 97%;
    }
    .lightbox .img-container .img-bg .image {
        flex-wrap: nowrap;
        align-items: center;
        box-sizing: border-box;
    }

    .swiper-wrapper {
        display: flex;
        align-items: center;

    } */
    .lightbox {
        display: flex;
        flex-flow: column nowrap;
    }
    .swiper-container-horizontal>.swiper-pagination-bullets, .swiper-pagination-custom, .swiper-pagination-fraction {
        position: absolute;
        top: 8px;
        right: 0;
        height: 40px;
        display: flex;
        justify-content: flex-start;
        padding-left: 8px;
    }
    
}

@media screen and (max-width: 650px){
    
    .lightbox .wrapper-img {
        flex-flow: column nowrap;
        width: 95%;
    }
    .lightbox .description-responsive-img {
        width: 95%;
    }

}

@media screen and (max-width: 360px){
    .lightbox .wrapper-img {
        flex-flow: column nowrap;
        width: 98%;
        max-height: 85%;
        height: auto;
    }
    .lightbox .description-responsive-img {
        width: 98%;
    }
}

.video-container {
    width: 100%;
    height: 100%;
    overflow: hidden;
    height: 250px;
}

/* .swiper-button-next .swiper-button-prev {
    outline: none;
    cursor: pointer;
    width: 30px;
    height: 30px;
    cursor: pointer !important;
    color: #000 !important;
    fill: black !important;
    stroke: black !important;
} */

.swiper-pagination, .swiper-pagination span {
    color: #fff !important;
    font-family: 'Roboto',Arial, "Helvetica Neue", Helvetica, sans-serif;
    font-size: 15px;
    letter-spacing: 1px;
}
/* .swiper-container-horizontal>.swiper-pagination-bullets, .swiper-pagination-custom, .swiper-pagination-fraction {
    position: absolute;
    top: 10px;
    right: 0;
    height: 40px;
    display: flex;
    justify-content: flex-end;
    padding-right: 10px;
} */
/* .swiper-pagination {
    top: 10px;
    right: 10px;
} */

/* .animationLightBox {
    animation: animationLightBox ease-in-out 1s;
}
 */
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
.lightbox.animationLightBox .scroll-modal  {
  transform: scale(0);
  animation: zoomIn 0.5s 1s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
}
.lightbox.animationLightBox.outLightBox {
  transform: scale(1);
  animation: unfoldOut 1s 0.3s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
}
.lightbox.animationLightBox.outLightBox .scroll-modal  {
  animation: zoomOut 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
}


@keyframes unfoldIn {
  0% {
    transform:scaleY(.005) scaleX(0);
  }
  50% {
    transform:scaleY(.005) scaleX(1);
  }
  100% {
    transform:scaleY(1) scaleX(1);
  }
}

@keyframes unfoldOut {
  0% {
    transform:scaleY(1) scaleX(1);
  }
  50% {
    transform:scaleY(.005) scaleX(1);
  }
  100% {
    transform:scaleY(.005) scaleX(0);
  }
}

@keyframes zoomIn {
  0% {
    transform:scale(0);
  }
  100% {
    transform:scale(1);
  }
}

@keyframes zoomOut {
  0% {
    transform:scale(1);
  }
  100% {
    transform:scale(0);
  }
}



</style>