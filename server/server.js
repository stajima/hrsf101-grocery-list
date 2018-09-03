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
const getItems = (req, res) => {
  console.log('getItem::');
  db.getItems((error, items) => {
    if (error) {
      res.status(400).end('');
    } else {
      res.status(200).json(items);
    }
  });
};
const postItem = (req, res) => {
  console.log('postItem::');
  const { item, storeId } = req.body;
  db.postItem({ item, storeId }, (error) => {
    if (error) {
      res.status(400).end();
    } else {
      res.status(201).end();
    }
  });
};
const putItem = (req, res) => {
  console.log('putItem::');
  let { id, item, checked, storeId } = req.body;
  item = item.toString();
  db.putItem({ id, item, checked, storeId }, (error) => {
    if (error) {
      res.status(400).end();
    } else {
      res.status(201).end();
    }
  });
};
const deleteItem = (req, res) => {
  console.log('deleteItem::');
  const { id } = req.body;
  db.deleteItem(id, (error) => {
    if (error) {
      res.status(400).end();
    } else {
      res.status(200).end();
    }
  });
};
const postStore = (req, res) => {
  console.log('postStore::');
  const { name } = req.body;
  db.postStore({ name }, (error) => {
    if (error) {
      res.status(400).end('');
    } else {
      res.status(201).end('');
    }
  });
};
const getStores = (req, res) => {
  console.log('getStores::');
  db.getStores((error, stores) => {
    if (error) {
      res.status(400).end('');
    } else {
      res.status(200).json(stores);
    }
  });
};
///////////////////////////////////
// Routes
app.post('/item', postItem);
app.get('/item', getItems);
app.put('/item', putItem);
app.delete('/item', deleteItem);
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
