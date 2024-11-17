<template>
  <swiper-slide class="viewed__card" >
    <div class="card__img">
      <img :src="card.img" alt="product">
    </div>
    <div class="card__main">
      <h2 class="card__title">{{ card.title }}</h2>
      <div class="card__description">{{ card.description }}</div>
    </div>
    <div class="card__prices">
      <div class="roubles">{{ card.priceMinRub }} ₽ – {{ card.priceMaxRub }} ₽</div>
      <div class="euros">{{ card.priceMinEur }} € – {{ card.priceMaxEur }} €</div>
    </div>
    <button class="more">Подробнее</button>
  </swiper-slide>
</template>

<script setup>
import { SwiperSlide } from 'swiper/vue';

const props = defineProps({
  card: Object,
})
</script>

<style scoped lang="scss">
li {
  list-style: none;
}
.viewed__card{
  padding: 25px;
  background-color: #F6F8FA;
  display: flex;
  flex-direction: column;
  height: 100%;
  color: #1F2432;
  width: 21% !important;
}
.card{
  &__main{
    margin-bottom: 60px;
    min-height: 100px;
  }
  &__img{
    margin-bottom: 5px;
    display: flex;
    justify-content: center;
  }
  &__title{
    font-size: 22px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  &__description{
    font-size: 14px;
  }
  &__prices{
    margin-bottom: 20px;
    .roubles {
      font-size: 22px;
      font-weight: bold;
      margin-bottom: 3px;
    }
    .euros{
      color: #797B86;
      font-size: 16px;
    }
  }
}
button {
  width: 100%;
  height: 52px;
  background-color: #0069B4;
  color: white;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 4px;
}


</style>