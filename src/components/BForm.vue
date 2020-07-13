<template>
  <div>
    <h1>Viajamos contigo</h1>
    <form action="">
        <div>
            <label for="fcar">Mi auto es</label>
            <input type="text" id="fcar">
        </div>
        <div>
            <label for="fcar">Modelo</label>
            <input type="text" id="fmodel">
        </div>
        <div>
            <label for="fcp">CP</label>
            <input type="text" id="fcp">
        </div>
        <button type="submit">Send</button>
    </form>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
form {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    max-width: 360px;
    > div {
        display: flex;
        margin-bottom: 8px;
        flex-direction: column;
        border: 1px solid black;
        text-align: left;
        padding: 8px 16px;
        input {
            border: none;
            outline: none;
        }
    }
    > button {
        margin-top: 8px;
        width: 100%;
        height: 48px;
    }
}

@media(min-width: 992px) {
    form {
        flex-direction: row;
        max-width: 700px;
        > div {
            margin-right: 8px;
            margin-bottom: 0px;
        }
        > button {
            margin: 0;
            height: 57px;
        }
    }
}
</style>
