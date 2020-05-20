import Vue from 'vue'
import VueLazyload from 'vue-lazyload'
import noImg from '../static/no-media.svg';

Vue.use(VueLazyload, {
    preLoad: 1.3,
    error: noImg,
    loading: noImg,
    attempt: 1
});