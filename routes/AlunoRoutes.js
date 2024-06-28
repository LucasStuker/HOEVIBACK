const { Router } = require("express");
const router = Router()
const alunosController = require ('../controllers/alunosController')

router.get('/', alunosController.listarAlunos);
router.post('/', alunosController.registrarAluno);

module.exports = router;
