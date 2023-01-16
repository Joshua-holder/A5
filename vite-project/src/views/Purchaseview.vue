<script setup>
import { ref } from 'vue';
import axios from 'axios';
import Footer from "../components/sitefooter.vue"
import SiteModal from '../components/SiteModal.vue';

const showModal = ref(false);
const selectedId = ref(0);
const response = ref(null);

const openModal = (id) => {
  showModal.value = true;
  selectedId.value = id;
};

const closeModal = () => {
  showModal.value = false;
};

const getMovies = async () => {
  response.value = (
    await getData(`https://api.themoviedb.org/3/trending/movie/week`, {
      params: {
        api_key: "605e589482c7766c26ae88254d3d0226",
        append_to_response: "videos",
      },
    })
  ).data["results"];
};

const getData = async (url, params) => {
  try {
    return await axios.get(url, params);
  } catch (error) {
    console.log(error);
  }
};

await getMovies();

</script>

<template>
  <h1 id="movies">Movies</h1>
  <div class="Movies-container">
    <img v-for="result in response" :key="result.id" @click="openModal(result.id)"
      :src="'https:/image.tmdb.org/t/p/w500' + result.poster_path" />
  </div>
  <SiteModal v-if="showModal" @toggleModal="closeModal()" :id="selectedId" />
  <Footer />
</template>

<style scoped>
h1 {
  text-align: center;
  font-size: 50px;
}

.Movies-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

img {
  width: 400px;
  aspect-ratio: 2 / 3;
  border-radius: 1rem;
  cursor: pointer;
}
</style>
