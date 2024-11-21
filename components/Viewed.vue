<template>
  <section class="viewed">
    <div class="viewed__header">
      <h2 class="viewed__title">Просмотренные товары</h2>
      <div class="viewed__navigation">
        <button class="previous" @click="countPages(store, 'active', swiper)">
          <img src="assets/previous.svg" alt="previous" />
        </button>
        <div class="pagination">
          <span class="active">{{activePage}}</span> / <span class="total">{{ totalPages }}</span>
        </div>
        <button class="next" @click="countPages(store, 'next', swiper)">
          <img src="assets/next.svg" alt="next" />
        </button>
      </div>
    </div>
    <div class="viewed__slider" v-if="isLoading">
      Идет загрузка...
    </div>
    <swiper-container
        v-else
        :modules="modules"
        :space-between="20"
        :slides-per-view="1"
        :slides-per-group="1"

        :navigation="{
          prevEl: '.previous',
          nextEl: '.next',
        }"
        :pagination="{
          el: '.pagination',
          type: 'fraction',
          currentClass: 'active',
          totalClass: 'total'
        }"
        :breakpoints="{
          560: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
          900: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
          1200: {
            slidesPerView: 4,
            slidesPerGroup: 4,
          },
        }"
        class="viewed__slider"
    >
      <ViewedCard :card="card" v-for="card in viewedCards" :key="card.id" :id="card.id" />
    </swiper-container>
  </section>
</template>

<script setup>
import {onMounted} from "vue";
import useStore from "../stores/main.js";
import Swiper from 'swiper';
import { Navigation, Pagination, Grid } from 'swiper/modules';
import 'swiper/css';

import { register } from 'swiper/element/bundle';

const store = useStore();
const {viewedCards, isLoading, activePage, totalPages} = storeToRefs(store)
register();

onMounted(async () => {
  await store.getViewedCards();

  const swiper = new Swiper('.swiper', {
    modules: [Navigation, Pagination, Grid],
  });

})

</script>

<style  lang="scss">
.viewed{
  &__header{
    margin-bottom: 50px;
    color: #1F2432;
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
  &__title{
    font-size: 30px;
  }
  &__navigation{
    width: 11%;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    button{
      background-color: #90A2B5;
      border-radius: 50%;
      color: white;
      width: 50px;
      height: 50px;
      border: none;
    }
    .pagination{
      color: #797B86;
      font-size: 18px;
      span.active{
        font-size: 24px;
        color: #212121;
      }
    }
  }
  &__slider{
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    min-height: 500px;
  }
}
span.active {

}
@media(max-width: 1600px){
  .viewed__navigation{
    width: 15%;
  }
}

@media(max-width: 1200px){
  .viewed__navigation{
    width: 20%;
  }
}
@media(max-width: 900px){
  .viewed__navigation{
    width: 25%;
  }
}

@media(max-width: 700px){
  .viewed__navigation{
    width: 30%;
  }
}

@media(max-width: 700px){
  .viewed__title{
    font-size: 25px;
  }
  .viewed__navigation button {
    width: 35px;
    height: 35px;
  }
}

@media (max-width: 450px) {
  .viewed__header{
    align-items: center;
  }
  .viewed__navigation{
    width: 40%;
  }
}

@media (max-width: 395px) {
  .viewed__navigation{
    width: 50%;
  }
  .viewed__title{
    font-size: 20px;
  }
}

@media (max-width: 325px) {
  .viewed__navigation button {
    width: 30px;
    height: 30px;
  }
}
</style>