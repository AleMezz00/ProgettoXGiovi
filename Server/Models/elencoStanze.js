const mongoose= require('mongoose');

const elencoStanze=  new mongoose.Schema({

    id:{
        type: Number,
        unique:true,
        maxlength:4,
        required: true
    },
    nome:{
        type: String,
        required: true
    },
    prezzo:{
        type: Number,
        required: true
    },
    numPersone:{
        type:Number,
        required:true
    },
    descrizione:{
        type: String,
        maxlength:150,
        required: true
    },
    primaDataDisponibile:{
        type: String,
        required:true
    }
    },
    {collection: 'elencoStanze' }
);

module.exports = mongoose.model('ElencoStanze', elencoStanze);