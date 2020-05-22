<template>
  <section id="contacto-elengy" class="contact-section">
    <div class="section-contact-bg">
      <div class="card-contact">
        <h2 class="section-intro__title">Contáctanos</h2>
        <v-container>
          <div class="errors">
            <div
              v-for="(error, index) in errors"
              :key="index"
              class="alert alert-warning alert-dismissible fade show"
            >
              <strong v-if="index===0">Hola!</strong>
              {{error.nameError}}
              <button
                @click="removeIndex(index)"
                style="outline: none;"
                type="button"
                class="close"
              >
                <span>&times;</span>
              </button>
            </div>
          </div>
          <form @submit.prevent="sendMessage">
            <v-row>
              <v-col cols="12" lg="6" sm="6" md="6">
                <v-text-field
                  name="nombres"
                  outlined
                  v-model="contact.nombres"
                  color="#21146a"
                  placeholder="Nombres*"
                  hint="Escriba sus nombres completos"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" lg="6" sm="6" md="6">
                <v-text-field
                  name="apellidos"
                  outlined
                  v-model="contact.apellidos"
                  color="#21146a"
                  placeholder="Apelllidos *"
                  hint="Escriba sus apellidos completos"
                ></v-text-field>
              </v-col>
              <v-col cols="12" lg="6" sm="6" md="6">
                <v-text-field
                  name="email"
                  outlined
                  placeholder="Email *"
                  type="email"
                  v-model="contact.email"
                  hint="Dejenos un correo de su uso para enviarle mayor información sobre nuestros servicios."
                  required
                  color="#21146a"
                ></v-text-field>
              </v-col>
              <v-col cols="12" lg="6" sm="6" md="6">
                <v-text-field
                  name="telefono"
                  outlined
                  placeholder="Telefono *"
                  v-model="contact.telefono"
                  hint="Dejenos un telefono de su uso para para ponernos en contacto lo más pronto posible."
                  required
                  v-mask="mask"
                  color="#21146a"
                ></v-text-field>
              </v-col>
              <v-col cols="12" lg="12" sm="12" md="12">
                <v-combobox
                  name="servicios"
                  light
                  item-color="#21146a"
                  :hide-selected="true"
                  placeholder="Servicio "
                  outlined
                  multiple
                  v-model="contact.servicios"
                  small-chips
                  :items="servicios"
                  hint="Puede elegir alguno(s) de nuestros servicios para ser más específicos."
                  color="#21146a"
                ></v-combobox>
              </v-col>
              <v-col cols="12">
                <v-textarea
                  color="#21146a"
                  :no-resize="true"
                  outlined
                  v-model="contact.mensaje"
                  name="mensaje"
                  placeholder="Detalles adicionales"
                  rows="4"
                  hint="Puedes dejarnos algunos detalles adicionales"
                ></v-textarea>
                <input type="text" style="display: none;" name="fecha" v-model="contact.fecha" />
              </v-col>
              <v-btn type="submit" class="ml-auto mr-2" color="#21146a" text>Enviar</v-btn>
            </v-row>
          </form>
        </v-container>
      </div>
    </div>
  </section>
</template>

