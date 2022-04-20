<template>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button style="white-space: break-spaces;" class="accordion-button" type="button" data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true" aria-controls="collapseOne">

        Paperwork
        <span v-if="sectionValid === true" class="badge rounded-pill bg-success">Success</span>
        <span v-else class="badge rounded-pill bg-danger">Not Valid</span>
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
         data-bs-parent="#accordionExample">
      <div class="accordion-body">


        <div>
          <div class="cardsContainer">
            <div class="card" style="width: 18rem;" v-for="(c, index) in paperworkChecks" :key="index">
              <img :src=c.img class="card-img-top" style=" height: 11rem;" alt={{c.title}}>
              <div class="card-body">
                <h5 class="card-title">{{ c.title }}</h5>
                <h4 class="checkValid" :key="c.id" v-show="c.valid === true"> Yes </h4>
                <p :key="c.id" v-if="index === 0 && c.valid === false"> Start here</p>
                <p style="color: red" :key="index" v-else-if="c.valid === false"> Previous needs to be checked </p>
                <button v-bind="(c)" type="button" :key="index" @click="runChecks(c, index)"
                        class="btn btn-primary">Run Check
                </button>
              </div>
            </div>
          </div>
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
      sectionValid: false,
      paperworkChecks: [
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
    runChecks(check, index) {
      this.validatePreviousCheck(check, index)
      this.allChecksValid(check, index)
    },

    validatePreviousCheck(check, index) {
      if (index === 0) {
        return check.valid = !check.valid
      } else if (this.paperworkChecks[index -= 1].valid === false) {
        return check.valid = false
      } else {
        return check.valid = !check.valid
      }
    },

    allChecksValid(check, index) {
      if ((this.paperworkChecks.length - 1) === index && check.valid === true) {
        return this.sectionValid = true
      } else {
        return this.sectionValid = false
      }
    }
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
