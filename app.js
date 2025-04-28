const express = require('express');
const bodyParser = require('body-parser');
const path = require('path'); // <<<<<< Adicionado
const app = express();

// Importação do controller
const tarefaController = require('./src/controllers/tarefaController');

// Configurações
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); // <<<<<< Adicionado
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));

// Rotas
app.get('/', tarefaController.exibirTarefas);
app.get('/adicionar', (req, res) => res.render('adicionarTarefa'));
app.post('/adicionar', tarefaController.adicionarTarefa);
app.get('/remover/:id', tarefaController.removerTarefa);

// Inicialização
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));