<script>
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import { mask } from 'vue-the-mask'
export default {
  directives: {
      mask,
  },
  props: {
    /* contact: Object, */
    servicios: Array
  },
  data: () => ({
    contact: {
      nombres: "",
      apellidos: "",
      servicios: [],
      email: "",
      telefono: "",
      mensaje: "",
      fecha: ''
    },
     mask: '### ######',
    errors: []
  }),
  methods: {
    generateErrors() {
      const errors = [];
      try {
        if (this.contact.nombres.length === 0) {
          errors.push({
            nameError:
              "El campo nombre es requerido, por favor rellena el campo correspondiente."
          });
        }
        if (this.contact.apellidos.length === 0) {
          errors.push({
            nameError:
              "El campo apellido es requerido, por favor rellena ese campo."
          });
        }
        if (this.contact.email.length === 0) {
          errors.push({
            nameError:
              "Tu correo es un campo muy importante, por favor rellena ese campo."
          });
        }
        if (this.contact.telefono.length === 0) {
          errors.push({
            nameError:
              "Tu telefono es un campo muy importante, por favor rellena ese campo."
          });
        }
        if (errors.length > 0) {
          return errors;
        }
        return [];
      } catch (error) {}
    },
    sendMessage(e) {
      this.errors = [];
      const contacto = { ...this.contact };
      const errors = this.generateErrors();
      this.contact.fecha = new Date();
      if (errors.length === 0) {
        //indica que no hay errores
        emailjs
          .sendForm(
            "gmail",
            "template-elengy_sac",
            e.target,
            "user_rfa7y9EzPWhVy7U9KZGMa"
          )
          .then(
            result => {
                console.log("SUCCESS!", result.status, result.text);
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Gof Job!",
                    text: `Apenas recibamos su mensaje nos pondremos en contacto con usted ${contacto.nombres}.`
                    /* showConfirmButton: false,
                                timer: 3500 */
                });
                this.resetForm();
            },
            error => {
              console.log("FAILED...", error);
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Ocurrió un error con el envío, vueva a intentarlo más tarde!",
                showConfirmButton: false,
                timer: 2000
              });
            }
          );
        
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Rellena los campos requeridos!",
          showConfirmButton: false,
          timer: 2000
        });
        this.errors = errors;
      }
    },
    async sendEmailJS(e) {
      emailjs
        .sendForm("gmail", "YOUR_TEMPLATE_ID", e.target, "YOUR_USER_ID")
        .then(
          result => {
            console.log("SUCCESS!", result.status, result.text);
          },
          error => {
            console.log("FAILED...", error);
          }
        );
    },
    removeIndex(index) {
      this.errors.splice(index, 1);
    },
    resetForm() {
      this.errors = [];
      this.contact.nombres = "";
      this.contact.apellidos = "";
      this.contact.telefono = "";
      this.contact.email = "";
      this.contact.servicios = "";
      this.contact.mensaje = "";
      this.contact.fecha = ""
    }
  }
};
</script>

<style>
.contact-section {
  width: 100%;
  background: #faf9ff;
  padding-bottom: 60px;
  padding-top: 70px;
  overflow: hidden;
  /* box-sizing: border-box; */
}
.section-contact-bg {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* overflow: hidden; */
}

/* .section-contact-bg::before{
    position: absolute;
    content: '';
    pointer-events: none;
    left: -25%;
    width: 150%;
    height: 55%;
    background: inherit;
    -moz-transform: rotate(-3deg);
    -o-transform: rotate(-3deg);
    -ms-transform: rotate(-3deg);
    -webkit-transform: rotate(-3deg);
    transform: rotate(-3deg);
    z-index: 1;
    top: 0;
    -moz-transform-origin: 0 0;
    -o-transform-origin: 0 0;
    -ms-transform-origin: 0 0;
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;  
} */

.contact-section .card-contact {
  background: #fff;
  max-width: 960px;
  width: 80%;
  height: auto;
  z-index: 5;
  margin: 30px 0;
  box-shadow: 0px 10px 20px 0px rgba(33, 20, 106, 0.1);
  border-radius: 3px;
  padding: 30px;
}

.contact-section .card-contact:hover {
  box-shadow: 0px 10px 30px 0px rgba(33, 20, 106, 0.25);
}

@media screen and (max-width: 600px) {
  .contact-section .card-contact {
    width: 90%;
  }
  .contact-section .card-contact h2 {
    text-align: center;
  }
}

@media screen and (max-width: 500px) {
  .contact-section .card-contact {
    width: 96%;
  }
  .contact-section .card-contact {
    padding: 20px 5px;
  }
}

@media screen and (max-width: 350px) {
  .contact-section .card-contact {
    width: 100%;
  }
  .contact-section .card-contact {
    padding: 15px 5px;
  }
}

.theme--dark.v-list {
  background: #fff;
  color: #000 !important;
}

.theme--dark.v-list-item:not(.v-list-item--active):not(.v-list-item--disabled) {
  color: #000 !important;
}
</style>