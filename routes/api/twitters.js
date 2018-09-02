const express = require("express");
const router = express.Router();
const twitterClient = require("../../twitter");

// Search Input Validation
const validateSearchInput = require("../../validation/search");

// @route POST api/twitters/search
// @desc Search Twitter by hashtags and count
// @access Public
router.post("/search", (req, res) => {
  const { errors, isValid } = validateSearchInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }
  
  // Reconstruct Query
  const query = req.body.query;
  const count = parseInt(req.body.count);
  const result_type = "mixed";
  twitterClient
    .get("/search/tweets.json", { q: query, result_type, count })
    .then(data => {
      // Deal with incoming data
      const resData = data.statuses.map(item => {
     
          created_at = item.created_at;
      
        return {
          _id: item.id,
          id_str: item.id_str,
          created_at
        };
      });
      res.json(resData);
    })
    .catch(err => {
      return res.status(404).json(err);
    });
});

module.exports = router;
