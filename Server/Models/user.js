const mongoose= require('mongoose');
const bcrypt = require('bcrypt')

const userSchema=  new mongoose.Schema({

    username:{
        type: String,
        unique:true,
        required: true
    },
    password:{
        type: String,
        required: true
    }
    },
    {collection: 'Amministratore' }
);

userSchema.pre("save", function(next){
    let user = this;
    bcrypt.hash(user.password,10).then(hash=>{
            user.password = hash;
            next();
    })
})

module.exports = mongoose.model('Amministratore', userSchema);