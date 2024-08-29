// server/server.js
const express = require('express');
const connectDB = require('./config/db');
const formRoutes = require('./routes/formRoutes');
const bodyParser = require('body-parser');

const app = express();

// Conectar ao banco de dados
connectDB();

// Middleware
app.use(bodyParser.json());

// Rotas
app.use('/api/form', formRoutes);

// Porta do Servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
