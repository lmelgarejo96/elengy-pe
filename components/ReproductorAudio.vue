<template>
  <div class="audio-rep-container">
      <audio id="audio-elengy" controls loop>
            <source src="../static/music/inspirator.mp3" type="audio/mpeg">
            Your browser does not support the audio element.
        </audio>
        <div class="player-controls">
            <!-- Play -->
            <v-btn v-if="isPlay===false" @click="playAudio()" class="mx-2 button-control" style="outline: none; background: #aa0000; width: 50px; height: 50px; text-align:center;" fab dark large color="purple">
                <v-icon dark>play_arrow</v-icon>
            </v-btn>
            <!-- PAUSE -->
            <v-btn v-else @click="pauseAudio()" class="mx-2 button-control" style="outline: none; background: #aa0000; width: 50px; height: 50px; text-align:center;" fab dark large color="purple">
                <v-icon dark>pause</v-icon>
            </v-btn>
            <!-- <v-slider :dark="false" color="primary" v-model="volume" min="0" max="6"></v-slider> -->
            <!-- <div>
                <div id="inputDiv">
                <div id="etiqueta"></div>
                <input id="volume-player" @change="cambiaVolumen()" type="range" value="20"  v-model="volume" min="0" max="100"  autocomplete="off">
            </div>
            </div> -->
            <!-- <input type="range"  id="volume-player"> -->
            
        </div>
  </div>
</template>

<script>
export default {
    /* props: {
        isPlay: Boolean
    } */
    data:() => ({
        isPlay: true,
        player: null,
        volume: 15,
    }),
    mounted() {
      try {
        this.player = document.getElementById('audio-elengy');
        /* this.stylesInput() */
      } catch (error) {}
    },
    methods: {
        playAudio(){
            this.player.play();
            this.isPlay = true;
        },
        pauseAudio(){
            this.player.pause();
            this.isPlay = false;
        },
        cambiaVolumen(){
            /* cambia el valor de la etiqueta (el tooltip) */
            let s = document.createElement('style');
            let elInput = document.querySelector("input[type='range']");
            let inputDiv = document.querySelector('#inputDiv');
            let w = parseInt(window.getComputedStyle(inputDiv, null).getPropertyValue("width"));
            let etiqueta = document.querySelector('#etiqueta');
            let inputMin = elInput.getAttribute('min');
            let inputMax = elInput.getAttribute('max');
            let ew = parseInt(window.getComputedStyle(etiqueta, null).getPropertyValue("width"));
            let k = w/(inputMax - inputMin);
            etiqueta.innerHTML =elInput.value;
            /* cambia la posición de la etiqueta (el tooltip) */
            etiqueta.style.left =  ((elInput.value * k) - (ew/2))+"px";
            /* cambia el estilo del TRACK */
            s.textContent ="input[type=range]::-webkit-slider-runnable-track{ background-image:-webkit-linear-gradient(left, HotPink "+elInput.value+"%,black "+elInput.value+"%)}"
            s.textContent +="input[type=range]::-moz-range-track{ background-image:-moz-linear-gradient(left, HotPink "+elInput.value+"%,black "+elInput.value+"%)}"
            const volumen = this.volume/100
            this.player.volume = volumen;
        },
        stylesInput(){
            let s = document.createElement('style');
            document.head.appendChild(s);

            let inputDiv = document.querySelector('#inputDiv');
            let w = parseInt(window.getComputedStyle(inputDiv, null).getPropertyValue("width"));
            /* EL INPUT */
            let elInput = document.querySelector("input[type='range']");
            elInput.style.width = w +"px";
            let inputMin = elInput.getAttribute('min');
            let inputMax = elInput.getAttribute('max');
            let k = w/(inputMax - inputMin);

            /* LA ETIQUETA */
            let etiqueta = document.querySelector('#etiqueta');
            let ew = parseInt(window.getComputedStyle(etiqueta, null).getPropertyValue("width"));


            /* el valor de la etiqueta (el tooltip) */
            etiqueta.innerHTML = elInput.value;
            /* calcula la posición inicial de la etiqueta (el tooltip) */
            etiqueta.style.left =  ((elInput.value * k) - (ew/2))+"px";
            /* establece el estilo inicial del TRACK */
            s.textContent ="input[type=range]::-webkit-slider-runnable-track{ background-image:-webkit-linear-gradient(left, HotPink "+elInput.value+"%,black "+elInput.value+"%)}"
            s.textContent +="input[type=range]::-moz-range-track{ background-image:-moz-linear-gradient(left, HotPink "+elInput.value+"%,black "+elInput.value+"%)}"


        }
    }

}
</script>

<style>
#audio-elengy {
    display: none;
}
#btn-play-audio, #btn-pause-audio {
    color: #fff;
}

.audio-rep-container {
    position: absolute;
    bottom: 15px;
    left: 5%;
}
.player-controls{
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    box-sizing: border-box;
}

.audio-rep-container .play,  .button-control, .player-controls input{
    z-index: 50;
    
}

.player-controls input{
    margin-top: 10px;
    width: 150px;
    cursor: pointer;
}
input[type='range'] {
  display: block;
}
input[type='range']:focus {
  outline: none;
}

#inputDiv {
  width: 150px;
  margin: 15px auto;
  position: relative;
}

#etiqueta {
  width: 30px;
  height: 26px;
  position: absolute;
  z-index: 9;
  background-color: HotPink;
  color: white;
  font-size: 12px;
  text-align: center;
  padding-top: 7px;
  top: -45px;
}

#etiqueta:after {
  content: "";
  display: block;
  width: 10px;
  height: 10px;
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
  z-index: 8;
  background-color: HotPink;
  position: relative;
  left: 9px;
  /*top:-1px;*/
}
/* 2 */

input[type='range'],
input[type='range']::-webkit-slider-runnable-track,
input[type='range']::-webkit-slider-thumb {
  -webkit-appearance: none;
}
/* 2.1 THUMB */

input[type=range]::-webkit-slider-thumb {
  background-color: #fff;
  width: 20px;
  height: 20px;
  border: 3px solid #333;
  border-radius: 50%;
  margin-top: -9px;
}

input[type=range]::-moz-range-thumb {
  background-color: #555;
  width: 15px;
  height: 15px;
  border: 3px solid #333;
  border-radius: 50%;
}

input[type=range]::-ms-thumb {
  background-color: #555;
  width: 20px;
  height: 20px;
  border: 3px solid #333;
  border-radius: 50%;
}
/* 2.2 TRACK */

input[type=range]::-webkit-slider-runnable-track {
  background-color: #fff;
  height: 3px;
}

input[type=range]:focus::-webkit-slider-runnable-track {
  outline: none;
}

input[type=range]::-moz-range-track {
  background-color: #555;
  height: 3px;
}

input[type=range]::-ms-track {
  background-color: #555;
  height: 3px;
}

input[type=range]::-ms-fill-lower {
  background-color: HotPink
}

input[type=range]::-ms-fill-upper {
  background-color: black;
}




</style>