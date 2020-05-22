<template>
  <div id="brochure-elengy" class="d-brochure-elengy">
      <!-- <v-tooltip left>
      <template v-slot:activator="{ on }"> -->
        <v-btn  @click="donwloadBrochure" @mouseover="openChat" @mouseleave="closeChat" style="outline: none;" class="mx-1" fab dark large>
            <i class="fas fa-file-pdf" style="color: rgba(255,255,255,.7); font-size: 28px;"></i>
        </v-btn>
      <!-- </template>
      <span>Presiona para descargar nuestro Brochure</span>
    </v-tooltip> -->
      <div id="details-brochure" class="details-brochure">
          <div class="content-message">
            <div class="row-message">
                <div class="sect-img">
                    <img src="../../static/logo.webp" alt="logo-message">
                    <span>Elengy team</span>
                </div>
                <div class="message">
                    <div class="title-message">{{anounce.title}}</div>
                    <div class="message-c">{{anounce.message}}</div>
                </div>
            </div>
          </div>
      </div>
  </div>
</template>

<script>
import Brochure from '../../static/brochure/CV_LuisMelgarejo.pdf';
export default {
    data: () => ({
        anounce: {
            title: '', 
            message: 'Haz click aquí para ver y descargar nuestro brochure.'
        }
    }),
    methods: {
        donwloadBrochure() {
            let a = document.createElement('a');
            a.href = Brochure;
            /* a.download = "Brochure Elengy"; */
            document.body.appendChild(a);
            a.setAttribute('target', '_blank');
            a.click();
            document.body.removeChild(a);
            this.anounce.title = 'Gran elección!'
            this.anounce.message = ''
            document.getElementById('details-brochure').classList.add('animationMessageBrochure');
            setTimeout(() => {
                this.anounce.title = ''
                this.anounce.message = 'Haz click aquí para ver y descargar nuestro brochure.'
            }, 5000);
        },
        openChat() {
            /* document.getElementById('details-brochure').classList.remove('animationMessageBrochure'); */
            document.getElementById('details-brochure').classList.add('openedBrochure');
        },
        closeChat(){
            document.getElementById('details-brochure').classList.remove('openedBrochure');
        }
    }
}
</script>

<style>
.d-brochure-elengy {
    position: fixed;
    bottom: 5px;
    left: -100%;
    z-index: 100;
    transition: ease-in-out .5s;
}
.d-brochure-elengy.openBrochure {
    left: 0;
}

.details-brochure {
    /* background: #fff;
    background: rgb(22, 79, 117); */
    /* background: #212121; */
    background: #212530;
    color: rgba(255,255,255,.63);
    padding: 10px 5px;
    padding-right: 10px;
    position: absolute;
    bottom: 85px;
    left: 0;
    border-radius: 0px 10px 10px 0px;
    width: 280px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all ease-in-out .5s;
    /* transform: translateX(300px) scale(0); */
    opacity: 0;
    box-shadow: 12px 20px 30px 0px rgba(0,0,0,0.75);
}

.details-brochure::before{
  content: '';
  position: absolute;
  left: 16px;
  top: 100%;
  border-top: 20px solid #212530;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
}
.details-brochure span{
    text-align: center;
    font-size: 14px;
}

.row-message {
    display: flex;
    align-items: center;
}
.row-message .sect-img{
    display: flex;
    flex-flow: column nowrap;
}
.row-message .sect-img span{
    font-size: 10px;
    /* text-transform: uppercase; */
    padding-top: 5px;
}
.row-message img {
    max-width: 60px;
}
.row-message .title-message{
    font-size: 13px;
    letter-spacing: 1px;
    font-weight: 500;
    text-transform: uppercase;
}
.row-message .message {
    margin-left: 10px;
}
.row-message .message .message-c {
    padding-bottom: 0;
    font-size: 12px;
}

.details-brochure.animationMessageBrochure {
    opacity: 1;
    transform: translateX(-100%) scale(0);
}

.animationMessageBrochure {
    animation: messageBrochure ease-in-out 5s;
    -webkit-animation: messageBrochure ease-in-out 5s;
    -moz-animation: messageBrochure ease-in-out 5s;
}

.details-brochure.openedBrochure {
    opacity: 1;
    transform: translateX(0) scale(1);
}

/* .animationButtonBrochure {
    animation: messageBrochure ease-in-out 1s;
    -webkit-animation: messageBrochure ease-in-out 1s;
    -moz-animation: messageBrochure ease-in-out 1s;
} */

@keyframes messageBrochure {
    0% {
        transform: translateX(-100%) scale(0);
        opacity: 0;
    }
    20% {
        transform: translateX(0) scale(1);
        opacity: 1;
        
    }
    90% {
        transform: translateY(0) scale(1);
        opacity: 1;
        
    }
    100% {
        transform: translateX(-100%) scale(0);
        opacity: 0;
    }
}
</style>