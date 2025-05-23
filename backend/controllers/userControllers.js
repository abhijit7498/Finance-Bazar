const User = require("../models/User");

const updateUserProfile=async(req,res)=>{
const {email,phone,updatedata}=req.body;

try {
    if(!email&&!phone){
        return res.status(400).json({message:"Email or mobile number atleast one required",success:false})
    }

    const updateuser=await User.findOneAndUpdate({
        $or:[
            {email:email||null},
            {phone:phone||null},
            {$set:updatedata},
            {new:true}
        ]
    })

    if(!updateuser){
        return res.status(400).json({message:"user not found", success:false});
    }

    return res.status(200).json({message:"User Update Successfull"});
} catch (err) {
     res.status(500).json({ message: 'Server error', error: err.message });

}
}

module.exports={updateUserProfile}