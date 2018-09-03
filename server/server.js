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
const handleGet = (req, res) => {
  console.log('handleGet::');
};
const handlePost = (req, res) => {
  console.log('handlePost::');
};
const handlePut = (req, res) => {
  console.log('handlePut::');
};
const handleDelete = (req, res) => {
  console.log('handleDelete::');
};
///////////////////////////////////
// Routes
app.post('/list', handlePost);
app.get('/list', handleGet);
app.put('/list', handlePut);
app.delete('/list', handleDelete);
///////////////////////////////////
// Launch
app.listen(PORT, (error) => {
  if (error) {
    console.log('Server failed to start');
  } else {
    console.log('Server started on port', PORT);
  }
});
