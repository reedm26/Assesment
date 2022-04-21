<template>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingFour">
      <button style="white-space: break-spaces;" class="accordion-button collapsed" type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
        Final
        <span v-if="this.store.finalSectionValidtion" class="badge rounded-pill bg-success">Complete</span>
        <span v-else class="badge rounded-pill bg-danger">Not Completed</span>
      </button>
    </h2>
    <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour"
         data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <ol class="list-group list-group-numbered">
          <li class="list-group-item d-flex justify-content-between align-items-start" v-for="(c, index) in finalChecks"
              :key="index">
            <div class="ms-2 me-auto">
              <div class="fw-bold">{{ c.title }}</div>
              <h6 class="checkValid" :key="c.id" v-show="c.valid === true"> Yes </h6>
            </div>
            <button
                v-if="this.store.interiorSectionValidation"
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
import {store} from "@/store";

export default {
  name: "FinalChecks",
  data() {
    return {
      // sectionValid: false,
      store,
      finalChecks: computed(() => store.checks.filter(c => c.checkType === "Final")),
    }
  },
  methods: {
    runChecks(check) {
      check.valid = !check.valid
      console.log("run checks", check)
      this.allChecksValid(check)
    },
    allChecksValid(check) {
      if (check.valid === true) {
        this.store.finalValidationArray.push(check)
      }
      if (this.store.finalValidationArray.length >= this.finalChecks.length) {
        this.store.finalSectionValidtion = true
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
