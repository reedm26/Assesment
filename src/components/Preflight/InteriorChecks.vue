<template>
  <ol class="list-group list-group-numbered">
    <li class="list-group-item d-flex justify-content-between align-items-start" v-for="(c, index) in interiorChecks"
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
  name: "InteriorChecks",
  data() {
    return {
      interiorChecks: [
        {
          id: 11,
          title: "Verify fuel pressure",
          valid: false
        },
        {
          id: 12,
          title: "Verify oil pressure",
          valid: false
        },
        {
          id: 13,
          title: "Check settings and tunability of radio",
          valid: false
        },
        {
          id: 14,
          title: "Check navigational instrument health",
          valid: false
        },
        {
          id: 15,
          title: "Check fire extinguisher readiness",
          valid: false
        },
      ]
    }
  },
  methods: {

    validatePreviousCheck: function (checks, index) {
      if (index === 0) {
        return checks.valid = !checks.valid
      } else if (this.interiorChecks[index -= 1].valid === false) {
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
