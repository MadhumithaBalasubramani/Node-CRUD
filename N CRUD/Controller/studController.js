const mongoose=require('mongoose')
const user=require('../Models/studentDatamodel')
const StudentPost=async(req,res)=>{
    try{
        const {name,department,email,phonenumber}=req.body;
        const create=new user({name,department,email,phonenumber});
        await create.save()
        res.json({
            data:create
        })
    }
    catch(error){
        res.json({
            Error:error.messsage
        })
        }
}
const getData=async(req,res)=>{
    try{
        const getName = req.params.name;
        const userGet=await user.find({name:getName})
        res.json({
            create:userGet,
        })
    }
    catch(error){
        res.json({
            Error:error.messsage
        })
    }
}
const userDataEdit=async(req,res)=>{
    try {
    const {name,department,email,phonenumber}=req.body;
    const objectId= req.params.id;
    const saveStuddetails=await user.findByIdAndUpdate(objectId,
      {name,department,email,phonenumber},{new : true});
    
    res.json({
      data:saveStuddetails
  })
    
  }
  catch(error){
    res.json({
      Error:error.message
  })}
  };

  const deleteUserData = async (req, res) => {
    try {
      const objectId = req.params.id;
      const deleteData = await user.findByIdAndDelete(objectId);
      res.json({
        data: deleteData,
        Message: "data deleted",
      });
    } catch (error) {
      res.json({
        Error: error.message,
        Message: "not deleted",
      });
    }
  };
module.exports={StudentPost,getData,userDataEdit,deleteUserData};