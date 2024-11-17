<template>
  <section class="total">
    <h1 class="total__title">Итого</h1>
    <div class="total__position" style="margin-bottom: 17px">
      <div class="subtitle">Сумма заказа</div>
      <div class="value">{{store.total}} ₽</div>
    </div>
    <div class="total__position" style="margin-bottom: 17px">
      <div class="subtitle">Количество</div>
      <div class="value">{{store.totalQuantity}} шт</div>
    </div>
    <div class="total__position">
      <div class="subtitle">Установка</div>
      <div class="value">{{ store.isInstallation ? 'Да' : 'Нет' }}</div>
    </div>
    <div class="total__amount">
      <h2 class="amount__title">Стоимость товаров</h2>
      <div class="amount">{{store.total}} ₽</div>
    </div>
    <button class="order" @click="store.buy">Оформить заказ</button>
    <button class="buy">Купить в 1 клик</button>
  </section>
</template>

<script setup>
import useStore from "../stores/main.js";

const store = useStore()


</script>

<style scoped lang="scss">
.total {
  padding: 35px 30px;
  color: #1F2432;
  background-color: #F6F8FA;
  width: 30%;
  height: 100%;
  border-radius: 5px;
  &__title{
    font-weight: 600;
    font-size: 24px;
    margin-bottom: 31px;
  }
  &__position{
    display: flex;
    width: 100%;
    justify-content: space-between;
    font-size: 16px;
    font-weight: 400;
  }
  &__amount{
    border-top: 1px solid #AEB0B6;
    padding-top: 10px;
    margin-top: 30px;
    margin-bottom: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}

.amount__title{
  font-size: 18px;
}

.amount{
  font-weight: bold;
  font-size: 26px;
}

button {
  width: 100%;
  height: 55px;
  border: none;
  border-radius: 5px;
}

.order{
  background-color: #0069B4;
  color: white;
  margin-bottom: 13px;
}

.buy{
  background-color: white;
  border: 1px solid #0069B4;
  color: #0069B4;
}

.order, .buy{
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 18px;
}

</style>