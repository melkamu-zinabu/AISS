
// kechat gpt lay first do pagination then fil
import  express from "express";
import dotenv from 'dotenv'
import  CONNECTDB  from "./config/db.js"
//import {imageroute } from './routes/imageroute.js'
import cors from "cors"
import jobrouter from "./route/jobroute.js";
import userrouter from "./route/userroute.js";
import productrouter from "./route/productroute.js";
import newsrouter from "./route/newsroute.js";
import marketrouter from "./route/marketdata.js";
dotenv.config();

const app=express();
app.use(express.json());

// we are telling this application will use only json to communicate
app.use(cors({
   origin: 'http://localhost:3001', // specify the URL of the client that can make requests
   methods: ['GET', 'POST','DELETE','PUT'], // specify the methods that are allowed
 }));

const port=3000;
app.use('/',()=>{"hi"})

app.use('/user',userrouter)
app.use('/jobs',jobrouter)
app.use('/product',productrouter)
app.use('/news',newsrouter)
app.use('/market',marketrouter)
CONNECTDB().then(()=>{
        app.listen(port,MEL);

})


function MEL(){
    
        console.log(`bro running ${port}`);
}