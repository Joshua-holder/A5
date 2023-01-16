<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const button = () => {
 router.push("/Login");   
}

</script>

<template>
<div>
<h1>MovieHub</h1>
<button @click="button()" class="button">Login</button>
</div>
</template>

<style scoped>
.button {
    background-color: beige;
    margin-bottom: 50px;
}
h1 {
    font-size: 90px;
    margin-bottom: 5px;
    margin-top: 5px;
  background-color: silver;
  text-align: center;

}

</style>

