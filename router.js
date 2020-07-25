const express = require("express");
const router = express.Router();

const Data = require("./Model");

router.get("/", async (req, res) => {
  const data = await Data.find({});
  res.status(200).send(data);
});

router.post("/", async (req, res) => {
  const url = await Data.create({
    longUrl: req.body.url
  });
  res.send(url);
});

module.exports = router;
