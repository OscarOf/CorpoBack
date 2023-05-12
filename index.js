const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

const app = express();
const PORT = process.env.PORT;

const connectionOptions ={ useUnifiedTopology: true,
    useNewUrlParser: true, useFindAndModify: false};

app.use(express.json());
app.use(cors(header('Access-Control-Allow-Origin', '*')));

mongoose.connect("mongodb+srv://fundacionsemillac3:1235@fundacionsemilladonacio.j2cjyrm.mongodb.net/?retryWrites=true&w=majority").then(() => console.log("Connected Successfully")).catch((err) => console.log(err));

//mongoose.connect("mongodb://127.0.0.1:27017/FundacionSemillas").then(() => console.log("Connected Successfully")).catch((err) => console.log(err));

app.use("/", require('./routes'));

app.listen(PORT, ()=>{
    console.log("Mi puerto es "+ PORT);
}); 