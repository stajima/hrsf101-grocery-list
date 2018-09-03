const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('./database.js');

///////////////////////////////////
// Config
const PORT = process.env.PORT || 8000;
app.use(bodyParser.json());
app.use(express.static('client/dist'));
///////////////////////////////////
// Controllers
const getItem = (req, res) => {
  console.log('getItem::');
  db.getItem();
};
const postItem = (req, res) => {
  console.log('postItem::');
  db.Item();
};
const putItem = (req, res) => {
  console.log('putItem::');
  db.putItem();
};
const deleteItem = (req, res) => {
  console.log('deleteItem::');
  db.deleteItem();
};
const postStore = (req, res) => {
  console.log('postStore::');
  db.postStore();
};
const getStores = (req, res) => {
  console.log('getStores::');
  db.getStores();
};
///////////////////////////////////
// Routes
app.post('/list', postItem);
app.get('/list', getItem);
app.put('/list', putItem);
app.delete('/list', deleteItem);
app.post('/store', postStore);
app.get('/store', getStores);
///////////////////////////////////
// Launch
app.listen(PORT, (error) => {
  if (error) {
    console.log('Server failed to start');
  } else {
    console.log('Server started on port', PORT);
  }
});
