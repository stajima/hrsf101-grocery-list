const express = require('express');
const app = express();
var bodyParser = require('body-parser');

///////////////////////////////////
// Config
const PORT = process.env.PORT || 8000;
app.use(bodyParser.json());
app.use(express.static('client/dist'));
///////////////////////////////////
// Controllers
const handleGet = () => {
  console.log('handleGet::');
};
const handlePost = () => {
  console.log('handlePost::');
};
///////////////////////////////////
// Routes
app.post('/list', handlePost);
app.get('/list', handleGet);
///////////////////////////////////
// Launch
app.listen(PORT, (error) => {
  if (error) {
    console.log('Server failed to start');
  } else {
    console.log('Server started on port', PORT);
  }
});
