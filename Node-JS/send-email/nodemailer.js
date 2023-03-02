const nodemailer = require("nodemailer");
let transporter=nodemailer.createTransport({
    service:"gmail",
    port:587,
    secure:false,
    auth:{
        user:"galineelam10@gmail.com",
        pass:"swfhmwfdmqnzvkqx"
    }
});
let mailOptions={
    from:'galineelam10@gmail.com',
    to:['galineelam73@gmail.com'],
    subject:"Testing Mail",
    text:"Hello test mail",
    html:''
}
transporter.sendMail(mailOptions,(err,info)=>{
    if(err){ console.log(err)}
    else{
         console.log("Mail send : "+info)
    }
})
