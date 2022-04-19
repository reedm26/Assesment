<template>
  <div class="accordion" id="accordionPanelsStayOpenExample">
    <div class="accordion-item">
      <h2 class="accordion-header" id="panelsStayOpen-headingOne">
        <button class="accordion-button" type="button" data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true"
                aria-controls="panelsStayOpen-collapseOne">
          Paperwork
        </button>
      </h2>
      <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show"
           aria-labelledby="panelsStayOpen-headingOne">
        <div class="accordion-body">
          <PaperworkChecks />
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header" id="panelsStayOpen-headingOne">
        <button class="accordion-button" type="button" data-bs-toggle="collapse"
                data-bs-target=".accordion-collapse" aria-expanded="false"
                aria-controls="panelsStayOpen-collapseOne">
          Exterior
        </button>
      </h2>
      <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show"
           aria-labelledby="panelsStayOpen-headingOne">
        <div class="accordion-body">
          <ExteriorChecks />
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingOne">
        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
                aria-expanded="true" aria-controls="collapseOne">
          Interior
        </button>
      </h2>
      <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
           data-bs-parent="#accordionExample">
        <div class="accordion-body">
          <InteriorChecks />

        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingOne">
        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
                aria-expanded="true" aria-controls="collapseOne">
          Final
        </button>
      </h2>
      <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
           data-bs-parent="#accordionExample">
        <div class="accordion-body">
          <FinalChecks />

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PaperworkChecks from "@/components/PaperworkChecks";
import ExteriorChecks from "@/components/Preflight/ExteriorChecks";
import InteriorChecks from "@/components/Preflight/InteriorChecks";
import FinalChecks from "@/components/Preflight/FinalChecks";

export default {
  name: "FlightDashboard",
  components: {FinalChecks, InteriorChecks, ExteriorChecks, PaperworkChecks},
}
</script>

<style scoped>

</style>
