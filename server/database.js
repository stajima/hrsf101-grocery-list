const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'grocerylist',
});
// DB connection
///////////////////////
// Helpers
const executeQuery = (sql, data = null, callback) => {
  connection.query(sql, data, (error, result) => {
    callback(error, result);
  });
};

///////////////////////
// Store methods
const getStores = (callback) => {
  executeQuery('Select * FROM stores', (error, result) => {
    if (error) {
      console.log('Failed to get stores');
      callback(error);
    } else {
      console.log('Got all stores');
      callback(null, result);
    }
  });
};

const postStore = (data, callback) => {
  executeQuery('INSERT INTO stores SET ?', data, (error, result) => {
    if (error) {
      console.log('Failed to insert store', error);
      callback(error);
    } else {
      console.log('New store inserted');
      callback(null, result);
    }
  });
};
///////////////////////
// Item methods
const postItem = (data, callback) => {
  executeQuery('INSERT INTO items SET ?', data, (error, result) => {
    if (error) {
      console.log('Failed to insert item', error);
      callback(error);
    } else {
      console.log('Created new item');
      callback(null, result);
    }
  });
};

const getItems = (callback) => {
  const sql = 'Select * FROM items i INNER JOIN stores s WHERE i.storeId = s.id';
  executeQuery(sql, (error, result) => {
    if (error) {
      console.log('Failed to get items');
      callback(error);
    } else {
      console.log('Got all items');
      callback(null, result);
    }
  });
};

const putItem = ({ id, item, checked = 0, storeId }, callback) => {
  if (!id || !item) {
    callback(new Error('Need id and item to update item'));
  }
  executeQuery(
    'UPDATE items SET item = ?, checked = ?, storeId = ? WHERE id = ?',
    [item, checked, storeId, id],
    (error, result) => {
      if (error) {
        console.log('Failed to update item', error);
        callback(error);
      } else {
        console.log('Item was updated');
        callback(null, result);
      }
    },
  );
};

const deleteItem = (id, callback) => {
  if (!id) {
    callback(new Error('Need id delete item'));
  }
  executeQuery(`DELETE FROM items WHERE id = ${id}`, (error, result) => {
    if (error) {
      console.log('Failed to insert item', error);
      callback(error);
    } else {
      console.log('Item deleted');
      callback(null, result);
    }
  });
};
/////////////////////////////

module.exports = {
  getItems: getItems,
  postItem: postItem,
  putItem: putItem,
  deleteItem: deleteItem,
  postStore: postStore,
  getStores: getStores,
};
