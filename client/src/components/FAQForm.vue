<template>
  <form @submit.prevent="submitForm">
      <div class="field">
        <label for="question" class="label">Question</label>
        <div class="control">
          <input
            v-model="question"
            class="input" type="text"
            name="question"
            placeholder="e.g    ?" />
        </div>
      </div>
      <div class="field">
        <label for="answer" class="label">Answer</label>
        <div class="control">
          <textarea
          v-model="answer"
          class="input" type="text"
          name="answer"
          placeholder="e.g Because..." />
        </div>
      </div>
      <button type="submit" class="button is-success">Create</button>
    </form>
</template>

<script>
export default {
    props: {    
        submitForm: Function,
        faq: Object
    },

    setup(props) {
        const { question, answer } = props.faq;
        
        return {
            question,
            answer,
            submitForm: props.submitForm
        }
    },
}
</script>

<style>

</style>