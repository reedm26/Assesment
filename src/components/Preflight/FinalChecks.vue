<template>
  <ol class="list-group list-group-numbered">
    <li class="list-group-item d-flex justify-content-between align-items-start" v-for="(c, index) in finalChecks"
        :key="index">
      <div class="ms-2 me-auto">
        <div class="fw-bold">{{ c.title }}</div>
        <h6 class="checkValid" :key="c.id" v-show="c.valid === true"> Yes </h6>
        <a :key="c.id" v-if="index === 0 && c.valid === false"> Start here</a>
        <a style="color: red" :key="index" v-else-if="c.valid === false"> Previous needs to be checked </a></div>
      <button
          v-bind="(c)"
          type="button"
          :key="index" @click="validatePreviousCheck(c, index)"
          class="btn btn-primary">Run Check
      </button>
    </li>
  </ol>
</template>

<script>
export default {
  name: "FinalChecks",
  data() {
    return {
      finalChecks: [
        {
          id: 16,
          title: "Ensure doors and windows are locked",
          valid: false
        },
        {
          id: 17,
          title: "Turn on landing, taxi, and strobe lights",
          valid: false
        },
        {
          id: 18,
          title: "Ensure transponder is on",
          valid: false
        },

      ]
    }
  },
  methods: {

    validatePreviousCheck: function (checks, index) {
      if (index === 0) {
        return checks.valid = !checks.valid
      } else if (this.finalChecks[index -= 1].valid === false) {
        return checks.valid = false
      } else {
        return checks.valid = !checks.valid
      }
    },
  }
}
</script>

<style scoped>
.checkValid {
  color: lawngreen;
}
</style>
