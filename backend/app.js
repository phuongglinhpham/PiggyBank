const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./routes/userRouter");
const app = express();


//Connect to mongodb
mongoose
    .connect("mongodb+srv://phamthucquyen:Washingtonandlee1!@piggybank.jdvvd.mongodb.net/")
    .then(() => console.log("DB Connected"))
    .catch((e) => console.log(e));

//Middlewares
app.use(express.json());  //Pass incoming json data
//Routes
app.use("/", userRouter);

//Start the server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server is running on this port... ${PORT}`));
