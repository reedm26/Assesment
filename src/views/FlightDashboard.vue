<template>
  <div class="accordion" id="accordionPanelsStayOpenExample">
    <div class="accordion" id="accordionExample">
      <PaperworkChecks />
      <ExteriorChecks />
      <InteriorChecks />
      <FinalChecks />
    </div>
    <div id="quote" class="visualy-hidden">{{ this.quote }}
    </div>
    <button style="margin: 1rem;" class="btn-secondary btn" type="button" @click="filterQuote">Quote</button>
  </div>
</template>

<script>
import PaperworkChecks from "@/components/PaperworkChecks";
import ExteriorChecks from "@/components/Preflight/ExteriorChecks";
import InteriorChecks from "@/components/Preflight/InteriorChecks";
import FinalChecks from "@/components/Preflight/FinalChecks";
import axios from "axios";

export default {
  name: "FlightDashboard",
  components: {FinalChecks, InteriorChecks, ExteriorChecks, PaperworkChecks},
  data() {
    return {
      quoteData: null,
      quote: '',
      person: '',
      accordionToggle: true

    }
  },
  mounted: function () {
    axios
        .get('https://motivational-quote-api.herokuapp.com/quotes/random')
        .then(response => (this.quoteData = response.data))

  },
  methods: {
    filterQuote() {
      this.quoteData = Object.values(this.quoteData)
      this.quote = this.quoteData[1]
      this.person = this.quoteData[2]
    },
  }
}
</script>

<style scoped>
</style>
