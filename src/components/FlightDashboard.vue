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
      <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
        <button style="flex: none;" class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false"
                aria-controls="panelsStayOpen-collapseTwo">
          <ExteriorChecks />
        </button>
      </h2>
      <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse"
           aria-labelledby="panelsStayOpen-headingTwo">
        <div class="accordion-body">

        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header" id="panelsStayOpen-headingThree">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false"
                aria-controls="panelsStayOpen-collapseThree">
          Accordion Item #3
        </button>
      </h2>
      <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse"
           aria-labelledby="panelsStayOpen-headingThree">
        <div class="accordion-body">

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PaperworkChecks from "@/components/PaperworkChecks";
import ExteriorChecks from "@/components/Preflight/ExteriorChecks";

export default {
  name: "FlightDashboard",
  components: {ExteriorChecks, PaperworkChecks},
}
</script>

<style scoped>

</style>
