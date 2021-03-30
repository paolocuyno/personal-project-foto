const bcrypt= require('bcryptjs')

module.exports = {
    register: async (req, res) => {
     
        const db = req.app.get('db');

      
        const { username, password} = req.body;
        let profile_pic='https://robohash.org/${username}.png'
        const [existingUser]=await db.user.find_user_by_username([username])
        // const [existingUser] = result[0]

            if (existingUser) {
                return res.status(409).send('User already exists')
            }
            if (!existingUser){

            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(password, salt)

            const newUser  = await db.user.create_user(username, hash, profile_pic);
            let user=newUser[0]
            req.session.user = {username:user.username,id:user.id,profile_pic:user.profile_pic};
            
            return res.status(200).send(req.session.user);
}
        
        }
    ,
    login: (req, res) => {
     
        const db = req.app.get('db'); 

        
        const { username, password } = req.body;

        db.user.find_user_by_username(username)
        .then(([existingUser])=>{
            console.log(existingUser)
            if(!existingUser){
                return res.status(403).send('Incorrect username')
            }
            const isAuthenticated= bcrypt.compareSync(password, existingUser.password)

            if (!isAuthenticated){
                return res.status(403).send('Incorrect password')
            }
            delete existingUser.password;

            req.session.user= existingUser;
            
            res.status(200).send(req.session.user)
            })

        },
        logout: (req, res) => {
            req.session.destroy();
            res.sendStatus(200);
        },
        getUser: (req,res) =>{
            const db=req.app.get('db')

            db.user.find_user_by_username()
            .then(dbres =>{
                res.status(200).send(dbres)
            })
            .catch(err=>console.log(err))
        }
    }

