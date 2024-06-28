const fs = require('fs').promises;
const path= require('path');

const filePath = path.join(__dirname, '../data/disciplina.json');

exports.listarDisciplinas = async (req, res) => {
    try{
        const data = await fs.readFile(filePath, 'utf8');
        const disciplinas = JSON.parse(data);
        res.json(disciplinas);
    } catch(error) {
        res.status(500).send('erro ao ler aluno');
    }
}

exports.adcionarDisciplinas = async (req, res) => {
    try {
        const data = await fs.readFile(filePath, 'utf8')
        const disciplinas = JSON.parse(data);
        const novaDisciplina = req.body;

        const maxId = disciplinas.length ? Math.max(...disciplinas.map(disciplina => disciplina.id)) : 0;
        novaDisciplina.id = maxId + 1;
        
        disciplinas.push(novaDisciplina);

        await fs.writeFile(filePath, JSON.stringify(disciplinas, null, 4));
        res.status(201).send("Disciplina registrada") 
    } catch (error) {
        res.status(500).send("Erro ao registrar a disciplina")
    }
}

