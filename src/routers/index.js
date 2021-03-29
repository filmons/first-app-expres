const express = require("express");

const promoController = require("../controllers/listsController");

const router = express.Router();

router.get("/", promoController.findAll);
router.get("/see/:id",promoController.findtache);
router.post("/lists", promoController.addOne);


module.exports = router;