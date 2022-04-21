import { reactive } from "vue";
import PilotHandbook from "../src/assets/Pilot-Handbook.jpeg";
import WeightBalanceCertification from "../src/assets/weight-and-balance.png";
import AirworthinessCert from "../src/assets/airworthiness-cert.webp";
import PilotLicense from "../src/assets/PilotLicense.jpeg";

export const store = reactive({
  checks: [
    {
      id: 1,
      title: "AirWorthiness Certification",
      img: AirworthinessCert,
      valid: false,
      checkType: "Paper",
    },
    {
      id: 2,
      title: "Weight & Balance",
      img: WeightBalanceCertification,
      valid: false,
      checkType: "Paper",
    },
    {
      id: 3,
      title: "Handbook",
      img: PilotHandbook,
      valid: false,
      checkType: "Paper",
    },
    {
      id: 4,
      title: "License Valid",
      img: PilotLicense,
      valid: false,
      checkType: "Paper",
    },
    {
      id: 5,
      title: "Check for dents and corrosion",
      checkType: "Exterior",
      valid: false,
    },
    {
      id: 6,
      title: "Inspect exterior of aircraft for dirt, ice, or snow",
      checkType: "Exterior",
      valid: false,
    },
    {
      id: 7,
      title: "Check proper operation of ailerons, flaps, and rudders",
      checkType: "Exterior",
      valid: false,
    },
    {
      id: 8,
      title: "Check proper operation of horizontal stabilizer",
      checkType: "Exterior",
      valid: false,
    },
    {
      id: 9,
      title: "Inspect fuel tanks",
      checkType: "Exterior",
      valid: false,
    },
    {
      id: 10,
      title: "Inspect propeller(s)",
      checkType: "Exterior",
      valid: false,
    },
    {
      id: 11,
      title: "Verify fuel pressure",
      valid: false,
      checkType: "Interior",
    },
    {
      id: 12,
      title: "Verify oil pressure",
      valid: false,
      checkType: "Interior",
    },
    {
      id: 13,
      title: "Check settings and tunability of radio",
      valid: false,
      checkType: "Interior",
    },
    {
      id: 14,
      title: "Check navigational instrument health",
      valid: false,
      checkType: "Interior",
    },
    {
      id: 15,
      title: "Check fire extinguisher readiness",
      valid: false,
      checkType: "Interior",
    },
    {
      id: 16,
      title: "Ensure doors and windows are locked",
      valid: false,
      checkType: "Final",
    },
    {
      id: 17,
      title: "Turn on landing, taxi, and strobe lights",
      valid: false,
      checkType: "Final",
    },
    {
      id: 18,
      title: "Ensure transponder is on",
      valid: false,
      checkType: "Final",
    },
  ],
  paperworkValidationArray: [],
  exteriorValidationArray: [],
  interiorValidationArray: [],
  finalValidationArray: [],
  paperworkSectionValidation: false,
  interiorSectionValidation: false,
  exteriorSectionValidtion: false,
  finalSectionValidtion: false,
});
