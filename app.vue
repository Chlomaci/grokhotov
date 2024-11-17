<template>
  <div class="app">
    <NuxtRouteAnnouncer />
    <Header/>
    <section class="main">
      <Basket/>
      <Total/>
    </section>
    <Viewed/>
  </div>
</template>

<script setup>

</script>

<style>
@font-face {
  font-family: 'Lato';
  src: url('/fonts/Lato-Regular.ttf') format('ttf');
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: 'Lato';
  src: url('/fonts/Lato-Bold.ttf') format('ttf');
  font-weight: bold;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: 'Lato';
  src: url('/fonts/Lato-Light.ttf') format('ttf');
  font-weight: 300;
  font-style: normal;
  font-display: swap;
}
.app {
  padding: 80px;
  font-family: 'Lato', sans-serif;
}

h1, h2, h3 {
  margin: 0;
}
.main{
  display: flex;
  justify-content: space-between;
  margin-top: 60px;
  margin-bottom: 95px;
}

button:hover{
  cursor: pointer;
}

@media (max-width: 768px){
  .main{
    flex-direction: column;
  }
}

@media (max-width: 425px){
  .app{
    padding: 15px;
  }
}
</style>
