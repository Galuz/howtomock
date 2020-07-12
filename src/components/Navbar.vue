<template>
  <div class="navbar">
      <Nav>
        <button>menu</button>
        <img src="@/assets/logo.png" alt="Logo">
        <button class="last">Sign up</button>
      </Nav>
  </div>
</template>
<script>
export default {
  name: 'Navbar',
};
</script>
<style lang="scss" scoped>
.navbar{
   nav{
     display: flex;
     padding: 16px;
     border: 1px solid black;
     img{
       width: 50px;
       height: auto;
       margin-left: 16px;
     }
     button{
       &:last-child{
         margin-left: auto;
       }
     }
   }
}
</style>
