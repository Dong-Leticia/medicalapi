const medical = require("../models/medicalSchema")

const createMedical = (req,res) => {
    const newMedical = new medical({
        name:req.body.name,
        profession:req.body.profession,
        licensenumber: req.body.licensenumber,
        yearsofexperience: req.body.yearsofexperience,
        expertise: req.body.expertise,
        address: req.body.address,
        contact: req.body.contact,
    })
    newMedical.save();
    res.status(200).json(newMedical)
}
//getting a medical
const getMedical = async(req, res) => {
    const medical =await medical.find();
    res.status(200).json(medical);
}

module.exports={createMedical, getMedical}