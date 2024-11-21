<template>
  <li class="card" :class="{'last': basketCards.indexOf(card) == basketCards.length - 1}">
    <div class="card___img">
      <img :src="card.img" alt="product in basket">
    </div>
    <div class="card__main">
      <div class="card__info">
        <h2 class="card__title">{{ card.title }}</h2>
        <div class="card__description">{{ card.description }}</div>
        <div class="card__article">Артикул: {{ card.article }}</div>
      </div>
      <div class="card__calculate" :class="card.quantity <= 1 ? '' : 'moreThanOne'">
        <div class="card__quantity">
          <button class="product__minus" @click="decreaseQuantity(card, store)">-</button>
          <div class="product__quantity">{{card.quantity}}</div>
          <button class="product__plus" @click="addQuantity(card, store)">+</button>
        </div>
        <div class="card__onePrice" v-show="card.quantity > 1">{{ card.priceForOne }} ₽/шт.</div>
      </div>
      <div class="card__end">
        <button class="card__delete" @click="deleteProduct(card, store)"><img src="assets/delete.svg" alt="delete"></button>
        <h2 class="card__total">{{ card.totalPrice }} ₽</h2>
      </div>
    </div>
  </li>
</template>

<script setup>
import useStore from "../stores/main.js";
import {onMounted} from "vue";

const props = defineProps({
  card: Object,
})
const store = useStore();
const {basketCards} = storeToRefs(store)
onMounted(() => {
  calculateSum(store);
})

const calculateSum = (store) => {
  const moreThanZero = store.basketCards.filter(card => card.quantity !== 0);
  if (moreThanZero.length) {
    const moreThanZeroSum = moreThanZero.map(card => {
      return parseInt(card.totalPrice.replace(/\s+/g, ''))
    });
    let total = moreThanZeroSum.reduce((currentSum, currentNumber) => (currentSum + currentNumber));
    const sum = total.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ');
    const quantity = store.basketCards.map(card => card.quantity).reduce((currentSum, currentQuantity) => (currentSum + currentQuantity));
    store.totalQuantity = quantity;
    store.total = sum;
  } else {
    store.total = 0;
    store.totalQuantity = 0;
  }
}

const addQuantity = (card, store) => {
  const selectedCard = store.basketCards.find(basketCard => basketCard.id === card.id)
  let parsedPrice;
  if (selectedCard.quantity === 0) {
    selectedCard.quantity++
    parsedPrice = parseInt(selectedCard.priceForOne.replace(/\s+/g, ''));
  } else {
    selectedCard.quantity++
    parsedPrice = parseInt(selectedCard.totalPrice.replace(/\s+/g, ''))
    parsedPrice += parseInt(selectedCard.priceForOne.replace(/\s+/g, ''));
  }
  selectedCard.totalPrice = parsedPrice.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ')
  calculateSum(store);
}
const decreaseQuantity = (card, store) => {
  const selectedCard = store.basketCards.find(basketCard => basketCard.id === card.id)
  if (selectedCard.quantity !== 0) {
    selectedCard.quantity--
    if (selectedCard.quantity == 0) {
      selectedCard.totalPrice = 0;
      deleteProduct(card, store)
    } else {
      let parsedPrice = parseInt(selectedCard.totalPrice.replace(/\s+/g, ''));
      parsedPrice -= parseInt(selectedCard.priceForOne.replace(/\s+/g, ''))
      selectedCard.totalPrice = parsedPrice.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ')
      calculateSum(store)
    }
  }
}

const deleteProduct = (card, store) => {
  const newBasket = store.basketCards.filter(basketCard => basketCard.id !== card.id);
  store.basketCards = newBasket;
  calculateSum(store);
}

</script>

<style scoped lang="scss">
li {
  list-style: none;
}
.card{
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;
  padding-top: 20px;
  border-bottom: 1px solid #C4C4C4;
  &__main{
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
  &__info{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 30%;
  }
  &__end{
    display: flex;
    flex-direction: column;
    width: 20%
  }
  &__delete{
    margin-bottom: 23px;
  }
  &__title{
    font-weight: 600;
    font-size: 16px;
    color: #1F2432;
    margin-bottom: 7px;
  }
  &__description{
    font-size: 12px;
    color: #2C3242;
    margin-bottom: 7px;
  }
  &__article{
    color: #797B86;
    font-size: 14px;
  }
  &__calculate{
    min-width: 13%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .card__quantity{
      color: #1F2432;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 8px;
      button, div {
        border: none;
        background-color: #F6F8FA;
        width: 35px;
        height: 35px;
        border-radius: 5px;
      }
      .product__quantity{
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
  &__delete{
    border: none;
    background-color: white;
    display: flex;
    justify-content: flex-end;
    margin: 0;
  }
  &__total{
    display: flex;
    align-content: center;
    margin-top: 7px;
  }
  &__onePrice{
    font-family: 'Roboto', sans-serif;
    font-size: 12px;
    color: #1F2432;
  }
}

.last{
  border-bottom: none;
}
.moreThanOne {
  justify-content: flex-end;
}

@media (max-width: 1440px){
  .card__calculate{
    padding-bottom: 2%;
  }
  .card__total{
    margin-top: 20%;
  }
}

@media (max-width: 1440px){
  .card__calculate.moreThanOne{
    padding-bottom: 5%;
  }
  .card__total{
    margin-top: 20%;
  }
}

@media (max-width: 1024px){
  .moreThanOne{
    padding-bottom: 8%;
  }
  .card__total{
    font-size: 1.25rem;
    margin-top: 50%;
  }
}

@media (max-width: 862px){
  .card__calculate.moreThanOne{
    padding-bottom: 15%;
  }
}

@media (max-width: 768px){
  .card__total{
    margin-top: 30%;
  }
  .moreThanOne{
    padding-bottom: 1%;
  }
}

@media (max-width: 466px){
  .card__quantity{
    flex-direction: column;
    height: 73%;
  }
  .moreThanOne {
    padding-bottom: 5%;
  }
  .card__total{
    margin-top: 85%;
  }
  .card__end{
    width: 28%;
  }
  .card__info{
    width: 30%;
  }
}

@media (max-width: 444px) {
  .card__total{
    font-size: 1rem;
  }
  .card__info{
    width: 40%;
  }
}

@media (max-width: 320px){
  .card__description{
    font-size: 9px;
  }
  .card__title, .card__article{
    font-size: 12px;
  }
  .card__onePrice{
    text-align: center;
  }
}


</style>