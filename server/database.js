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

const createQueryData = (data) => {
  const queries = [];
  for (let column in data) {
    if (data.hasOwnProperty(column)) {
      queries.push([column, data[column]]);
    }
  }
  return queries;
};
///////////////////////
// Store methods
const getStores = (callback) => {
  executeQuery('Select * FROM stores', (error, result) => {
    if (error) {
      console.log('Failed to get stores');
      callback(error);
    } else {
      callback(null, result);
    }
  });
};

const postStore = (data, callback) => {
  const queries = createQueryData(data);
  executeQuery('INSERT INTO stores SET ?', queries, (error, result) => {
    if (error) {
      console.log('Failed to insert store');
      callback(error);
    } else {
      callback(null, result);
    }
  });
};
///////////////////////
// Item methods
const postItem = (data, callback) => {
  const queries = createQueryData(data);
  executeQuery('INSERT INTO items SET ?', queries, (error, result) => {
    if (error) {
      console.log('Failed to insert item');
      callback(error);
    } else {
      callback(null, result);
    }
  });
};

const getItems = (callback) => {
  executeQuery('Select * FROM items', (error, result) => {
    if (error) {
      console.log('Failed to get items');
      callback(error);
    } else {
      callback(null, result);
    }
  });
};

const putItem = ({ id, item, checked = false }, callback) => {
  if (!id || !item) {
    callback(new Error('Need id and item to update item'));
  }
  executeQuery('UPDATE items SET item = ?, checked = ? WHERE id = ?', [item, checked, id], (error, result) => {
    if (error) {
      console.log('Failed to insert item');
      callback(error);
    } else {
      callback(null, result);
    }
  });
};

const deleteItem = ({ id }, callback) => {
  if (!id) {
    callback(new Error('Need id delete item'));
  }
  executeQuery('DELETE FROM items WHERE id = ?', [id], (error, result) => {
    if (error) {
      console.log('Failed to insert item');
      callback(error);
    } else {
      callback(null, result);
    }
  });
};
/////////////////////////////

module.exports = {
  getItem: getItems,
  postItem: postItem,
  putItem: putItem,
  deleteItem: deleteItem,
  postStore: postStore,
  getStores: getStores,
};
