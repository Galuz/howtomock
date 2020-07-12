<template>
  <div class="home">
    <Navbar></Navbar>
    <div class="header">
      <h1>Compara y contrata el mejor seguro de auto en línea</h1>
      <h2>Descubre el mejor seguro de auto online en solo 3 clics</h2>
      <Form></Form>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue';
import Form from '@/components/Form.vue';

export default {
  name: 'Home',
  components: {
    Navbar,
    Form,
  },
};
</script>
<style lang="scss" scoped>
  .home{
    width: 100%;
    height: 100vh;
   .header{
     padding: 16px;
     background-color: #4848487a;
     h1{
       font-size: 24px;
       font-weight: bold;
     }
     h2{
       font-size: 18px;
     }
   }
  }
</style>
