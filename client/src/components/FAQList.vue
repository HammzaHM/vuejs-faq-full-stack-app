<template>
  <div id="list-card">
    <div class="card" v-for="faq in faqs" :key="faq._id">
      <div class="card-content">
        <div class="media-content">
          <p class="title is-4">{{ faq.question }}</p>
        </div>
      </div>

      <div class="content">{{ faq.answer }}</div>
      <button class="button is-danger">Remove</button>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/composition-api";

import globalVars from "../global";

export default {
  setup() {
    const faqs = ref([]);

    fetch(globalVars.BASE_URI)
      .then((response) => response.json())
      .then((jsonData) => {
        faqs.value = jsonData.items;
      })
      .catch((error) => {
        console.error(error);
      });

    return {
      faqs,
    };
  },
};
</script>

<style>
#list-card {
  display: flex;
  justify-content: stretch;
  align-items: flex-start;
  flex-wrap: wrap;
}
.card {
  flex-basis: 550px;
  margin: 0.2em;
  padding: 3em 0em;
  align-self: flex-start;
}

@media only screen and (max-width: 700px) {
  .card {
    flex-basis: 400px;
    align-self: center;
  }
}
</style>
