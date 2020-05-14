<template>
  <section id="descubre_mas" class="main-enlaces">
      <div class="bg-main-enlaces">
        <div class="container">
            <h4 class="title-main" data-aos="fade-up" data-aos-duration="1500">Conoce más <span>acerca de nosotros</span></h4>
            <div class="row">
                    <CardIndex v-for="(infoItem, index) in infoCards" :key="index+200" :cardData="infoItem"  data-aos="fade-up" data-aos-duration="1500" :data-aos-delay="(index+1)*200"/>
            </div>
        </div>
      </div>
  </section>
</template>

<script>
import CardIndex from '../components/CardsIndex';
import { mapState } from 'vuex'
export default {
    components: {
        CardIndex
    },
    data: () => ({
        /* infoCards: [] */
    }),
    computed: {
        ...mapState({
            infoCards: state => state.cardsInfo.allInfo,
        })
    },
    /* created(){
        this.infoCards = this.$store.state.cardsInfo.allInfo;
    } */
}
</script>

<style>
.main-enlaces {
    min-height: 100vh;
    /* max-height: 750px; */
    width: 100%;
    display: flex;
    align-items: center;
   /*  padding: 100px 0px; */
    /* background: #24293d; */
}
.main-enlaces .bg-main-enlaces{
    background: #3966c7;
    background: #24293d;
    width: 100%;
    flex: 1;
    padding: 4.5em 0;
    box-sizing: border-box;
    z-index: 5;
    position: relative;
    min-height: 50vh;
}

@media screen and (max-width: 1264px){
    .main-enlaces {
        min-height: auto;
    }
}
.main-enlaces .bg-main-enlaces::after{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    /* background: rgba(0,0,0,.3); */
    z-index: -1;
}
.main-enlaces .bg-main-enlaces h4{
    color: #fff!important;
    font-size: 1.75rem;
    font-weight: normal;
    letter-spacing: -0.05em;
}
.main-enlaces .bg-main-enlaces h4 > span{
    font-weight: bold;
}
.main-enlaces .bg-main-enlaces a{
    text-decoration: none;
}
.card-main-container {
    width: 100%;
    height: 100%;
}
.main-enlaces .bg-main-enlaces .card-main{
    width: 100%;
    height: 100%;
    border-radius: 40px 0px 40px 0px;
    padding: 40px 0px;
    padding-left: 30px;
    /* padding-right: 30px; */
    background: rgba(255,255,255,.4);
    display: flex;
    position: relative;
    color: rgba(255,255,255,.7);
    /* position: relative; */
    /* overflow: hidden; */
    transition: all ease-in-out .2s;
    overflow: hidden;
}

.main-enlaces .bg-main-enlaces .card-main:hover {
    box-shadow: 0px 10px 20px 0px rgba(255, 255, 255, 0.3);
}

.main-enlaces .bg-main-enlaces .card-main .description{
    flex: 2;
    letter-spacing: -0.01em;
}
.main-enlaces .bg-main-enlaces .card-main .description h5{
    font-size: 1.25rem;
    font-weight: bold;
    line-height: 1.2;
}

.main-enlaces .bg-main-enlaces .card-main .description .sub-content{
    font-size: 1rem;
    line-height: 1.5;
    font-weight: 500;
}

.main-enlaces .bg-main-enlaces .card-main .description a{
    color: #fff;
    text-transform: uppercase;
    font-family:  'Montserrat', Arial, Helvetica, sans-serif;
    font-weight: bold;
    font-size: .8rem;
    letter-spacing: 1px;
    transition: color ease-in-out .2s;
}

.main-enlaces .bg-main-enlaces .card-main .description a:hover{
    color: #24293d;
    font-weight: bold;
}

.main-enlaces .bg-main-enlaces .card-main .description a strong{
    margin-top: 1.2rem;
    display: flex;
    align-items: center;
}


.main-enlaces .bg-main-enlaces .card-main .description a i {
    font-size: 1rem;
    font-weight: bold;
    margin-left: 5px;
    padding-top: 1px;
}

.main-enlaces .bg-main-enlaces .card-main .img-desc{
    flex: 1;
    /* display: flex;
    align-items: flex-end; */
}

.main-enlaces .bg-main-enlaces .card-main .img-desc img{
    position: absolute;
    max-width: 100px;
    bottom: 0;
}

</style>