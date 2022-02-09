const express = require('express');
// need validation module
const indexController = require('../../controllers/index.controller');

const router = express.Router();

router.route('/').get(indexController.getHomePage);

module.exports = router;
