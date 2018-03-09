const express = require('express'),
  router = express.Router(),
  path = require('path'),
  config = require('../resources/config')(),
  Mailgun = require('mailgun-js'),
  staticFiles = __dirname + '../../../../build/';

let api_key = 'key-6a92bcfb812ee02ff7c1224aa13f26cc',
  domain = 'sandbox8dc8980d5e7f4e5c99819492da1a6aa3.mailgun.org',
  to = 'marina.todorishina@gmail.com';


router.use(express.static(staticFiles));

router.get('/', function (request, response) {
  response.setHeader('content-type', 'application/javascript');
  response.sendFile(path.join(staticFiles + 'index.html'));
});

router.post('/submit', function (request, response) {

  console.log(response)
  let mailgun = new Mailgun(config),
    data = {
      from: 'marina.todorishina@gmail.com',
      to: to,
      subject: 'Resume',
      html: `To: ${request.body.email};
       Name: ${request.body.name}; 
       Message: ${request.body.msg}.`
    }

  mailgun.messages().send(data, function (err, body) {

    if (err) {
      response.status(body ? 200 : 500).send(body);
      console.log('error: ' + err);
    } else {
      response.status(body ? 200 : 500).send(body);
      console.log(body);
    }

  })
});


module.exports = router;