<template>

    <section class="blog_area novedades-elengy">
      <div class="container pb-3">
          <div class="row">
              <div class="col-lg-8">

                  <div v-for="(post, index) in posts" :key="index" class="blog_left_sidebar" data-aos="fade-up" data-aos-duration="1500">
                      <article class="row blog_item">
                          <div class="col-md-3">
                              <div class="blog_info text-right">
                                  <ul class="blog_meta list">
                                      <li>
                                          <a href="#">{{post.author.names}}
                                              <i class="fas fa-users"></i>
                                          </a>
                                      </li>
                                      <li>
                                          <a href="#">{{post.date}}
                                              <i class="fas fa-calendar-alt"></i>
                                          </a>
                                      </li>
                                      <li>
                                          <a href="#">{{post.location}}
                                              <i class="fas fa-map-marker-alt"></i>
                                          </a>
                                      </li>
                                  </ul>
                              </div>
                          </div>
                          <div class="col-md-9">
                              <div class="blog_post">
                                  <div class="container-img">
                                    <img draggable="false" v-lazy="post.portada" :alt="post.title">
                                  </div>
                                  <ul class="blog_meta list meta-2">
                                        <li>
                                            <a href="#">
                                              <i class="fas fa-calendar-alt"></i>
                                                {{post.date}}
                                          </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i class="fas fa-map-marker-alt"></i>
                                                {{post.location}}
                                            </a>
                                        </li>
                                      </ul>
                                  <div class="blog_details">
                                        <h2>{{post.title}}</h2>
                                      <p>{{post.shortDescription}}...</p>
                                      <button @click="openPost(post)" class="button button-blog">Ver más</button>
                                  </div>
                              </div>
                          </div>
                      </article>
                  </div>

              </div>
          </div>
      </div>

    </section>
</template>

<script>
import img1 from '../static/posts/elengy-covid.jpg';
import img2 from '../static/posts/elengy-covid1.jpg';
import img3 from '../static/posts/elengy-covid2.jpg';
import milpo1 from '../static/posts/sub_estacion_milpo_2019-09-15.webp';
import logo from '../static/logo.svg';
import videoElengyCovid from '../static/posts/elengy-covid.mp4';
import videoElengyCovid2 from '../static/posts/elengy-covid2.mp4';
export default {
    data: () => ({
        posts: [
            {
                title: 'Elengy presente en la lucha contra el Covid 19',
                author: {
                    names: 'ELENGY SAC',
                    img: logo
                },
                description: 'Nuestra cabina de desinfeccion con el nebulizado correcto evitando mojar a la persona, usando acido hipocloroso (Aprobado por la EPA contra el covid), no daña las vias respiratorias ni irrita los ojos.<br/><br/>Está automatizada con activacion por sensor de movimiento y con fluorescente para su uso hasta de madrugada. <br/><br/> ELENGY Ingenieria para El Mundo!',
                shortDescription: 'Nuestra cabina de desinfeccion con el nebulizado correcto evitando mojar a la persona, usando acido hipocloroso (Aprobado por la EPA contra el covid), no daña las vias respiratorias ni irrita los ojos',
                date: '23 Abr, 2020',
                location: 'Lima, Perú',
                portada: img1,
                media: [
                    {
                        type: 'img',
                        uri: img1,
                    },
                    {
                        type: 'img',
                        uri: img2,
                    },
                    {
                        type: 'img',
                        uri: img3
                    },
                    {
                        type: 'mp4',
                        uri: videoElengyCovid
                    },
                    {
                        type: 'mp4',
                        uri: videoElengyCovid2
                    },
                   /*  {
                        uri: 'http://img-ys011.didistatic.com/static/didiglobal/do1_pcUZZjSG7vFlMbdr8fA6',
                        type: 'mp4'
                    } */
                    
                ],
            },
            {
                title: 'Elengy realizando obras electromecánicas en la subestación Milpo',
                author: {
                    names: 'ELENGY SAC',
                    img: logo
                },
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, sed veniam. Quasi culpa labore sed repellendus ipsam nisi libero, natus vitae dicta delectus, recusandae quam quibusdam nobis accusamus possimus saepe. Consectetur adipisicing elit. Odio, sed veniam. <br/><br/> Quasi culpa labore sed repellendus ipsam nisi libero, natus vitae dicta delectus, recusandae quam quibusdam nobis accusamus possimus saepe.',
                shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, sed veniam. Quasi culpa labore sed repellendus ipsam nisi libero.',
                date: '15 Sep, 2019',
                location: 'Puno, Perú',
                portada: milpo1,
                media: [
                    {
                        type: 'img',
                        uri: milpo1
                    }
                ],
            },
        ],
        /* post:  */
    }),
    methods: {
        openPost(post){
            this.$emit('openLightbox', post);
        }
    }
}
</script>

<style>
.novedades-elengy {
    background: #fff;
    padding-top: 130px;
}

@media screen and (max-width: 600px){
    .novedades-elengy {
        padding-top: 70px;
    }
}

/* .novedades-elengy>.container {
    background: #faf9ff;
} */
.novedades-elengy a {
    text-decoration: none;
}

/* .novedades-elengy .enlace-card {
    display: flex;
} */

