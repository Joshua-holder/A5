<script setup>
import { ref } from "vue";
import axios from "axios"

const response = ref(null);
const video = ref(null);
const props = defineProps(["id"]);
const emits = defineEmits(["toggleModal"]);

const getData = async (url, params) => {
  try {
    return await axios.get(url, params);
  } catch (error) {
    console.log(error);
  }
};

response.value = (
  await getData(`https://api.themoviedb.org/3/movie/${props.id}`, {
    params: {
      api_key: "605e589482c7766c26ae88254d3d0226",
      append_to_response: "videos",
    },
  })
).data;

video.value = response.value.videos.results
  .filter((video) => video.type === "Trailer")
  .at(0).key;
</script>

<template>
  <Teleport to="body">
    <div class="modal-outer-container" @click.self="emits('toggleModal')">
      <div class="modal-inner-container">
        <button class="close-button" @click="emits('toggleModal')">X</button>
        <h1 id="title">Title: {{ response.title }}</h1>
        <p id="release_date">Release date: {{ response.release_date }}</p>
        <p id="overview">Overview {{ response.overview }}</p>
        <h2>
          <a :href="`https://www.youtube.com/embed/${video}`" target="_blank">Movie Trailer!</a>
        </h2>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.modal-outer-container {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: #00000099;
  z-index: 3;
}

.modal-outer-container .modal-inner-container {
  background-color: #1F2123;
  color: white;
  width: clamp(280px, 100%, 800px);
  height: 400px;
  position: relative;
}

.modal-outer-container .modal-inner-container .close-button {
  position: absolute;
  right: 0px;
  padding: 1rem;
  border: none;
  background: #1F2123;
  font-weight: bold;
  font-size: 1.25rem;
  color: white;
}
</style>