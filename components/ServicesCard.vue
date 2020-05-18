<template>
 <!--  <div class="container">
      <div class="row"> -->
              <div class="col-lg-4 col-md-6 col-sm-12">
                  <a class="enlace-card" :href="service.redirectTo">
                    <div class="card-service">
                        <div class="container-img">
                            <img draggable="false" class="img-fluid" :src="service.img" alt="">
                        </div>
                        <div class="content-service">
                            <h3>{{service.name_service}}</h3>
                            <ul class="letters-service">
                                <div v-for="(item, index) in service.characteristics" :key="index+150">
                                    <li v-if="index>0 && index<2">{{item}}</li> 
                                    <li v-if="index===2">{{item}}..</li> 
                                </div>
                            </ul>
                            <a :href="service.redirectTo">
                                Ver completo
                                <span class="material-icons">
                                    keyboard_arrow_right
                                </span>
                            </a>
                        </div>
                    </div>
                  </a>
              </div>
      <!-- </div>
  </div> -->
</template>

<script>
export default {
    props: {
        service: Object
    }
}
</script>

<style>

.enlace-card a {
    text-decoration: none;
}
.enlace-card .card-service {
    width: 100%;
    background: #fff;
    display: inline-block;
    height: 100%;
    box-shadow: 0px 10px 30px 0px rgba(33, 20, 106, 0.1);
    border-radius: 3px;
    position: relative;
    box-sizing: border-box;
}

.enlace-card .card-service:hover img {
    transform: scale(1.14);
}

.container-img {
    max-height: 230px;
    overflow: hidden;
}

.container-img img {
    width: 100%;
    min-height: 243px;
    transition: all ease-in-out .8s;
    margin-top: -20%;
}


.enlace-card .card-service .content-service {
    padding: 8px 15px;
    padding-right: 25px;
    width: 100%; 
}
.enlace-card .card-service .content-service h3{
    font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
    color: #2d373c;
    font-size: 25px;
}

.enlace-card .card-service .content-service .letters-service{
    font-family: 'Raleway', "Helvetica Neue", Helvetica, sans-serif;
    font-size: .8rem;
    line-height: 1.5;
    margin-top: 0.8em;
    margin-bottom: 2.5em;
    letter-spacing: 1px;
    color: #2d373c;
    list-style-type: square;
    padding-left: 20px;
}

.enlace-card .card-service .content-service > a{
    position: absolute;
    bottom: 5px;
    right: 15px;
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    font-size: 15px;
    line-height: 5px;
    color: rgba(0, 0, 0, 0.6);
}
.enlace-card .card-service .content-service > a:hover{
    color: rgba(170, 0, 10, 0.9);
}
.enlace-card .card-service .content-service span{
    margin-left: 10px;
    font-weight: normal;
    font-size: 18px;
}

@media screen and (min-width: 1250px) { 
    .container-img {
        max-height: 280px;
    }
    .container-img img {
        min-height: 280px;
    }
}
@media screen and (max-width: 600px){
    .enlace-card .card-service .content-service h3{
        font-size: 20px;
    }
    .container-img {
        max-height: 250px;
    }

    .container-img img {
        width: 100%;
        min-height: 250px;
        margin-top: -20%;
    }
}

</style>