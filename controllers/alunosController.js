const fs = require('fs').promises;
const path= require('path');

const filePath = path.join(__dirname, '../data/aluno.json');

exports.listarAlunos = async (req, res) => {
    try{
        const data = await fs.readFile(filePath, 'utf8');
        const alunos = JSON.parse(data);
        res.json(alunos);
    } catch(error) {
        res.status(500).send('erro ao ler aluno');
    }
}

exports.registrarAluno = async (req, res) => {
    try{
        const data = await fs.readFile(filePath, 'utf8');
        const alunos =  JSON.parse(data)
        const novoAluno = req.body;

        const maxId = alunos.length ? Math.max(...alunos.map(aluno => aluno.id)) : 0;
        novoAluno.id = maxId + 1;
       
        alunos.push(novoAluno);
        
        await fs.writeFile(filePath,JSON.stringify(alunos, null, 4));
        res.status(201).send('Aluno Registrado com sucesso');   
    } catch (error){
        res.status(500).send("Erro ao registrar o aluno ")
    }
}
exports
