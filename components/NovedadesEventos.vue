<template>
  <!-- <section id="novedades-elengy" class="novedades-elengy section-padding">
      <div class="container">
          <h1 class="mb-1">Novedades</h1>
          <div class="row contenedor-cards">
              
              <div class="col-lg-4 col-md-4 col-sm-12">
                 
                    <div class="card-novedad">
                        <div class="container-img">
                            <img class="img-fluid" src="../static/4.jpg" alt="">
                        </div>
                        <div class="content-novedad">
                            <h3>Elengy presente en la lucha contra el Covid</h3>
                            <div class="letters-novedad">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum fugiat animi perspiciatis, exercitationem culpa cumque.</div>
                            <a href="#">
                                Leer más
                                <span class="material-icons">
                                    keyboard_arrow_right
                                </span>
                            </a>
                        </div>
                    </div>
                  
              </div>

              <div class="col-lg-4 col-md-4 col-sm-12">
                  
                    <div class="card-novedad">
                        <div class="container-img">
                            <img class="img-fluid" src="../static/ingenieriasecyprotecciones.jpg" alt="">
                        </div>
                        <div class="content-novedad">
                            <h3>Elengy presente en la lucha contra el Covid</h3>
                            <div class="letters-novedad">Lorem ipsum dolor Lorem ipsum dolor sit amet. sit amet consectetur adipisicing elit. Harum fugiat animi perspiciatis, exercitationem culpa cumque.</div>
                            <a href="#">
                                Leer más
                                <span class="material-icons">
                                    keyboard_arrow_right
                                </span>
                            </a>
                        </div>
                    </div>
                  
              </div>


          </div>
      </div>
  </section> -->
    <section class="blog_area novedades-elengy">
      <div class="container">
          <div class="row">
              <div class="col-lg-8">

                  <div class="blog_left_sidebar">
                      <article class="row blog_item">
                          <div class="col-md-3">
                              <div class="blog_info text-right">
                                  <!-- <div class="post_tag">
                                      <a href="#">Tecnología</a>
                                      <a class="active" href="#">Technology,</a>
                                      <a href="#">Politics,</a>
                                      <a href="#">Lifestyle</a>
                                  </div> -->
                                  <ul class="blog_meta list">
                                      <li>
                                          <a href="#">Elengy SAC
                                              <i class="fas fa-users"></i>
                                          </a>
                                      </li>
                                      <li>
                                          <a href="#">12 Dec, 2017
                                              <i class="fas fa-calendar-alt"></i>
                                          </a>
                                      </li>
                                      <li>
                                          <a href="#">Lima, Perú
                                              <i class="fas fa-map-marker-alt"></i>
                                          </a>
                                      </li>
                                      <!-- <li>
                                          <a href="#">06 Comments
                                              <i class="lnr lnr-bubble"></i>
                                          </a>
                                      </li> -->
                                  </ul>
                              </div>
                          </div>
                          <div class="col-md-9">
                              <div class="blog_post">
                                  <div class="container-img">
                                    <img draggable="false" src="../static/bg/elengy-desinfection.jpg" alt="">
                                  </div>
                                  <div class="blog_details">
                                      <a href="/">
                                          <h2>Elengy presente en la lucha contra el Covid 19</h2>
                                      </a>
                                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, sed veniam. Quasi culpa labore sed repellendus ipsam nisi libero, natus vitae dicta delectus, recusandae quam quibusdam nobis accusamus possimus saepe.</p>
                                      <a class="button button-blog" href="/">Ver más</a>
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
export default {

}
</script>

<style>
.novedades-elengy {
    background: #fff;
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
    color: #3a414e;
    font-weight: 600;
    transition: all 0.3s linear
}

.blog_details h2:hover {
    color: #21146a
}

.blog_details p {
    margin-bottom: 26px;
    margin-right: 10px;
    color: rgba(0,0,0,0.7);
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
</style>