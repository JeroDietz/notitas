const express = require('express');
const router = express.Router();

const controller = require('../controllers/controller');

router.get('/', controller.index);
router.post("/crear", controller.create); 
router.get("/detail/:id", controller.detail);
router.put("/detail/:id", controller.saveEdit);
router.delete("/delete/:id",controller.delete);

module.exports = router;