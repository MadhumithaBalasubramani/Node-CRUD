const mongoose=require('mongoose')
const dataBase=new mongoose.Schema({
    name:{
        type:String
    },
    department:{
        type:String
    },
    email:{
        type:String
    },
    phonenumber:{
        type:String
    }
})
const user=mongoose.model('CRUD',dataBase)

module.exports=user;
