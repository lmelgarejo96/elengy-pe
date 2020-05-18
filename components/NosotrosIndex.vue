<template>
  <section id="nosotros" class="nosotros-section">
    <div class="bg-nosotros-section">

      <div class="container">
        <div class="row no-gutters align-items-center">
          <div class="col-md-5 mb-4 mb-md-0 pr-2 pl-3">
            <div class="about__content">
              <h2 data-aos="fade-up" data-aos-duration="1500">¿Quiénes somos?</h2>
              <p data-aos="fade-up" data-aos-duration="1500">
                ELENGY es una empresa, con sede central en Lima (Perú) y filial en Santiago (Chile), que cuenta con alto potencial humano especializado en planeamiento, administración y ejecución de proyectos electromecánicos y de telecomunicaciones.
                Contamos con especialistas en subestaciones de media, alta y extra alta tensión, desarrollamos ingeniería, estudios, sistemas de control y protección.
              </p>
              <!-- <a class="button button-light" href="/nosotros" data-aos="fade-up" data-aos-duration="1500">Leer más</a> -->
              <p
                class="btn-modal-video d-flex align-items-center"
                data-aos="fade-up"
                data-aos-duration="1500"
              ></p>
              <div class="d-flex align-items-center">
                <button id="button-video" @click.stop="openVideo" class="play-btn mr-3 mb-2">
                  <i class="fa fa-play text-white"></i>
                </button>
                <span class="small ml-1" >Ver video</span>
              </div>
            </div>
          </div>
          <div class="col-md-7">
            <div class="about__img" data-aos="fade-up" data-aos-duration="1500">
              <div class="img-about-container">
                <img
                  draggable="false"
                  class="img-fluid"
                  src="../static/team-elengy.jpg"
                  alt
                  data-aos="fade-up"
                  data-aos-duration="1500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Dialog video -->
      <v-dialog
        light
        overlay-color="rgba(0,0,0,.88)"
        :overlay-opacity="1"
        v-model="dialogNosotros"
        max-width="700"
        persistent
      >
        <div>
          <div class="w-100">
            <div class="contenedor-btn-close">
              <button
                class="button-close-video mb-1"
                @click="closeVideo"
                style="outline: none;"
                dark
                icon
              >
                <i class="material-icons">close</i>
              </button>
            </div>
          </div>
          <div class="video-container">
            <video
              id="video-elengy"
              controls
              autoplay
              controlslist="nodownload"
              src="../static/video/elengy.mp4"
            ></video>
          </div>
        </div>
      </v-dialog>
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
    dialogNosotros: false
  }),
  mounted() {},
  methods: {
    openVideo() {
      try {
        const btn = document.getElementById('button-video');
        this.dialogNosotros = true;
      } catch (error) {}
    },
    closeVideo() {
      document.getElementById("video-elengy").pause();
      this.dialogNosotros = false;
    }
  }
};
</script>

<style>
.nosotros-section {
  width: 100%;
  padding-top: 100px;
  overflow: hidden;
  box-sizing: border-box;
}
.bg-nosotros-section {
  padding: 50px 0;
  background: #faf9ff;
  width: 100%;
}
.about__content h2 {
  margin-bottom: 20px;
  text-align: left;
}

.about__content p {
  color: #797979;
  font-family: "Roboto", sans-serif;
  margin-bottom: 15px;
  font-size: 15px;
  font-weight: 400;
  line-height: 1.667;
  text-align: left;
}
.about__content a {
  text-decoration: none;

}

@media screen and (max-width: 768px){
  .nosotros-section {
    padding-top: 0;
  }
  .bg-nosotros-section {
    padding: 70px 0px;
  }
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
  /* color: #21146a; */
  color: #3a414e;
  transition: all 0.4s ease;
}

.button-light {
  background-color: transparent;
  border-color: #ba0f22;
}

.button-light:hover {
  background-color: #ba0f22;
  color: #fff;
}

.img-about-container {
  position: relative;
  margin: 0 1em;
  background: #faf9ff;
  box-shadow: 0px 0px 30px -4px rgba(0, 0, 0, 0.3);
}
.img-about-container img {
  position: relative;
  z-index: 2;
}
.img-about-container::before {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  bottom: -10px;
  right: -10px;
  background: #000;
  box-sizing: border-box;
}

.nosotros-section .play-btn {
  display: inline-block;
  width: 60px;
  height: 60px;
  position: relative;
  border-radius: 50%;
  /* border: 1px solid #2e4369;; */
  background: #374f7a;
  transition: color ease-in-out 0.2s;
  cursor: pointer;
  z-index: 10;
  outline: none;
}

.nosotros-section .play-btn:hover {
  background: #2e4369;
}

.nosotros-section .play-btn i {
  position: absolute;
  color: #fff;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-40%, -50%);
  -ms-transform: translate(-40%, -50%);
  transform: translate(-40%, -50%);
}

.nosotros-section span {
  display: flex;
  align-items: center;
  color: rgb(122, 120, 120);
}

.nosotros-section .video-container {
  width: 100%;
  height: 100%;
  z-index: 300;
  background: #000;
}
.video-container video {
  width: 100%;
  height: 100%;
  outline: none;
  margin-bottom: 0;
  /* border-bottom: 1px solid #000; */
  padding-bottom: 0;
}

.v-card {
  border-bottom: 0;
  padding-bottom: 0;
}

.contenedor-btn-close {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 18px;
}

.button-close-video {
  background: none;
  outline: none;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  /* background: #000; */
}
.button-close-video i {
  font-size: 28px;
}
@media screen and (max-width: 1000px) {
  .button-close-video {
    right: 1%;
    top: 1%;
  }
}
</style>