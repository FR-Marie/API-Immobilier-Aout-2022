//Appel du framework EXPRESS:
const express = require('express');

//app = instance de EXPRESS (équivalent à new Express)
const app = express();

//CORS (Cross Origin Ressources Sharing), pour les requêtes multidomaines interdites par défaut
const cors = require('cors');

//Appel des modules de node
//path fournit les utilistaires pour travailler avec les chemins de fichiers et de répertoires
const path= require('path');

//fs pour filesystem, module node (permet d'écrire de manière synchrone dans notre fichier)
const filesystem = require('fs')

//Notre hôte = ip locale
const hote = "127.0.0.1";

//Notre port d'écoute = https://localhost:3000 ou https://127.0.0.1:3000
const port = 3000;

//Le corps des requêtes HTTP
const bodyParser = require('body-parser');


///////////////////////////////////////CORS////////////////////////////////////////////
//AUTORISER CORS
app.use(cors())

//Les middlewares de body-parser=>
//1-pour l'analyse des entêtes des requêtes au format application/json
app.use(express.json());
//2-pour l'analyse des entêtes des requêtes au format application/text
app.use(express.urlencoded({
    extended: true
}))
//3-pour l'analyse du BODY des requêtes au format application/json
app.use(bodyParser.json());
//4-pour l'analyse du corps des quêtes au format application/text
app.use(bodyParser.urlencoded({
    extended: false
}))




///////////////////////////////////////APPEL DU JSON////////////////////////////////////////////
//Appel des données de notre .json  (OBJET!)
const parcImmobilier = require('./parcImmobilier.json');

///////////////////////////////////////ROUTES////////////////////////////////////////////
app.get('/parcImmobilier', (request, response) =>{
    //pour que le CSS fonctionne
    app.use(express.static(__dirname + '/'))
    //route de la page d'accueil
    response.sendFile(path.join(__dirname + '/accueil.html'))
    response.end(JSON.stringify(parcImmobilier));
})

///////////////////////////////////////LE PORT D'ECOUTE DU SERVEUR////////////////////////////////////////////
app.listen(port, () =>{
    console.log(`le serveur fonctionne sur l'adresse: http://${hote}:${port}/parcImmobilier`)
})

