<template>
  <div>
    <div class="cardsContainer">
      <div class="card" style="width: 18rem;" v-for="(c, index) in checks" :key="index">
        <img :src=c.img class="card-img-top" style=" height: 11rem;" alt={{c.title}}>
        <div class="card-body">
          <h5 class="card-title">{{ c.title }}</h5>
          <h4 class="checkValid" :key="c.id" v-show="c.valid === true"> Yes </h4>
          <p :key="c.id" v-if="index === 0 && c.valid === false"> Start here</p>
          <p style="color: red" :key="index" v-else-if="c.valid === false"> Previous needs to be checked </p>

          <button v-bind="(c)" type="button" :key="index" @click="runCheck(c, index)" class="btn btn-primary">Run Check
          </button>
          <p>{{ index }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AirCertification from '../assets/airworthiness-cert.webp'
import WeightBalanceCertification from '../assets/weight-and-balance.png'
import PilotHandbook from '../assets/Pilot-Handbook.jpeg'
import PilotLicense from '../assets/PilotLicense.jpeg'

export default {

  name: "PaperworkChecks",

  data() {
    return {
      checks: [
        {
          id: 1,
          title: "AirWorthiness Certification",
          img: AirCertification,
          valid: false
        },
        {
          id: 2,
          title: "Weight & Balance",
          img: WeightBalanceCertification,
          valid: false
        },
        {
          id: 3,
          title: "Handbook",
          img: PilotHandbook,
          valid: false
        },
        {
          id: 4,
          title: "License Valid",
          img: PilotLicense,
          valid: false
        },

      ],
    }
  },

  methods: {
    runCheck: function (checks, index) {
      console.log(index)
      this.validatePreviousCheck(checks, index)
    },

    validatePreviousCheck: function (checks, index) {
      if (index === 0) {
        return checks.valid = !checks.valid
      } else if (this.checks[index -= 1].valid === false) {
        return checks.valid = false
      } else {
        return checks.valid = !checks.valid
      }
    },
  }
}

</script>

<style scoped>
.cardsContainer {
  display: flex;
  justify-content: space-evenly;
}

.checkValid {
  color: lawngreen;
}

</style>
