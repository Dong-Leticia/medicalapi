const mongoose = require("mongoose")

const medicalschema = mongoose.Schema({
name: {
   type: String,
   require: true
   
},
profession: {
   type: String,
   require: true,
   unique: true
},
licensenumber: {
   type: String,
   require: true
},
yearsofexperience: {
   type: String,
   require: true
},
expertise: {
   type: Array,
   require: true,
},
Address: {
   gps: String,
   box: String
},
contact: {
   phone: String,
   email: String,
}
},{
   timestamps:true
}
)
const Medical = mongoose.model("medical",medicalschema)
module.exports=Medical
