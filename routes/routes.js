var express = require("express");
var app = express();
var router = express.Router();
const HomeController = require("../controllers/HomeController");
const AuthController = require("../controllers/AuthController");

router.get('/', HomeController.index);
router.get('/users', HomeController.users);
router.post('/user', HomeController.createUser);

//Auth Routes
router.post('/login', AuthController.login);
module.exports = router;