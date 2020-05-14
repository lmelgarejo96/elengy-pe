<template>
  <v-card>
        <v-card-title
          class="headline grey lighten-2"
          primary-title
        >
          {{servicio.name_service}}
          <v-spacer></v-spacer>
          <v-btn
            icon
            light
            @click="closeModal"
            style="outline:none;"
        >
            <v-icon>mdi-close</v-icon>
        </v-btn>
        </v-card-title>

        <v-card-text>
         <p>- Montaje electromecánico, pruebas primarias y puesta en servicio de subestaciones y plantas de generación, incluyendo: Equipo de alta tensión, Transformadores, Tratamiento de aceite dieléctrico, Seccionadores, Interruptores de potencia, sistemas de servicios auxiliares, sistemas de regulación y sistemas de control, medida y protección.</p>
         <p>- Montaje electromecánico, pruebas primarias y puesta en servicio de subestaciones y plantas de generación, incluyendo: Equipo de alta tensión, Transformadores, Tratamiento de aceite dieléctrico, Seccionadores, Interruptores de potencia, sistemas de servicios auxiliares, sistemas de regulación y sistemas de control, medida y protección.</p>
         <p>- Montaje electromecánico, pruebas primarias y puesta en servicio de subestaciones y plantas de generación, incluyendo: Equipo de alta tensión, Transformadores, Tratamiento de aceite dieléctrico, Seccionadores, Interruptores de potencia, sistemas de servicios auxiliares, sistemas de regulación y sistemas de control, medida y protección.</p>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="closeModal"
          >
            I accept
          </v-btn>
        </v-card-actions>
      </v-card>
</template>

<script>
export default {
    props: {
        servicio: Object
    },
    methods: {
        closeModal(){
            this.$emit('closeModal', false)
        }
    }
}
</script>

<style>

</style>