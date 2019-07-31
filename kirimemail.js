const nodemailer = require ('nodemailer')

const transporter = nodemailer.createTransport(
    {
        service: 'gmail',
        auth : {
            type : 'OAuth2',
            user: 'dhimashertianto@gmail.com',
            clientId: '927800865435-09fmaqc7rrfa9u3eilg641qhhi27rf2r.apps.googleusercontent.com',
            clientSecret: 'QKayAqcdHsdL1uUAN1zZscj_',
            refreshToken: '1/IuCLNc7MiAXA_DeHnBu0Z5t-CwAZV8i5weTRhDapL32zYPfGo3H_sR-fSp_qMt7D'
        }
    }
)

const mail = {
    from: 'fulan <akukamuselamanya@gmail.com>',
    to: 'putraa.nugroho@gmail.com',
    subject: 'BACA NIH !!',
    html: '<h1>teruskan pesan ini kalau berenti di kamu kan ada kesialan yang menghampiri</h1>'
}

transporter.sendMail(mail,(err,result) => {
    if(err)
        return console.log(err.message)
        console.log("masuk dong");
        
})