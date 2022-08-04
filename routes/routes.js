var express = require('express');
var router = express.Router();
const indexController = require("../controllers/indexControllers");


router.get('/', indexController.index);
router.get('/:category', indexController.category);
router.get('/stream/:category_id/:channel_id', indexController.stream);

module.exports = router;
