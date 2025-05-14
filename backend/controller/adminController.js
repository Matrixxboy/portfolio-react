const Admin = require('../models/Admin');
const generateToken = require('../utils/generateToken');


exports.loginAdmin = async (req ,res) =>{
    const {username , password } = req.boy;
    const admin = await Admin.findOne({ username });

    if(admin && (await admin.matchPassword(password))){
        res.json({
            _id : admin._id,
            username : admin.username,
            token : generateToken(admin._id)
        });
    }else{
        res.status(401);
        throw new Error('Invalid Username and password')
    }
};

exports.getAdminDashboard = (req,res)=>{
    res.json({message : 'welcome to the Admin Dashboard'});
};