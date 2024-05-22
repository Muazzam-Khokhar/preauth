import express from "express";
import cors from 'cors'
import bodyParser from "body-parser";
import preAuthRoutes from './routes/preAuthRoutes.js'
import providerRouters from './routes/providerRoutes.js'
import connectDB from "./config/db.js";

connectDB();

const app = express();
app.use(express.json())
app.use(cors())
app.use(bodyParser())

app.get('/',(req,res)=>{
    res.send('Api is running')
})
app.use('/api/preauth/', preAuthRoutes)
app.use('/api/provider/', providerRouters)

const PORT  = process.env.PORT || 5000 ;
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}...`)
})