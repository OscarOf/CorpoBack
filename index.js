const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");



const app = express();
const PORT = process.env.PORT;

const connectionOptions ={ useUnifiedTopology: true,
    useNewUrlParser: true, useFindAndModify: false};

app.use(express.json());
app.use(cors);

mongoose.connect("mongodb+srv://fundacionsemillac3:1235@fundacionsemilladonacio.j2cjyrm.mongodb.net/?retryWrites=true&w=majority").then(() => console.log("Connected Successfully")).catch((err) => console.log(err));

//mongoose.connect("mongodb://127.0.0.1:27017/FundacionSemillas").then(() => console.log("Connected Successfully")).catch((err) => console.log(err));

app.use("/", require('./routes'));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.listen(PORT, ()=>{
    console.log("Mi puerto es "+ PORT);
}); 