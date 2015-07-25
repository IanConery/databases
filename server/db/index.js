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
  user = connection.escape(user);
  var sql = 'SELECT * FROM '+dbNames.username + ' WHERE name = '+user;
  console.log("addUser sql ::: ", sql);
  connection.query(sql,function(err, results){
    if (err) {
      console.log("ADD USER LOOKUP ERROR: "+err);
    } else {
      // return the user
      if (results.length === 0) {
        var sql = 'INSERT INTO '+dbNames.username+' (name) VALUES ('+user+')';
        connection.query(sql, function(err, data){
          if (err) {
            console.log("INSERT USER ERROR: ",err)
          } else {
            console.log("User "+user+" added");
          }
        })
      } else {
        // return exports.getUser(user);
      }
    }
  });
  // if(connection.query('SELECT ' + user + ' FROM ' + dbNames.username))
};

// Getting all users

// exports.getUser = function(user) {
//   user = connection.escape(user);
//   var sql = 'SELECT * FROM '+dbNames.username+'WHERE name = '+user;
//   connection.query(sql, function(err, result){
//     if(err){
//       console.log("GET USER ERROR: "+err);
//     } else {
//       return result;
//     }
//   })
// };

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

exports.addMessage = function(string, userID, roomID){
  var sql = 'INSERT INTO '+dbNames.messages+' (username_idusername, text, username_roomname_idroomname) VALUES ('+userID+', '+connection.escape(string)+', '+roomID+')';
  connection.query(sql,function(result, err){
    if (err) {
      console.log("ADD MESSAGE ERROR: "+JSON.stringify(err));
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
exports.addRoom = function(room){
  room = connection.escape(room);
  var sql = 'SELECT * FROM '+dbNames.roomname + ' WHERE name = '+room;
  console.log("addroom sql ::: ", sql);
  connection.query(sql,function(err, results){
    if (err) {
      console.log("ADD room LOOKUP ERROR: "+err);
    } else {
      // return the room
      if (results.length === 0) {
        var sql = 'INSERT INTO '+dbNames.roomname+' (name) VALUES ('+room+')';
        connection.query(sql, function(err, data){
          if (err) {
            console.log("INSERT room ERROR: ",err)
          } else {
            console.log("room "+room+" added");
          }
        })
      } else {
        // return exports.getroom(room);
      }
    }
  });
  // if(connection.query('SELECT ' + user + ' FROM ' + dbNames.username))
};

// Getting all roomnames

exports.getAllRooms = function(){
  connection.query('SELECT * FROM ' + dbNames.roomname, function(err, result){
    if(err){
      console.log('GET ALL ROOMS ERROR: '+JSON.stringify(err));
    }else{
      console.log(result)
      return result;
    }
  });
};