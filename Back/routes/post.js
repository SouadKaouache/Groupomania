// /************************************** ROUTES SAUCE **************************************/

const express = require("express");
const router = express.Router();

const postCtrl = require("../controllers/post");
const auth = require("../middleware/auth");
const multer = require("../middleware/multer-config");

// CREATION DE LA SAUCE => Vérifie l'authentification, enregistre l'image et procède à la création et son enregistrement dans la base de données. //
router.post("/form", multer, postCtrl.createPost);
// RECUPERATION DE TOUTES LES SAUCES => Renvoi le tableau contenant l'ensemble des sauces présentes dans la base de données. //
router.get("/feed", postCtrl.getAllPosts);
//  RECUPERATION D'UNE SAUCE => Renvoi la sauce avec l'id. //
router.get("/:id", auth, postCtrl.getOnePost);
// MODIFICATION D'UNE SAUCE. => Met à jour la sauce et supprime l'image si une nouvelle est téléchargée. //
// router.put("/:id", auth, multer, postCtrl.modifyPost);
// SUPPRESSION D'UNE SAUCE => Supprime la sauce avec l'id. //
router.delete("/:id", postCtrl.deletePost);
// LIKE ET DISLIKE D'UNE SAUCE => Défini le like ou dislike mis par l'utilisateur. //
// router.post("/:id/like", auth, postCtrl.ratePost);

module.exports = router;
