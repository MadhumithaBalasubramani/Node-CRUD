const connect=require('./connection')
const express=require('express')
const router=require('./Routes/studentRoutes')
const app=express();

app.use(express.json());
app.use(router);

connect();

const port=6000;
app.listen(port,()=>{
    console.log("server running on",port)
})
