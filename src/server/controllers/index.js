const express = require('express'),
  router = express.Router(),
  path = require('path'),
  Mailgun = require('mailgun-js'),
  staticFiles = __dirname + '../../../../build/';

let api_key = 'key-6a92bcfb812ee02ff7c1224aa13f26cc',
  domain = 'sandbox8dc8980d5e7f4e5c99819492da1a6aa3.mailgun.org',
  from = 'marina.todorishina@gmail.com';


router.use(express.static(staticFiles));

router.get('/', function (request, response) {
  response.setHeader('content-type', 'application/javascript');
  response.sendFile(path.join(staticFiles + 'index.html'));
});

router.get('/submit', function (request, response) {
  let mailgun = new Mailgun({apiKey: api_key, domain: domain}),
    data = {
      from: from,
      to: request.params.mail,
      subject: 'Resume',
      html: request.params.mail
    }

  mailgun.messages().send(data, function (err, body) {

    if (err) {
      response.render('error', {error: err});
      console.log('error: ' + err);
    } else {
      response.send({email: request.params.mail});
      console.log(body);
    }

  })
});


module.exports = router;