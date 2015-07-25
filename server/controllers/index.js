var models = require('../models');
var bluebird = require('bluebird');
var db = require('../db');
var express = require('express');

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
      console.log("Starting user post request...");
      req.on('data', function(err, data){
        if(err) console.log("ERROR: "+err);
        console.log("DATA: ",JSON.stringify(data));
      })
      // var message = req.body;
      // console.log("USERS POST M")

      // console.log("USERS POSTTT");
    }
  }
};

