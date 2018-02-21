const express = require('express'),
  router = express.Router();

router.get('/', (requst, response) => {
  response.setHeader('content-type', 'application/javascript');
  response.sendFile(path.join(__dirname + '../../public/index.html'));
});

module.exports = router;