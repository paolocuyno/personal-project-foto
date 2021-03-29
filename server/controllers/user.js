const bcrypt= require('bcryptjs')

module.exports = {
    register: async (req, res) => {
     
        const db = req.app.get('db');

      
        const { username, password, profile_pic} = req.body;

        try {
            const [existingUser] = await db.user.find_user_by_username(username)

            if (existingUser) {
                return res.status(409).send('User already exists')
            }

          
            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(password, salt)

            const [ newUser ] = await db.user.create_user(username, hash, profile_pic);

            req.session.user = newUser;

            res.status(200).send(newUser);

        } catch(err) {
            console.log(err);
            return res.sendStatus(500);
        }
    },
    login: (req, res) => {
     
        const db = req.app.get('db'); 

        
        const { username, password } = req.body;

        db.find_user_by_username(username)
        .then(([existingUser])=>{
            if(!existingUser){
                return res.status(403).send('Incorrect username')
            }
            const isAuthenticated= bcrypt.compareSync(password, existingUser.hash)

            if (!isAuthenticated){
                return res.status(403).send('Incorrect password')
            }
            delete existingUser.hash;

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

            db.find_user_by_username()
            .then(dbres =>{
                res.status(200).send(dbres)
            })
            .catch(err=>console.log(err))
        }
    }

