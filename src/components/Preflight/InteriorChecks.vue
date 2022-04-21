<template>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button style="white-space: break-spaces;" class="accordion-button collapsed" type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Interior
        <span v-if="this.store.interiorSectionValidation === true" class="badge rounded-pill bg-success">Success</span>
        <span v-else class="badge rounded-pill bg-danger">Not Valid</span>
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
         data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <ol class="list-group list-group-numbered">
          <li class="list-group-item d-flex justify-content-between align-items-start"
              v-for="(c, index) in interiorChecks"
              :key="index">
            <div class="ms-2 me-auto">
              <div class="fw-bold">{{ c.title }}</div>
              <h6 class="checkValid" :key="c.id" v-show="c.valid === true"> Yes </h6>
              <!--              <a :key="c.id" v-if="index === 0 && c.valid === false"> Start here</a>-->
              <!--              <a style="color: red" :key="index" v-else-if="c.valid === false"> Previous needs to be checked </a>-->
            </div>
            <button
                v-bind="(c)"
                type="button"
                :key="index" @click="runChecks(c)"
                class="btn btn-primary">Run Check
            </button>
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script>
import {store} from '@/store'
import {computed} from '@vue/runtime-core'

export default {
  data() {
    return {
      sectionValid: false,
      store,
      interiorChecks: computed(() => store.checks.filter(c => c.checkType === "Interior")),
    }
  },
  methods: {
    runChecks(check) {
      check.valid = !check.valid
      console.log("run checks", check)
      this.allChecksValid(check)
    },

    // validatePreviousCheck: function (checks, index) {
    //   if (index === 0) {
    //     return checks.valid = !checks.valid
    //   } else if (this.interiorChecks[index -= 1].valid === false) {
    //     return checks.valid = false
    //   } else {
    //     return checks.valid = !checks.valid
    //   }
    // },
    allChecksValid(check) {
      if (check.valid === true) {
        this.store.interiorValidationArray.push(check)
      }
      if (this.store.interiorValidationArray.length >= this.interiorChecks.length) {
        this.store.interiorSectionValidation = true
        document.getElementById("quote").classList.remove("visualy-hidden")
      } else {
        console.log("array does not equal other array")
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
