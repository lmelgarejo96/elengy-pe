<template>
  <div id="social-ads" class="social-container st-sticky-share-buttons">
    <div class="list-enlaces">
      <a v-for="(red, index) in datosE.socialItems"
        :key="index+2000"
        :href="red.href"
        target="_blank "
        class="st-btn text-white"
        :style="`background: ${red.bg}`"
      >
        <i :class="red.icon"></i>
      </a>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex';
export default {
  computed: {
    ...mapState({
        datosE: state => state.datosElengy.datos,
    })
  }
};
</script>

<style>
.list-enlaces {
    left: 0;
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    position: relative;
    left: 0;
}

.social-container {
    font-family: Helvetica Neue, Verdana, Helvetica, Arial, sans-serif;
    -webkit-transition: all 2s ease-in;
    transition: all 2s ease-in;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    position: fixed;
    opacity: 1;
    text-align: center;
    top: 36%;
    left: -100px;
    z-index: 99;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}

.social-container .st-btn {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-transition: all .2s ease-in;
    transition: all .2s ease-in;
    border: none;
    cursor: pointer;
    display: inline-block;
    font-size: NaNpx;
    height: 48px;
    line-height: 24px;
    margin-bottom: 0;
    opacity: 1;
    overflow: hidden;
    padding: 12px;
    position: relative;
    text-align: left;
    top: 0;
    left: 0;
    vertical-align: top;
    white-space: nowrap;
    width: 48px;
    text-align: center;
    overflow: hidden;
}

.social-container .st-btn>svg {
    -webkit-transition: all .2s ease-in;
    transition: all .2s ease-in;
    height: 24px;
    margin-left: 0;
    vertical-align: top;
    width: 24px;
}

.social-container>div {
    clear: left;
    float: left;
}

.social-container .st-toggle,
.st-sticky-share-buttons {
    -webkit-transition: all .2s ease-in;
    transition: all .2s ease-in;
}

.social-container .st-toggle {
    right: -48px;
    background: #ccc;
    border-bottom-left-radius: 0;
    color: #fff;
    cursor: pointer;
    font-size: 24px;
    line-height: 24px;
    position: relative;
    text-align: center;
    width: 48px;
}

.social-container a:hover svg {
    height: 1.2em;
}

.social-container .st-first {
    background-color: #3b5998;
}

.social-container .st-second {
    background-color: #448aff;
}

.social-container .st-third {
    background-color: #25d366;
}

.social-container .st-last {
    background: #0073B0;
}


.social-container .st-last i{
  font-size: 16px;
  transition: all ease-in-out .2s;
}

.social-container .st-last:hover i {
  font-size: 12px;
}
.social-container .list-enlaces .st-btn:hover{
  width: 60px;
}


@media screen and (max-width: 600px) {
    .social-container {
        display: none;
    }
}
</style>