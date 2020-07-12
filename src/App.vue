<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
@font-face {
    font-family: 'Roboto-Regular';
    src: url("/assets/fonts/Roboto/Roboto-Regular.ttf") format('truetype');
    /* Super Modern Browsers */
}

@font-face {
    font-family: 'Roboto-Medium';
    src: url("/assets/fonts/Roboto/Roboto-Medium.ttf") format('truetype');
    /* Super Modern Browsers */
}

@font-face {
    font-family: 'Roboto-Bold';
    src: url("/assets/fonts/Roboto/Roboto-Bold.ttf") format('truetype');
    /* Super Modern Browsers */
}

@font-face {
    font-family: 'Roboto-Light';
    src: url("/assets/fonts/Roboto/Roboto-Light.ttf") format('truetype');
    /* Super Modern Browsers */
}

@font-face {
    font-family: 'Roboto-Italic';
    src: url("/assets/fonts/Roboto/Roboto-Italic.ttf") format('truetype');
    /* Super Modern Browsers */
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
