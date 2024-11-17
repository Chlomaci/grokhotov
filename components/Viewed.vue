<template>
  <section class="viewed">
    <div class="viewed__header">
      <h2 class="viewed__title">Просмотренные товары</h2>
      <div class="viewed__navigation">
        <button class="previous" @click="countPages(store, 'active')">
          <img src="assets/previous.svg" alt="previous" />
        </button>
        <div class="pagination">
          <span class="active">{{store.activePage}}</span> / {{ Math.ceil(store.viewedCards.length / 4) }}
        </div>
        <button class="next" @click="countPages(store, 'next')">
          <img src="assets/next.svg" alt="next" />
        </button>
      </div>
    </div>
    <div class="viewed__slider" v-if="store.isLoading">
      Идет загрузка...
    </div>
    <swiper-container
        v-else
        :space-between="20"
        :slides-per-view="4"
        :slides-per-group="4"
        :navigation="{
          prevEl: '.previous',
          nextEl: '.next',
        }"
        :pagination="{
          el: '.pagination',
          type: 'custom',
          bulletActiveClass: 'active'
        }"
        class="viewed__slider"
    >
      <ViewedCard :card="card" v-for="card in store.viewedCards" :key="card.id" :id="card.id" />
    </swiper-container>
  </section>
</template>

<script setup>
import {onMounted} from "vue";
import useStore from "../stores/main.js";
const store = useStore();
import Swiper from 'swiper';
import { Navigation, Pagination, Grid } from 'swiper/modules';
import 'swiper/css';

import { register } from 'swiper/element/bundle';

register();


onMounted(async () => {
  await store.getViewedCards();

  const swiper = new Swiper('.swiper', {
    modules: [Navigation, Pagination, Grid],
  });
})


const countActualCard = (store, swipe) => {
  if (swipe == 'active' && store.activeSlide !== 1) {
    store.activeSlide -= 4;
    store.activePage--;
  } else if (store.activeSlide == 1 && swipe == 'active'){
    console.log(store.viewedCards.length)
    store.activeSlide = store.viewedCards.length - 4;
    store.activePage = Math.ceil(store.viewedCards.length / 4)
  } else if (swipe == 'next' && store.activeSlide > store.viewedCards.length - 4){
    store.activeSlide = 1;
    store.activePage = 1;
  } else {
    store.activeSlide += 4;
    store.activePage++;
  }
}

const countPages = (store, swipe) => {
  countActualCard(store, swipe);
  // const calculatePage = store.viewedCards.length / 4;
  // console.log(store.viewedCards.length, store.activeSlide, calculatePage)
  // if (calculatePage == store.activeSlide){
  //   store.activePage = calculatePage;
  // }
}



</script>

<style scoped lang="scss">

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

</style>