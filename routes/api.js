const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Welcome to the API! Please use the /api/ endpoint to access the API.");
});

module.exports = router;
