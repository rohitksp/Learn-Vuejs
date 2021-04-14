<template>
  <div class="question-box container">
    <b-jumbotron>
      <template slot="lead">
        {{ currentQuestion.question }}
      </template>
      <hr class="my-4" />
      <b-list-group>
        <b-list-group-item
          v-for="(answer, index) in shuffledAnswers"
          :key="index"
          @click.prevent="selectAnswer(index)"
          :class="answerClass(index)"
          >{{ answer }}
        </b-list-group-item>
      </b-list-group>
      <b-button
        @click="sumbitAnswer"
        :disabled="selectedIndex === null || answered"
        variant="primary"
      >
        Submit
      </b-button>
      <b-button @click="next" variant="success">Next</b-button>
    </b-jumbotron>
  </div>
</template>

<script>
import _ from "lodash";

export default {
  props: {
    currentQuestion: Object,
    next: Function,
    increment: Function,
  },

  data() {
    return {
      selectedIndex: null,
      shuffledAnswers: [],
      correctIndex: null,
      answered: false,
    };
  },

  watch: {
    currentQuestion: {
      immediate: true,
      handler() {
        this.selectedIndex = null;
        this.answered = false;
        this.shuffleAnswers();
      },
    },
  },

  methods: {
    selectAnswer(index) {
      this.selectedIndex = index;
    },

    shuffleAnswers() {
      let answers = [
        ...this.currentQuestion.incorrect_answers,
        this.currentQuestion.correct_answer,
      ];
      this.shuffledAnswers = _.shuffle(answers);
      this.correctIndex = this.shuffledAnswers.indexOf(
        this.currentQuestion.correct_answer
      );
    },

    sumbitAnswer() {
      let isCorrect = false;
      if (this.selectedIndex === this.correctIndex) {
        isCorrect = true;
      }
      this.answered = true;

      this.increment(isCorrect);
    },

    answerClass(index) {
      let answerClass = "";
      if (!this.answered && this.selectedIndex === index) {
        return "selected";
      } else if (this.answered && this.correctIndex === index) {
        return "correct";
      } else if (
        this.answered &&
        this.selectedIndex === index &&
        this.correctIndex !== index
      ) {
        return "incorrect";
      }
      return answerClass;
    },
  },

  computed: {
    answers() {
      let answers = [...this.currentQuestion.incorrect_answers];
      answers.push(this.currentQuestion.correct_answer);
      return answers;
    },
  },
};
</script>

<style scoped>
.btn {
  margin: 15px 5px;
}

.list-group-item:hover {
  background: #eee;
  cursor: pointer;
}

.selected {
  background: lightblue;
}

.correct {
  background: lightgreen;
}

.incorrect {
  background: lightcoral;
}
</style>
