<template>
  <div id="menu-responsive" class="menu-responsive animationOpen">
      
      <div class="title-menu">
          Engineering for the World
          <v-btn @click="closeMenu" id="btn-close" style="outline: none;" class="ma-2 btn-close"  large color="teal" icon>
                <v-icon color="#ffffff" style="font-weigth: bold;">mdi-close</v-icon>
            </v-btn>
      </div>
      <div class="enlaces-responsive">
          Gaaaaa
      </div>
  </div>
</template>

<script>
export default {
    methods: {
        closeMenu(){
            this.$emit('closeMenuResponsive', false);
            const menu = document.getElementById('menu-responsive');
            menu.style.top = '-100vh';
        }
    }
}
</script>

<style>
.menu-responsive{
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    background: rgba(0,0,0,.875);
    top: 0;
    left: 0;
    z-index: 100;
    transition: all ease-in-out .5s;
}
.enlaces-responsive {
    color: #fff;
}
.btn-close{
    position: absolute;
    margin-left: auto;
    top: 0;
    right: 10px;
    z-index: 100;
}

.title-menu {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 40px;
    text-align: center;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #000;
}

.animationOpen {
    animation-name: openMenu;
    animation-duration: 1s;
    animation-timing-function: ease-in-out;
}

@keyframes openMenu {
    from {
        transform: translateY(-100vh);
        opacity: 0;
    }
    to{
        transform: translateY(0);
        opacity: 1;
    }
}
</style>