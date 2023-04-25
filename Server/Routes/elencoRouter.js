const express = require('express')
const elencoRouter = express.Router();

const amministratoreController = require('../Controllers/amministratoreController')

//per visualizzare le stanze presenti nel database
elencoRouter.get("/", amministratoreController.getStanza)

//per eliminare una stanza
elencoRouter.post("/eliminaStanza", amministratoreController.deleteStanza)

//per inserire una stanza nell'elenco
elencoRouter.post("/inserisciStanza", amministratoreController.addStanza)

//per aggiornare la data di disponibilità di una stanza
elencoRouter.post("/aggiornaStanza", amministratoreController.aggiornaStanza)

module.exports = elencoRouter;