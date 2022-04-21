<template>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button
          style="white-space: break-spaces"
          class="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseThree"
          aria-expanded="false"
          aria-controls="collapseThree"
      >
        Interior
        <span
            v-if="this.store.interiorSectionValidation"
            class="badge rounded-pill bg-success"
        >Complete</span
        >
        <span v-else class="badge rounded-pill bg-danger">Not Completed</span>
      </button>
    </h2>
    <div
        id="collapseThree"
        class="accordion-collapse collapse"
        aria-labelledby="headingThree"
        data-bs-parent="#accordionExample"
    >
      <div class="accordion-body">
        <ol class="list-group list-group-numbered">
          <li
              class="list-group-item d-flex justify-content-between align-items-start"
              v-for="(c, index) in interiorChecks"
              :key="index"
          >
            <div class="ms-2 me-auto">
              <div class="fw-bold">{{ c.title }}</div>
            </div>
            <i
                class="bi bi-check-circle checkValid"
                :key="c.id"
                v-show="c.valid === true"
            ></i>
            <button
                v-if="this.store.exteriorSectionValidtion"
                v-bind="c"
                type="button"
                :key="index"
                @click="runChecks(c)"
                class="btn btn-primary"
            >
              Run Check
            </button>
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script>
import {computed} from "@vue/runtime-core";
import {store} from "@/store";

export default {
  data() {
    return {
      sectionValid: false,
      store,
      interiorChecks: computed(() =>
          store.checks.filter((c) => c.checkType === "Interior")
      ),
    };
  },
  methods: {
    runChecks(check) {
      check.valid = !check.valid;
      this.allChecksValid(check);
    },
    allChecksValid(check) {
      if (check.valid === true) {
        this.store.interiorValidationArray.push(check);
      }
      if (
          this.store.interiorValidationArray.length >= this.interiorChecks.length
      ) {
        this.store.interiorSectionValidation = true;
      }
    },
  },
};
</script>

<style scoped>
.checkValid {
  color: lawngreen;
  align-self: center;
  margin-right: 1rem;
}
</style>
