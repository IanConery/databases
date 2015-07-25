var models = require('../models');
var bluebird = require('bluebird');
// this is going to handle the backbone connection to the models


module.exports = {
  messages: {
    get: function (req, res) {
      // make an asynchronous call to the database for all messages
      // 

      // models.messages.get callback

    }, // a function which handles a get request for all messages
    post: function (req, res) {
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
    },
    post: function (req, res) {
      console.log("USERS POSTTT");
      console.log('')

    }
  }
};

