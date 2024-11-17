<template>
  <header class="header">
    <div class="header__basket">
      <div class="header__basket_img">
        <img src="assets/header.svg" alt="basket">
      </div>
      <div class="header__basket_info">
        <h3 class="header__title">Ваша корзина</h3>
        <div class="header__quantity">{{ store.basketCards.length }} товара</div>
        <div class="header__total">{{ store.total }} ₽</div>
      </div>
    </div>
  </header>
</template>

<script setup>
import useStore from "../stores/main.js";

const store = useStore()
</script>

<style lang="scss">
.header{
  display: flex;
  justify-content: flex-end;
  &__basket{
    display: flex;
    justify-content: space-between;
    width: 130px;
    &_info{
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    &_img{
      justify-self: center;
      align-self: center;
    }
  }

  &__title, &__total{
    color: #1F2432;
  }
  &__quantity{
    color: #797B86;
  }
  &__title{
    font-size: 14px;
    font-weight: 300;
    margin: 0;
  }
  &__quantity, &__total {
    font-size: 12px;
    font-weight: 300;
  }

}
</style>