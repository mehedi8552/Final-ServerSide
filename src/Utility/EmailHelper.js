
const nodemailer =  require('nodemailer');


const EmailSend = async (EmailTo,EmailText,EmailSubject)=>{

let  transport = nodemailer.createTransport({
    host:"mail.teamrabbil.com",
    port:25,
    source:"false",
    auth:{user:"info@teamrabbil.com",pass:'~sR4[bhaC[Qs'},
    tls:{rejectUnauthorized:false},
 })

 let mailOption = {
    from :'Mern Ecommers solution <info@teamrabbil.com>',
    to:EmailTo,
    subject:EmailSubject,
    text:EmailText
 }

 return await transport.sendMail(mailOption);
}

module.exports= EmailSend;