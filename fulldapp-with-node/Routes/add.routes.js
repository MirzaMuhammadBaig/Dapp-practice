const express = require("express");
const addRecordController = require("../Controllers/add.controller");
const router = express.Router();
const cors = require("cors");
const bodyParse = require("body-parser");

router.post("./AddPersonRecord", cors(), addRecordController.AddPersonRecord);
router.get("./GetPersonRecord", cors(), addRecordController.GetPersonRecord);

module.exports = router;
