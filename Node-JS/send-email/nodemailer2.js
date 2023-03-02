const nodemailer = require("nodemailer");
const hbs = require('nodemailer-express-handlebars');
let transporter=nodemailer.createTransport({
    service:"gmail",
    port:587,
    secure:false,
    auth:{
        user:"galineelam10@gmail.com",
        pass:"swfhmwfdmqnzvkqx"
    }
});
transporter.use('compile',hbs(
    {
        viewEngine:"nodemailer-express-handlebars",
        viewPath:"emailTemplates/"
    }
))
let mailOptions={
    from:'galineelam10@gmail.com',
    to:['galineelam73@gmail.com'],
    subject:"Testing Mail",
    template:'mail'
}
transporter.sendMail(mailOptions,(err,info)=>{
    if(err){ console.log(err)}
    else{
         console.log("Mail send : "+info)
    }
})
