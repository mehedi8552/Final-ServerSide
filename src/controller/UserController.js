const {
    UserOTPService,
    VarifyOTPService,
    LoginService,
    //SaveProfileService,
    //ReadProfileService

}= require('../Services/UserServices')




exports.UserOTP = async(req,res)=>{
    let result = await UserOTPService(req);
    res.status(200).json(result)
}
exports.VarifyOTP = async(req,res)=>{
    let result = await VarifyOTPService(req);

    if(result['status'] === 'success'){

        let cookieOption = {expires: new Date(Date.now()+24*6060*1000),httpOnly:false}
        res.cookie('token',result['token'],cookieOption)
        return res.status(200).json(result)
    }else{
        res.status(200).json(result);
}
}
exports.Login = async(req,res)=>{
    let result = await LoginService(req);
    if(result['status'] === "success" ){
        //Cookies Option
        let cookieOption = {expires: new Date(Date.now()+24*6060*1000),httpOnly:false}
        // Set Cookies With responce 
        res.cookie('token',result['token'],cookieOption);
        return res.status(200).json(result); 
    }else{
        res.status(200).json(result);
    }
}

exports.UserLogOut = async (req,res)=>{
    let cookieOption = {expires:new Date(Date.now()-24*6060*1000),httpOnly:false} ;
    res.cookie('token','',cookieOption);
    return res.status(200).json({status:"success"})
}