<template>
  <section class="contact-section">
     
      <div class="section-contact-bg">
          <div class="card-contact" data-aos="fade-up" data-aos-duration="1500">
              <h2 class="section-intro__title ">Contáctanos</h2>
                  <v-container>
                      <div class="errors">
                          <div v-for="(error, index) in errors" :key="index" class="alert alert-warning  alert-dismissible fade show">
                            <strong v-if="index===0">Hola!</strong> {{error.nameError}}
                            <button @click="removeIndex(index)" style="outline: none;" type="button" class="close">
                                <span>&times;</span>
                            </button>
                           </div>
                      </div>
                    <form >
                    <v-row>
                    <v-col cols="12" lg="6" sm="6" md="6">
                        <v-text-field outlined v-model="contact.nombres"  color="#21146a" placeholder="Nombres*" hint="Escriba sus nombres completos" required></v-text-field>
                    </v-col>
                    <v-col cols="12" lg="6" sm="6" md="6">
                        <v-text-field outlined v-model="contact.apellidos"  color="#21146a" placeholder="Apelllidos *" hint="Escriba sus apellidos completos"></v-text-field>
                    </v-col>
                    <v-col cols="12" lg="6" sm="6" md="6">
                        <v-text-field 
                        outlined
                        placeholder="Email *"
                        v-model="contact.email"
                        hint="Dejenos un correo de su uso para enviarle mayor información sobre nuestros servicios."
                        required color="#21146a"
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" lg="6" sm="6" md="6">
                        <v-text-field 
                        outlined
                        placeholder="Telefono *"
                        v-model="contact.telefono"
                        hint="Dejenos un telefono de su uso para para ponernos en contacto lo más pronto posible."
                        required color="#21146a"
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" lg="12" sm="12" md="12">
                        <v-combobox 
                            light
                            item-color="#21146a"
                            :hide-selected="true"
                            placeholder="Servicio "
                            outlined
                            multiple
                            v-model="contact.servicio"
                            small-chips
                            :items="servicios"
                            hint="Puede elegir alguno(s) de nuestros servicios para ser más específicos."
                            required color="#21146a"
                        ></v-combobox>
                    </v-col>
                    <v-col cols="12">
                        <v-textarea color="#21146a"
                        
                        :no-resize="true"
                        outlined
                        v-model="contact.descripcion"
                        name="input-7-1"
                        placeholder="Detalles adicionales"
                        rows="4"
                        hint="Puedes dejarnos algunos detalles adicionales"
                        ></v-textarea>
                    </v-col>
                    <v-btn class="ml-auto mr-2" color="#21146a" text @click="sendMessage">Enviar</v-btn>
                    </v-row>
                </form>
                </v-container>
          </div>
      </div>
  </section>
</template>

<script>
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';

export default {
    data: () => ({
        contact: {
            nombres: '',
            apellidos: '',
            servicios: [],
            email: '',
            telefono: '',
            descripcion: ''
        },
        servicios: [
            'Obras electromecánicas',
            'Ingeniería secundaria y protecciones',
            'Redes, comunicaciones y fibra óptica',
            'Estudios Eléctricos en AT, MT y BT.'
        ],
        errors: []
    }),
    methods: {
        generateErrors(){
            const errors = [];
            try {
                    if(this.contact.nombres.length === 0){
                        errors.push({
                            nameError: 'El campo nombre es requerido, por favor rellena el campo correspondiente por favor.'
                        });
                    }
                    if(this.contact.apellidos.length === 0){
                        errors.push({
                            nameError: 'El campo apellido es requerido, por favor rellena ese campo.'
                        });
                    }
                    if(this.contact.email.length === 0){
                        errors.push({
                            nameError: 'Tu correo es un campo muy importante, por favor rellena ese campo.'
                        });
                    }
                    if(this.contact.telefono.length === 0){
                        errors.push({
                            nameError: 'Tu telefono es un campo muy importante, por favor rellena ese campo.'
                        });
                    }
                    if(errors.length>0){
                        return errors;
                    }
                    return [];
            } catch (error) {}
        },
        sendMessage(){
            this.errors = [];
            const contacto = this.contact;
            const errors = this.generateErrors();
            if(errors.length === 0){ //indica que no hay errores
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Gof Job!',
                    text: `Apenas recibamos su mensaje nos pondremos en contacto con usted ${contacto.nombres}.`,
                    /* showConfirmButton: false,
                    timer: 3500 */
                });
                this.errors = [];
                this.contact.nombres = '';
                this.contact.apellidos = '';
                this.contact.telefono = '';
                this.contact.email = '';
                this.contact.servicios = '';
                this.contact.descripcion = '';
            }else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Rellena los campos requeridos!',
                    showConfirmButton: false,
                    timer: 2000
                });
                this.errors = errors;
            }
        },
        removeIndex(index){
            this.errors.splice(index, 1);
        }
    }
}
</script>

<style>
.contact-section {
    width: 100vw;
    background: #faf9ff;
    padding-bottom: 60px;
    padding-top: 60px;
    overflow: hidden;
}
.section-contact-bg{
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

@media screen and (max-width: 600px){
    .contact-section .card-contact {
        width: 90%;
    }
    .contact-section .card-contact h2 {
        text-align: center;
    }
}

@media screen and (max-width: 500px){
    .contact-section .card-contact {
        padding: 20px 10px;
    }
}

@media screen and (max-width: 350px){
    .contact-section .card-contact {
        padding: 20px 5px;
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