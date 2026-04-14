// app.js
const express = require('express');
const connection = require('./back_end/database/db');  // Importar a conexão com o banco de dados

// Criar a aplicação Express
const app = express();

// permite que arquivos estaticos funcionem ao mesmo tempo que o node.js
app.use(express.static(__dirname + '/front_end'));

//(INICIO) Rotas para as paginas HTML

// Rota para pagina Inicio/index, responsavel por iniciar o site na pagina inicial
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/front_end/pages/index.html'); // Vai servir o arquivo HTML
});


//(FIM) Rotas para as paginas HTML


// servidor na porta 3000
app.listen(3000, () => {
  console.log("Servidor iniciado na porta 3000: http://localhost:3000");
});