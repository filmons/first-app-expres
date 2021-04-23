
const express = require("express");
const isAuth = require('../middlewares/isAuth')

const promoController = require("../controllers/listsController");
const usersController = require("../controllers/userController")

const router = express.Router();

router.get("/", promoController.findAll);
router.get("/see/:id", promoController.findtache);
router.post("/lists", promoController.addOne);
router.get("/see/delete/:id", promoController.deleteUser) 

router.get("/signup",usersController.signup)
router.post("/signup", usersController.newAccount)
router.get("/login",usersController.login)
router.post("/login",usersController.authenticate)





module.exports = router;

// const express = require("express");

// const promoController = require("../controllers/listsController");

// const router = express.Router();

// router.get("/", promoController.findAll);
// router.get("/see/:id",promoController.findtacheDetail);
// router.post("/lists", promoController.addOne);




// module.exports = router;