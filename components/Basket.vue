<template>
  <section class="basket">
    <div class="basket__header">
      <div class="basket__header_main">
        <h1 class="basket__title">Ваша корзина</h1>
        <div class="basket__quantity">{{store.basketCards.length}} товара</div>
      </div>
      <button class="basket__clear" @click="clearBasket(store)">Очистить корзину</button>
    </div>
    <div class="basket__main" v-show="store.isLoading">Идет загрузка...</div>
    <div class="basket__main" v-show="store.basketCards.length == 0 && !store.isLoading">Корзина пуста</div>
    <ul class="basket__main" v-show="!store.isLoading" >
      <BasketCard v-for="card in store.basketCards" :card="card"/>
    </ul>
    <div class="basket__install">
      <input type="checkbox" @change="() => {store.isInstallation = !store.isInstallation}">
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

onMounted(async () => {
  await store.getBasketCards();
})


const clearBasket = (store) => {
  store.basketCards = [];
  store.total = 0
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

@media (max-width: 1024px){
  .basket__header_main{
    align-items: flex-end;
  }
  .basket__main{
    padding: 0;
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