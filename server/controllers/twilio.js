const {TWILIO_ACCOUNT_SECRET_ID,TWILIO_AUTH_TOKEN,PERSONAL_PHONE_NUMBER,TWILIO_PHONE_NUMBER} = process.env

module.exports = {
    sendSMS: (req, res) => {
        const {name,message,number} = req.body
        const accountSid = TWILIO_ACCOUNT_SECRET_ID;
        const authToken = TWILIO_AUTH_TOKEN; //declaring these as these variables or you could just put them directly as the arguments in the invocation below
        const client = require('twilio')(accountSid, authToken);

        client.messages
            .create({
                body: `${name},` + ' check out this new site I started using! foto.io',
                from: TWILIO_PHONE_NUMBER,
                to: `${number}`
            })
            .then(message => {
                console.log(message)
                //Do something with this information
                res.send(message)
            }).catch(err=>{
                console.log(err)
                res.sendStatus(500)
            })

    }

}