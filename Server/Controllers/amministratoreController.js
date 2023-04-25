const ElencoStanze = require('../Models/elencoStanze');


module.exports={

    addStanza: async(req, res, next)=>{
        const newElement = new ElencoStanze({
            id:req.body.id,
            nome: req.body.nome,
            prezzo: req.body.prezzo,
            numPersone: req.body.numPersone,
            descrizione: req.body.descrizione,
            primaDataDisponibile: req.body.primaDataDisponibile
        });

        console.log('elemento inserito')

        newElement.save()
        next();

    },

    getStanza: async(req,res,next)=>{
        const elencoStanze = await ElencoStanze.find({})
            .catch(e => res.status(500).json({error: e}));

            res.json(elencoStanze)
    }, 


    deleteStanza: async(req,res,next)=>{
        console.log(req.body.nome)
        
        ElencoStanze.deleteOne({nome:req.body.nome})
            .then(data => res.json(data))
            .catch(e => res.status(500).json({error: e}));

    }, 

    aggiornaStanza: async (req,res,next)=>{
        ElencoStanze.updateOne({id:req.body.id}, {primaDataDisponibile: req.body.primaDataDisponibile})
        .then(() => res.json({message: 'aggiornamento effettuato'}))
    }

}