/************************************** APPLICATION **************************************/

// Importation du framework express. //
const express = require("express");
// Création de l'application qui utilisera le framework express. //
const app = express();
// Importation du module 'dotenv' pour masquer les informations de connexion à la base de données à l'aide de variables d'environnement. //
require("dotenv").config();
// Importation de mongoose pour se connecter à la base de données mongoDB. //
const mongoose = require("mongoose");
// Importation du module path qui nous permettra de travailler avec les chemins de fichiers et de répertoires. //
const path = require("path");
// Importation du module helmet destiné à sécuriser notre application de certaines vulnérabilités. //
const helmet = require("helmet");
// Importation du module nocache afin de désactiver la mise en cache côté client. //
const nocache = require("nocache");
const bodyParser = require("body-parser");
const cors = require("cors");
const userRoutes = require("./routes/user");
const postRoutes = require("./routes/post");
// const signup = require("./controllers/users");
// Importation du module mongoose sanitize afin de limiter le risque d'attaque par injection. //
const mongoSanitize = require("express-mongo-sanitize");
// Connexion à la base de données en utilisant les variables d'environnement pour ne pas exposer l'URI. //
mongoose
  .connect(process.env.DbUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));
app.use(cors());
app.use(bodyParser.json());
// Utilisation d'express.json pour les requêtes POST et PUT pour envoyer les données sous forme d'un objet de données. //
app.use(express.json());
// app.use(bodyParser.json());

// Utilisation d'helmet sur notre application. //
app.use(helmet());
// Utilisation de mongoSanitize sur notre application.//
app.use(mongoSanitize());

// Mise en place d'un middleware permettant au front d'accéder au back afin d'éviter les erreurs CORS dûes aux deux ports différents. //
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:4200");
  //  Entêtes qui seront utilisés après la vérification cross-origin afin de donner l'autorisation. //
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  // Méthodes de requêtes autorisées sur notre API. //
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

// Utilisation de nocache sur notre application. //
app.use(nocache());
app.use("/api/auth", userRoutes);
app.use("/api/post", postRoutes);
// Gestion des images contenues dans notre dossier. //
app.use("/images", express.static(path.join(__dirname, "images")));
// Export de l'application qui sera utilisée dans notre serveur. //
module.exports = app;
