const express = require('express')
const amministratoreRouter =express.Router();

const loginController = require('../controllers/loginAmministratore')

//login
amministratoreRouter.get("/login", (req, res) => {
    res.render("loginAmministratore");
  });
amministratoreRouter.post("/login", loginController.loginAmm );

//registrazione
amministratoreRouter.get("/registrazione", (req, res) => {
    res.render("registrazioneAmministratore");
  });
amministratoreRouter.post("/registrazione", loginController.addAmministratore )

module.exports= amministratoreRouter;