const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'grocerylist',
});

const executeQuery = (sql, data = null, callback) => {
  connection.query(sql, data, (error, result) => {
    callback(error, result);
  });
};

const getStores = () => {
  executeQuery('Select * FROM stores', (error, result) => {
    if (error) {
      console.log('Failed to get stores');
      callback(error);
    } else {
      callback(null, result);
    }
  });
};

const postItem = (data, callback) => {
  const queries = [];
  for (let column in data) {
    if (data.hasOwnProperty(column)) {
      queries.push([column, data[column]]);
    }
  }
  executeQuery('INSERT INTO items SET ?', queries, (error, result) => {
    if (error) {
      console.log('Failed to insert item');
      callback(error);
    } else {
      callback(null, result);
    }
  });
};

const getItem = (data, callback) => {};

const putItem = (data, callback) => {};

const deleteItem = (data, callback) => {};

module.exports = {
  get: getItem,
  post: postItem,
  put: putItem,
  delete: deleteItem,
};
