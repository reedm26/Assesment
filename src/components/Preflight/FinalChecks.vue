<template>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingFour">
      <button
          @click="filterQuote"
          style="white-space: break-spaces"
          class="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseFour"
          aria-expanded="false"
          aria-controls="collapseFour"
      >
        Final
        <span
            v-if="this.store.finalSectionValidtion"
            class="badge rounded-pill bg-success"
        >Complete</span
        >
        <span v-else class="badge rounded-pill bg-danger">Not Completed</span>
      </button>
    </h2>
    <div
        id="collapseFour"
        class="accordion-collapse collapse"
        aria-labelledby="headingFour"
        data-bs-parent="#accordionExample"
    >
      <div class="accordion-body">
        <ol class="list-group list-group-numbered">
          <li
              class="list-group-item d-flex justify-content-between align-items-start"
              v-for="(c, index) in finalChecks"
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
                v-if="this.store.interiorSectionValidation"
                v-bind="c"
                type="button"
                :key="index"
                @click="runChecks(c, index)"
                class="btn btn-primary"
            >
              Run Check
            </button>
          </li>
        </ol>
      </div>
    </div>
    <h6 v-show="this.store.finalSectionValidtion">
      <em>"{{ this.quote }}"</em> - {{ this.person }}
    </h6>
  </div>
</template>

<script>
import {computed} from "@vue/runtime-core";
import {store} from "@/store";
import axios from "axios";

export default {
  name: "FinalChecks",
  data() {
    return {
      store,
      quoteData: null,
      quote: "",
      person: "",
      finalChecks: computed(() =>
          store.checks.filter((c) => c.checkType === "Final")
      ),
    };
  },
  mounted: function () {
    axios
        .get("https://motivational-quote-api.herokuapp.com/quotes/random")
        .then((response) => (this.quoteData = response.data));
  },
  methods: {
    runChecks(check) {
      check.valid = !check.valid;
      this.allChecksValid(check);
      this.filterQuote();
    },
    allChecksValid(check) {
      if (check.valid === true) {
        this.store.finalValidationArray.push(check);
      }
      if (this.store.finalValidationArray.length >= this.finalChecks.length) {
        this.store.finalSectionValidtion = !this.store.finalSectionValidtion;
      }
    },
    filterQuote() {
      this.quoteData = Object.values(this.quoteData);
      this.quote = this.quoteData[1];
      this.person = this.quoteData[2];
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
