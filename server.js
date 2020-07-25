const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Data = require('./Model');

mongoose.connect("mongodb://localhost:27017/simplify",{
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const app = express();

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(cors());

const url = require('./router');

app.use('/api/v1/url',url)
app.get('/:shortUrl', async (req,res) => {
  const url = await Data.findOne({ shortUrl: req.params.shortUrl })
  res.redirect(url.longUrl)
})

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`server is up at : ${port}`);
});
