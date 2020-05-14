<template>
  <div data-app>
      <ListaBlog/>
  </div>
</template>

<script>
import ListaBlog from '../../components/NovedadesEventos';
export default {
  components: {
      ListaBlog
  }
}
</script>

<style>
body,
html {
    scroll-behavior: smooth;
    box-sizing: border-box;
    /* overflow: hidden; */
}

body::-webkit-scrollbar {
    width: .7em;
}
body::-webkit-scrollbar-thumb {
    background-color: #BA0F22;
    outline: 1px solid slategrey
}

section {
    min-height: 30vh;
    width: 100%;
    scroll-snap-align: center;
}

.section-margin {
    margin: 60px 0;
}

.section-margin-2 {
  margin: 50px 0;
}

@media (min-width: 1000px) {
    .section-margin {
        margin: 100px 0
    }
    .section-margin-2 {
        margin: 80px 0
    }
}

@media (min-width: 1200px) {
    .section-margin {
        margin: 135px 0
    }
    .section-margin-2 {
        margin: 80px 0
    }
}

.section-margin--medium {
    margin: 40px 0
}

@media (min-width: 800px) {
    .section-margin--medium {
        margin: 80px 0
    }
}

@media (min-width: 1200px) {
    .section-margin--medium {
        margin: 120px 0
    }
}


.section-padding {
    padding: 60px 0
}

</style>