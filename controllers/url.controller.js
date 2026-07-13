const Url = require("../models/url.model");
const crypto = require('crypto')

const getShortUrl = async (req, res) => {
  const url = await Url.findOne({ alias: req.params.alias });
  if (!url) {
    return res.status(404).send("URL Not Found");
  }
  res.redirect(url.url);
};

const addLongUrl = async (req, res) => {
  let alias = req.body.alias;
  if(!alias){
    alias = crypto.randomBytes(4).toString('hex')
  }

  const exist = await Url.findOne({ alias: req.body.alias  });
  if (exist) {
    return res.status(400).json({
      message: "Alias already exists",
    });
  }
  const url = await Url.create({
    url : req.body.url,
    alias
  });

  res.status(200).json({
    message: "Created Successfully",
    data: url,
  });
};

module.exports = {
  getShortUrl,
  addLongUrl,
};
