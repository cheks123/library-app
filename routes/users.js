var express = require('express');
var router = express.Router();
const userController = require("../controllers/userController")

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.get('/register', userController.register)
router.post('/register', userController.register)

router.get('/login', userController.login)
router.post('/login', userController.login)

router.get('/logout', userController.logout)


module.exports = router;
