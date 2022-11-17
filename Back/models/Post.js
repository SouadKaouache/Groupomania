/************************************** MODELE SAUCE **************************************/

// Importation de mongoose qui nous servira à faire le lien entre notre serveur Node.js et le serveur MongoDB. //
const mongoose = require("mongoose");
// Création du schéma des sauces. Les objets soumis ne pourront différer de ce schéma. //
const postSchema = mongoose.Schema({
  userId: { type: String, required: true },
  email: { type: String, required: true },
  content: { type: String, required: true },
  imageUrl: { type: String, required: true },
  likes: { type: Number },
  usersLiked: { type: [String] },
});

// Export du module pour l'utiliser ailleurs. //
module.exports = mongoose.model("Post", postSchema);
