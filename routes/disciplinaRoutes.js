const { Router } = require("express");
const router = Router()
const disciplinaController = require('../controllers/disciplinaController')

router.get('/', disciplinaController.listarDisciplinas);
router.post('/', disciplinaController.adcionarDisciplinas);

module.exports = router;