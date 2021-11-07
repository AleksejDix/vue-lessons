<template>
  <div>
    <Question>
      <QuestionTitle>What is the best way of learning Vue.js</QuestionTitle>
      <QuestionAnswer>Practice every day</QuestionAnswer>
    </Question>

    <Question>
      <QuestionTitle>What is the best UI Framework?</QuestionTitle>
      <QuestionAnswer>Vue.js</QuestionAnswer>
    </Question>

    <Question>
      <QuestionTitle>How can i migrate to Vue3?</QuestionTitle>
      <QuestionAnswer>Use official migration build</QuestionAnswer>
    </Question>
  </div>
</template>

<script>
import Question from '@/lessons/exercices/components/Question'
import QuestionTitle from '@/lessons/exercices/components/QuestionTitle'
import QuestionAnswer from '@/lessons/exercices/components/QuestionAnswer'

export default {
  components: {
    Question,
    QuestionTitle,
    QuestionAnswer,
  },
}
</script>

<style></style>
