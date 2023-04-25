const User = require('../Models/user')
const bcrypt = require('bcrypt')

module.exports = {

    loginAmm: async(req,res,next)=>{

        const { username, password } = req.body
	    const user = await User.findOne({ username }).lean()

        if (!user) {
            console.log("username errato")
            return res.send({message:'Username o password errati!' });
        }

        if (await bcrypt.compare(password, user.password)) {
            console.log("password coincide")
            return res.send(user);
        }

        console.log("password errata")
        res.send({message:'Username o password errati!' });
    },

    addAmministratore: (req,res, next)=>{
    
        console.log(req.body);
        const amministratore = new User({
            username: req.body.username,
            password:req.body.password
        });
    
        amministratore.save()
        .then(console.log('inserimento avvenuto correttamente'))

        next();

    }
  
}