var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".


var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'chat'
});
connection.connect();

// MASTER FUNCTION: Adding a [x];

// MASTER FUNCTION: Getting all [x];
 
// Adding a user
var dbNames = {
  username: 'username',
  messages: 'messages',
  roomname: 'roomname'
};

exports.addUser = function(user){
  connection.query('SELECT * FROM '+dbNames.username + ' WHERE name = ?',[user],function(err, results){
    if (err) {
      // add the user and return the user
      console.log("ERROR: "+err);
    } else {
      // return the user
      console.log("RESULTS: "+JSON.stringify(results));
    }
  });
  // if(connection.query('SELECT ' + user + ' FROM ' + dbNames.username))
};

// Getting all users
exports.getAllUsers = function(){
  connection.query('SELECT * FROM ' + dbNames.username, function(err, result){
    if(err){
      console.log('You broke the internet!');
    }else{
      console.log(result)
      return result;
    }
  });
};

// Adding a message

exports.addMessage = function(string, userID){
  connection.query('INSERT INTO '+dbNames.messages+' (username_idusername, text) VALUES ('+userID+', ?)',connection.escape(string),function(result, err){
    if (err) {
      console.log("ERROR: "+err);
    } else {
      console.log('ADDED!!');
    }
  })
};

// Getting all messages

exports.getAllMessages = function(){
  connection.query('SELECT * FROM ' + dbNames.messages, function(err, result){
    if(err){
      console.log('You broke the internet!');
    }else{
      console.log(result)
      return result;
    }
  });
};

// Adding a roomname

// Getting all roomnames