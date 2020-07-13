<template>
    <div>
        <navbar></navbar>
        <b-form></b-form>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import BForm from '@/components/BForm.vue';

export default {
  name: 'BHome',
  components: {
    Navbar,
    BForm,
  },
};
</script>
