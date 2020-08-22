<template>
  <div>
    <FAQForm :submitForm="updateFAQ" :faq="faq" />
  </div>
</template>

<script>
import { ref } from "@vue/composition-api";
import { useRouter } from "@u3u/vue-hooks";

import FAQForm from "../components/FAQForm.vue";
import routesNames from "../router/routerNames";
import globalVars from "../global";

const BASE_URI = globalVars.BASE_URI;

export default {
  components: {
    FAQForm,
  },
  setup() {
    const answer = ref("");
    const question = ref("");

    async function createFAQ() {
      const { router } = useRouter();

      const response = await fetch(BASE_URI, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          answer: answer.value,
          question: question.value,
        }),
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
