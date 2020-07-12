<template>
  <div class="Form">
      <div class="input-group">
        <label for="">Mi auto es</label>
        <input type="text">
      </div>
      <div class="input-group">
        <label for="">Modelo</label>
        <input type="text">
      </div>
      <div class="input-group">
        <input type="password" placeholder="Codigo postal">
      </div>
      <button>Cotizar</button>
  </div>
</template>

<style lang="scss" scoped>
.Form{
    box-shadow: 0 12px 34px 0 rgba(0, 0, 0, 0.09);
    background-color: white;
    padding: 16px;
    display: flex;
    flex-direction: column;
    .input-group{
      display: flex;
      flex-direction: column;
      text-align: left;
      padding: 8px 23px;
      margin-bottom: 8px;
      box-shadow: 0 8px 11px 0 rgba(0, 0, 0, 0.06);
      border: solid 1px rgba(0, 0, 0, 0.06);
      label{
        font-size: 12px;
        text-transform: uppercase;
      }
      input{
        font-size: 18px;
        border: none;
        padding: 4px;
      }
      &:nth-child(3){
        input{
          height: 37px;
        }
      }
    }
    button{
      width: 100%;
      height: 63px;
    }
}
//tablet
@media(min-width: 768px){

}
//desk
@media(min-width: 992px){
  .Form{
    flex-direction: row;
    .input-group{
      margin-bottom: 0;
      margin-right: 8px;
    }
  }
}
</style>
