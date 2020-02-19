const Bookmark = require("../models/model");
const validator = require("validator"); //install validator
const sh = require("shorthash"); //for decrypting

//listing the urls
module.exports.list = (req, res) => {
  Bookmark.find()
    .then(response => {
      res.json(response);
    })
    .catch(err => {
      res.json(err);
    });
};


//creating the url
module.exports.create = (req, res) => {
  const body = req.body;
  const url = body.OriginalURL;
  const result = validator.isURL(url);
  console.log(result)
  console.log(url)
  if (result) {
    const HashedURL = sh.unique(url);
    body.HashedURL = HashedURL;
    const bookmark = new Bookmark(body);
    bookmark
      .save()
      .then(bookmark => {
        res.json(bookmark);
      })
      .catch(err => {
        res.json(err);
      });
  } else {
    res.json("Validtion of url is failed");
  }
};

//view the url
module.exports.show = (req, res) => {
  const id = req.params.id;
  Bookmark.findById(id)
    .then(bookmark => {
      if (bookmark) {
        res.json(bookmark);
      } else {
        res.json(bookmark);
      }
    })
    .catch(err => {
      res.json(err);
    });
};

//delete the url
module.exports.destroy = (req, res) => {
  const id = req.params.id;
  Bookmark.findByIdAndRemove(id)
    .then(bookmark => {
      if (bookmark) {
        res.json(bookmark);
      } else {
        res.json(bookmark);
      }
    })
    .catch(err => {
      res.json(err);
    });
};

//update the url
module.exports.update = (req, res) => {
  const id = req.params.id;
  const body = req.body;
  Bookmark.findByIdAndUpdate(id, body)
    .then(bookmark => {
      if (bookmark) {
        res.json(bookmark);
      } else {
        res.json(bookmark);
      }
    })
    .catch(err => {
      res.json(err);
    });
};