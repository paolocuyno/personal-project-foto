//import nodemailer
const nodemailer = require('nodemailer')

//import environment variables for your email
const { EMAIL, PASSWORD } = process.env

module.exports = {
  email: async (req, res) => {
    const { name, message, email, title} = req.body

    try {
      //invoke the createTransport function passing in your email information. 
      let transporter = nodemailer.createTransport({
        service: 'yahoo',
        auth: {
          user:"fotoupdates@yahoo.com",
          pass: "axsuefqurctyjkko"
        }
      });

      //invoke the sendMail function with the info in the email
      let info = await transporter.sendMail({
        from: `fotoupdates@yahoo.com`, //This will show up when you go into the email
        to: email,
        subject: title, //This will show on the subject of the email
        text: message, //for clients with plaintext support only
        html: `<div>${message}<div> 
              <img src="cid:unique@nodemailer.com"/>`,
        attachments: [
          { //this is the attachment of the document
            filename: 'license.txt',
            path: 'https://raw.github.com/nodemailer/nodemailer/master/LICENSE'
          },
          { //this is the embedded image
            cid: 'unique@nodemailer.com', //same cid value as in the html img src
           
          }
        ]
      }, (err, res) => {
        if (err) {
          console.log('err', err)
        } else {
          console.log('res', res)
          res.status(200).send(info)
        }
      })
    } catch (err) {
      console.log(err)
      res.sendStatus(500)
    }
  }
}