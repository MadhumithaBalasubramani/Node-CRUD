const mongoose=require('mongoose');
const mongo_url='mongodb+srv://madhumitha:Madhu@madhu.psyhljz.mongodb.net/?retryWrites=true&w=majority&appName=Madhu'
const connect=()=>{
    mongoose.connect(mongo_url)
    .then(()=>{
        console.log("mongodb connected")
    })
    .catch((error)=>{
        console.log("not connected",error.message)
    })
}
module.exports=connect;