<template>
  <div class="col-lg-4 col-md-6 col-sm-12">
    <div class="card-main-container">
      <div class="card-main">
        <div class="description">
          <h5>{{cardData.title}}</h5>
          <div
            class="sub-content"
          >{{cardData.description}}</div>
          <a :href="cardData.redirectTo">
            <strong>
              Descubre más aquí
              <i class="fas fa-angle-right"></i>
            </strong>
          </a>
        </div>
        <div class="img-desc">
          <img draggable="false" class="img-fluid" :src="cardData.img" alt />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        cardData: Object
    }
};
</script>

<style>
</style>