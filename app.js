const express = require('express')
const cors = require('cors');
const bodyParser = require('body-parser')
const app = express()
const port = 8000
// Importando Rotas

app.use(cors());

const alunosRoutes = require("./routes/AlunoRoutes")
const disciplinaRoutes = require("./routes/disciplinaRoutes")

app.use(bodyParser.json());

app.use('/alunos', alunosRoutes);
app.use('/disciplinas',disciplinaRoutes);

app.get('/', (req, res) =>{
    res.send("Olá mundo ")
})

app.listen(port, () =>{
    console.log(`servidor esta rodando na porta ${port}`)
})