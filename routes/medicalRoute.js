const { createMedical, getMedical } = require("../controllers/medicalControllers")
const { Router } = require("express")

const router = Router();

router.post("/addmedicals", createMedical)

router.get("/medical", getMedical)

module.exports= router