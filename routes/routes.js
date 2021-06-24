var express = require("express");
var app = express();
var router = express.Router();
const HomeController = require("../controllers/HomeController");

router.get('/', HomeController.index);
router.get('/users', HomeController.users);
router.post('/user', HomeController.createUser);

module.exports = router;