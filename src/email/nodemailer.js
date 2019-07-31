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

const mailVerify = (user) => {
    var {name, username, email} = user

    const mail = {
        from: 'Alvin Rochafi <alvinrochafi@gmail.com>',
        to: email,
        subject: 'Hello from the other side',
        html: `<h1>HELLO ${name}, ITS MEH</h1>
        <a href='http://localhost:2019/verify?uname=${username}' >Klik untuk verifikasi</a>`
    }
    
    transporter.sendMail(mail, (err, result) => {
        if(err) return console.log(err.message)
    
        console.log('Alhamdulillah ya berhasil')
    })
}

module.exports = mailVerify