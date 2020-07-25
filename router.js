const express = require("express");
const router = express.Router();
const customId = require('custom-id')

const Data = require("./Model");

router.get("/", async (req, res) => {
  const data = await Data.find({});
  res.status(200).send(data);
});

router.post("/", async (req, res) => {
  const url = await Data.create({
    longUrl: req.body.url,
    shortUrl: customId({ name: req.body.url, lowerCase: true })
  });
  res.send(url);
});

module.exports = router;