.row.contenedor-cards {
    display: flex;
    flex-wrap: wrap;
}
.row.contenedor-cards > .col-lg-4 {
    display: flex; 
    flex-wrap: wrap;
}

 .card-novedad {
    background: #faf9ff;
    height: 100%;
    box-shadow: 0px 10px 30px 0px rgba(33, 20, 106, 0.1);
    border-radius: 3px;
    position: relative;
}


 .card-novedad:hover img {
    transform: scale(1.15);
}




 .card-novedad .content-novedad {
    padding: 8px 15px;
    padding-right: 25px; 
}
 .card-novedad .content-novedad h3{
    font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
    color: #2d373c;
    font-size: 25px;
}

 .card-novedad .content-novedad .letters-novedad{
    font-family: 'Raleway', "Helvetica Neue", Helvetica, sans-serif;
    font-size: .89rem;
    line-height: 1.5;
    margin-top: 0.8em;
    margin-bottom: 2.5em;
    letter-spacing: 1px;
    color: #2d373c;
}

 .card-novedad .content-novedad > a{
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
 .card-novedad .content-novedad > a:hover{
    color: rgba(170, 0, 10, 0.9);
}
 .card-novedad .content-novedad span{
    margin-left: 10px;
    font-weight: normal;
    font-size: 18px;
}


/* blog */
.container-img {
    max-height: 300px;
    position: relative;
    overflow: hidden;
    transition: all ease-in-out 1s;
}
.container-img::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(22,123,177,.22), rgba(0, 0, 0, 0.2));
    transition: all ease-in-out 1s;
}

.container-img img {
    min-height: 200px;
    transition: all ease-in-out .6s;
    width: 100%;
}

.blog_post:hover .container-img img{
    transform: scale(1.1);
}

.blog_post:hover .container-img::after {
    background: linear-gradient(rgba(22,123,177,.24), rgba(0, 0, 0, 0.25));
    height: 100%;
}

.blog_item {
    margin-bottom: 40px
}

.blog_info {
    padding-top: 30px
}

.blog_info .post_tag {
    padding-bottom: 20px
}

.blog_info .post_tag a {
    color: #3a414e;
    font-size: 14px
}

.blog_info .post_tag a.active {
    color: #21146a
}

.blog_info .blog_meta {
    list-style: none;
}

.blog_info .blog_meta li a {
    color: #777777;
    vertical-align: middle;
    padding-bottom: 10px;
    display: inline-block;
    font-size: 14px
}

.blog_info .blog_meta li a i {
    /* color: #3a414e; */
    font-size: 16px;
    font-weight: 600;
    padding-left: 15px;
    line-height: 20px;
    vertical-align: middle
}

.blog_info .blog_meta li a:hover {
    color: #21146a
}

.blog_post img {
    max-width: 100%
}

.blog_details {
    padding-top: 20px
}

.blog_details h2 {
    font-size: 24px;
    line-height: 36px;
    color: #2a3549;
    font-weight: 600;
    transition: all 0.3s linear
}

.blog_details h2:hover {
    color: #21146a
}

.blog_details p {
    margin-bottom: 26px;
    margin-right: 10px;
    font-size: .95rem;
    font-weight: 300;
    font-family: 'Roboto', "Helvetica Neue", Helvetica, sans-serif;
    color: rgba(0,0,0,.9);
}

.view_btn {
    font-size: 14px;
    line-height: 36px;
    display: inline-block;
    color: #3a414e;
    font-weight: 500;
    padding: 0px 30px;
    background: #fff
}

.button {
    display: inline-block;
    border: 1px solid transparent;
    text-transform: capitalize;
    font-size: 15px;
    font-weight: 500;
    padding: 10px 24px;
    border-radius: 30px;
    background-color: #fff;
    color: #21146a;
    color: #3a414e;
    transition: all .4s ease;
     border: 1px solid rgba(170, 0, 10, 1);;
}
.button-blog {
    border: 1px solid rgba(170, 0, 10, 1);;
    border-radius: 4px;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 500;
    color: #222222;
    padding: 7px 30px
}

.button-blog:hover {
    background-color: rgba(170, 0, 10, 1);
    color: #fff
}

.meta-2 {
    display: none;
    list-style: none;
}

@media screen and (max-width: 767px){
    .blog_item .col-md-3 {
        padding-bottom: 0;
    }
    .blog_meta {
        display: flex;
        flex-flow: column nowrap;
        justify-content: space-between;
        margin-bottom: 0;
        text-align: left;
    }
    .blog_meta  li a:last-child{
        padding-bottom: 3px;
    }
    .blog_info  .blog_meta li:nth-child(2), .blog_info  .blog_meta li:last-child{
        display: none;
    }
    .meta-2 {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        padding-top: 5px;
    }
     .meta-2 li a{
         color: rgba(0,0,0,0.7);
         text-decoration: none;
     }
     .blog_details {
         padding-top: 15px;
     }
     .blog_info {
         padding-top: 0;
     }
    
}
@media screen and (max-width: 575px){
    .blog_left_sidebar article {
        border-top: 1px solid #faf9ff;
        border-bottom: 1px solid #faf9ff;
        padding: 10px 0px;
        box-sizing: border-box;
        background: #fff;
    }
    .novedades-elengy{
        background: #faf9ff;
    }
}


</style>