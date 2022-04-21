<template>
  <div class="accordion" id="accordionPanelsStayOpenExample">
    <div class="accordion" id="accordionExample">
      <PaperworkChecks />
      <ExteriorChecks />
      <InteriorChecks />
      <FinalChecks />
    </div>
  </div>
</template>

<script>
import PaperworkChecks from "@/components/PaperworkChecks";
import ExteriorChecks from "@/components/Preflight/ExteriorChecks";
import InteriorChecks from "@/components/Preflight/InteriorChecks";
import FinalChecks from "@/components/Preflight/FinalChecks";
import {store} from "@/store";

export default {
  name: "FlightDashboard",
  components: {FinalChecks, InteriorChecks, ExteriorChecks, PaperworkChecks},
  data() {
    return {
      store,
    };
  },
};
</script>

<style scoped></style>
