<template>
  <section class="basket">
    <div class="basket__header">
      <div class="basket__header_main">
        <h1 class="basket__title">Ваша корзина</h1>
        <div class="basket__quantity">{{totalQuantity}} товар{{getEnd }}</div>
      </div>
      <button class="basket__clear" @click="clearBasket(store)">Очистить корзину</button>
    </div>
    <div class="basket__main" v-show="isLoading">Идет загрузка...</div>
    <div class="basket__main" v-show="basketCards.length == 0 && !isLoading">Корзина пуста</div>
    <ul class="basket__main" v-show="!isLoading" >
      <BasketCard v-for="card in basketCards" :card="card"/>
    </ul>
    <div class="basket__install">
      <input type="checkbox" @change="() => {isInstallation = !isInstallation}">
      <img src="assets/install.svg" alt="install">
      <div class="install">
        <h2 class="install__title">Установка</h2>
        <div class="install__description">Отметьте, если Вам необходима консультация профессионала по монтажу выбранных товаров.</div>
      </div>
    </div>
  </section>
</template>

<script setup>
import useStore from '/stores/main'
import { onMounted } from 'vue'

const store = useStore();
const {basketCards, totalQuantity, isLoading, isInstallation} = storeToRefs(store)

onMounted(async () => {
  await store.getBasketCards();
})

const getEnd = computed(() => {
  switch (true){
    case store.totalQuantity % 100 >= 11 && store.totalQuantity % 100 < 20:
      return 'ов'
    default:
      break;
  }

  switch (store.totalQuantity % 10) {
    case 1:
      return
    case 2:
    case 3:
    case 4:
      return 'а'
    default:
      return 'ов'
  }
})

const clearBasket = (store) => {
  store.basketCards = [];
  store.total = 0;
  store.totalQuantity = 0;
}
</script>

<style scoped lang="scss">
.basket{
  width: 60%;
  &__header{
    margin-bottom: 50px;
    display: flex;
    justify-content: space-between;
    &_main{
      display: flex;
      justify-content: space-between;
      width: 35%;
      align-items: baseline;
    }
  }
  &__title{
    font-weight: bold;
    margin: 0;
    font-size: 2.5rem;
    color: #1F2432;
  }
  &__quantity, &__clear{
    font-weight: 300;
    color: #797B86;
    font-size: 18px;
  }
  &__clear{
    height: 100%;
    border: none;
    background-color: white;
    border-bottom: 1px #797B86 solid;
    align-self: end;
  }
}


.basket__install{
  background-color: #F6F8FA;
  border-radius: 2px;
  padding: 25px;
  display: flex;
  align-items: center;
  input, img{
    margin-right: 20px;
  }
  input{
    width: 20px;
    height: 20px;
    border-color: #797B86;
    border-radius: 1px;
  }
}
.install{
  display: flex;
  flex-direction: column;
  &__title{
    font-weight: 600;
    font-size: 16px;
    color: #1F2432;
    margin-bottom: 2px;
  }
  &__description{
    color: #797B86;
    font-size: 14px;
  }
}

@media (max-width: 1870px){
  .basket__header_main{
    width: 36%;
  }
}
@media (max-width: 1800px){
  .basket__header_main{
    min-width: 40%;
  }
}

@media (max-width: 1650px){
  .basket__header_main{
    min-width: 45%;
  }
}

@media (max-width: 1480px){
  .basket__header_main{
    min-width: 50%;
  }
}

@media (max-width: 1360px){
  .basket__header_main{
    min-width: 55%;
  }
}

@media (max-width: 1240px){
  .basket__header_main{
    min-width: 60%;
  }
}

@media (max-width: 1160px){
  .basket__header_main{
    min-width: 63%;
  }
}

@media (max-width: 1100px){
  .basket__title{
    font-size: 2rem;
  }
}


@media (max-width: 1024px){
  .basket__header_main{
    align-items: flex-end;
  }
  .basket__main{
    padding: 0;
  }
}

@media (max-width: 955px){
  .basket__title{
    font-size: 1.5rem;
  }
  .basket__header_main{
    min-width: 58%;
  }
  .basket__clear{
    max-width: 30%;
  }
  .basket__quantity{
    font-size: 1rem;
  }
}

@media (max-width: 768px){
  .basket {
    width: 100%;
    margin-bottom: 20px;
  }
}

@media (max-width: 425px){
  .basket__title{
    font-size: 1.5rem;
  }
}
</style>