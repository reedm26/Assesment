<template>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button style="white-space: break-spaces;" class="accordion-button collapsed" type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Exterior
        <span v-if="this.store.exteriorSectionValidtion === true" class="badge rounded-pill bg-success">Success</span>
        <span v-else class="badge rounded-pill bg-danger">Not Valid</span>
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
         data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <ol class="list-group list-group-numbered">
          <li class="list-group-item d-flex justify-content-between align-items-start"
              v-for="(c, index) in exteriorChecks"
              :key="index">
            <div class="ms-2 me-auto">
              <div class="fw-bold">{{ c.title }}</div>
              <h6 class="checkValid" :key="c.id" v-show="c.valid === true"> Yes </h6>
              <a :key="c.id" v-if="index === 0 && c.valid === false"> Start here</a>
              <a style="color: red" :key="index" v-else-if="c.valid === false"> Previous needs to be checked </a></div>
            <button
                v-bind="(c)"
                type="button"
                :key="index" @click="runChecks(c, index)"
                class="btn btn-primary">Run Check
            </button>
          </li>
        </ol>

      </div>
    </div>
  </div>
</template>
<script>

import {computed} from '@vue/runtime-core'
import {store} from '../../store'
export default {
  name: "ExteriorChecks",
  data() {
    return {
      sectionValid: false,
      store,
      exteriorChecks : computed(() => store.checks.filter(c => c.checkType === "Exterior")),
    
    }
  },
  methods: {
    runChecks(check, index) {
      this.validatePreviousCheck(check, index)
      this.allChecksValid(check, index)
    },

    validatePreviousCheck: function (checks, index) {
      if (index === 0) {
        return checks.valid = !checks.valid
      } else if (this.exteriorChecks[index -= 1].valid === false) {
        return checks.valid = false
      } else {
        return checks.valid = !checks.valid
      }
    },
    allChecksValid(check, index) {
    
      if ((this.exteriorChecks.length - 1) === index && check.valid === true) {
        return this.store.exteriorSectionValidtion = true
      } else {
        return this.store.exteriorSectionValidtion = false
      }
    }
  }
}
</script>

<style scoped>
.checkValid {
  color: lawngreen;
}
</style>
