require('dotenv').config();
const express = require('express')
      userCtrl = require('./controllers/user'),
      postCtrl = require('./controllers/posts')
const session = require('express-session')
const massive=require ('massive')
const ctrl= require('./controllers/controller')
const ctrlr=require('../server/controllers/twilio')
const path=require('path')


const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET,USERNAME,PASSWORD } = process.env;

const app = express();
app.use(express.static(__dirname + '/../build'))
app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname ,'../build/index.html'))
})

app.use(express.json());

app.post('/api/sendSMS',ctrlr.sendSMS)

app.use(session({
    resave: true,
    saveUninitialized: false,
    secret: SESSION_SECRET,
    cookie: {
        maxAge: 100000  *60*60*24
    }
}))


app.post('/api/auth/register', userCtrl.register);
app.post('/api/auth/login', userCtrl.login);
app.get('/api/auth/me', userCtrl.getUser);
app.post('/api/auth/logout', userCtrl.logout);


app.get('/api/posts', postCtrl.readPosts);
app.post('/api/post', postCtrl.createPost);
app.get('/api/post/:id', postCtrl.readPost);
app.delete('/api/post/:id', postCtrl.deletePost)
app.put('/api/title',postCtrl.updatePost)

app.post('/api/email',ctrl.email)

massive({
    connectionString: CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false}
})



.then(dbInstance => {
    app.set('db', dbInstance);
    app.listen(SERVER_PORT, () => console.log(`DB up & Server running on ${SERVER_PORT}`));
})
.catch(err => console.log(err));