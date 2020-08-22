<template>
  <div class="home">
    <button class="button is-success" @click.prevent="create">create</button>
    <FAQList />
  </div>
</template>

<script>
import { useRouter } from '@u3u/vue-hooks';
import FAQList from '../components/FAQList.vue';
import routerNames from '../router/routerNames';

export default {
  components: {
    FAQList,
  },

  setup() {
    const { router } = useRouter();

    function create() {
      router.push({ name: routerNames.Create });
    }

    return {
      create,
    };
  },
};
</script>

<style>
.home {
  display: flex;
  flex-direction: column;
}

.home button{
  width: 100px;
  height: 50px;
  margin: 0.3em
}
</style>
