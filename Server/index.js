const express = require('express');
const mongoose=require('mongoose');
const cors = require('cors')

const app = express();

const elencoRouter = require ('./Routes/elencoRouter')
const loginRouter = require('./Routes/loginRouter')


//connessione database
mongoose.connect('mongodb+srv://progettoEsame:progettoEsame@progettoesame.7yja80i.mongodb.net/progettoEsame', {
	useNewUrlParser: true,
	useUnifiedTopology: true
})
const db = mongoose.connection

db.once('open',()=>{
    console.log('database connesso correttamente')
})

app.use(cors());
app.set("view engine", "ejs");
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/elencoStanze', elencoRouter)
app.use('/amministratore', loginRouter)


//connessione al server
app.listen(9000, ()=>{
    console.log('Server connesso alla porta 9000')
})