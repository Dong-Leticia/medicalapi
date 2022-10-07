const express= require("express");
const connectDB = require('./config/connectDB')
const dotenv = require("dotenv");
const morgan = require("morgan");
const userRoute = require("./routes/userRoute");
const bookRoute = require("./routes/bookRoute");
const medicalRoute = require("./routes/medicalRoute");
const { bookingRouter } = require("./routes/bookRoute");

const app = express();
dotenv.config();
connectDB();

//middewares
app.use(express.json())
app.use("/api/user", userRoute)
app.use("/api/medical", medicalRoute)
app.use("/api/book", bookingRouter )

app.use(morgan("dev"))

app.get("/",(req,res) => {
    res.send("welcome to our medical consultancy")
 
})
// how to authenticate a user?

const PORT = process.env.PORT || 7000;

app.listen(PORT, () => {
     console.log(`server is running on ${PORT}`)
})

