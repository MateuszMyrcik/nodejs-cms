const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res) =>  {
  res.render('index', { title: 'Express',title2 : '1'  });
});

module.exports = router;
