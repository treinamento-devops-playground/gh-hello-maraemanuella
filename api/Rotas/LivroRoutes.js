const express = require('express');
const router = express.Router();
const livroController = require('../Controllers/LivroController');

router.get('/status', livroController.status);
router.get('/', livroController.buscarLivro);
router.post('/', livroController.adicionarLivro);
router.delete('/', livroController.removerLivro);

module.exports = router;