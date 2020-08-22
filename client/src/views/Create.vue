<template>
  <div>
    <FAQForm :submitForm="createFAQ" :faq="faq" />
  </div>
</template>

<script>
import { ref } from "@vue/composition-api";
import { useRouter } from "@u3u/vue-hooks";

import FAQForm from "../components/FAQForm.vue";
import routesNames from "../router/routerNames";
import globalVars from "@/global";
import { json } from "express";

const BASE_URI = globalVars.BASE_URI;

export default {
  components: {
    FAQForm,
  },
  setup() {
    const answer = ref("");
    const question = ref("");

    async function updateFAQ() {
      const { router } = useRouter();
      let body = {};

      if (answer.value.length) {
        body.answer = answer.value;
      }

      if (question.value.length) {
        body.question = question.value;
      }

      const response = await fetch(BASE_URI, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      if (response.ok) {
        router.push({
          name: routesNames.Home,
        });
      }
    }

    return {
      faq: {
        answer,
        question,
      },
      updateFAQ,
    };
  },
};
</script>

<style>
</style>
