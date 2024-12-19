const express = require('express');
const app = express();
app.use(express.json());


// Importando os Models
const livroRoutes = require('./Rotas/LivroRoutes');
app.use('/bg', livroRoutes);




const PORT =  3001;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});