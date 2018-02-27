const express = require('express'),
  router = express.Router(),
  path = require('path'),
  staticFiles = __dirname + '../../../../build/';

router.use(express.static(staticFiles));

router.get('/', function(requst, response) {
  response.setHeader('content-type', 'application/javascript');
  response.sendFile(path.join(staticFiles + 'index.html'));
});

module.exports = router;