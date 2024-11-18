const express=require('express');
const router=express.Router();
const {StudentPost,getData, userDataEdit, deleteUserData}=require('../Controller/studController');
router.post('/post',StudentPost);
router.get('/get/:dataname',getData);
router.put('/edit/:id',userDataEdit);
router.delete('/delete/:id',deleteUserData)
module.exports=router;
