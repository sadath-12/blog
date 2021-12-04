import express from "express";
import bodyParser from "body-parser";
const app = express()
import router from "./routes/route.js";


app.use(bodyParser.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true }));

app.use(router)
app.use(express.json())


import Connect from "./db/db.js";
Connect()



const PORT = process.env.PORT || 5000

app.listen(PORT,()=>{
    console.log(`Server running ${PORT} `)
})