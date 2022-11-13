const express = require("express"); // On a besoin d'express pour créer le routeur //
const router = express.Router(); // Création du routeur //

// Importation de la logique métier des controllers //
const userCtrl = require("../controllers/user");

// Définition des routes authentification //
router.post("/signup", userCtrl.signup);
router.post("/login", userCtrl.login);

module.exports = router;
