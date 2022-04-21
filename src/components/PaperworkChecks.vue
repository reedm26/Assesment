<template>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button
          style="white-space: break-spaces"
          class="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseOne"
          aria-expanded="true"
          aria-controls="collapseOne"
      >
        Paperwork
        <span
            v-if="this.store.paperworkSectionValidation"
            class="badge rounded-pill bg-success"
        >Complete</span
        >
        <span v-else class="badge rounded-pill bg-danger">Not Completed</span>
      </button>
    </h2>
    <div
        id="collapseOne"
        class="accordion-collapse collapse show"
        aria-labelledby="headingOne"
        data-bs-parent="#accordionExample"
    >
      <div class="accordion-body">
        <div>
          <div class="cardsContainer">
            <div
                class="card"
                style="width: 18rem"
                v-for="(c, index) in paperworkChecks"
                :key="index"
            >
              <img
                  :src="c.img"
                  class="card-img-top"
                  style="height: 11rem"
                  :alt="c.title"
              />
              <div class="card-body">
                <h5 class="card-title">{{ c.title }}</h5>
                <button
                    v-bind="c"
                    type="button"
                    :key="index"
                    @click="runChecks(c)"
                    class="btn btn-primary"
                >
                  Run Check
                </button>
              </div>
              <div>
                <i
                    class="bi bi-check-circle checkValid"
                    :key="c.id"
                    v-show="c.valid === true"
                ></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {computed} from "@vue/runtime-core";
import {store} from "@/store";

export default {
  name: "PaperworkChecks",

  data() {
    return {
      store,
      paperworkChecks: computed(() =>
          store.checks.filter((c) => c.checkType === "Paper")
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
        this.store.paperworkValidationArray.push(check);
      }
      if (
          this.store.paperworkValidationArray.length >=
          this.paperworkChecks.length
      ) {
        this.store.paperworkSectionValidation = true;
      }
    },
  },
};
</script>

<style scoped>
.cardsContainer {
  display: flex;
  justify-content: space-evenly;
}

.checkValid {
  color: lawngreen;
  align-self: center;
  margin-bottom: 1rem;
}
</style>
