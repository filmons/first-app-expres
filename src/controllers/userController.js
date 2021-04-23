// const { request, response } = require("express");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const { request, response } = require('express');
const User = require('../models/user');


const SECRET = "pouetpouet";
const MAXAGE = Math.floor(Date.now() / 1000) + (60 * 60); // 1 hour of expiration

exports.signup = (request, response) => {
  response.render('signup.ejs');
};

exports.login = (request, response) => {
  response.render('login.ejs');
};


////// new account 
exports.newAccount = (request, response) => {
  const { name, username, password } = request.body;

  User.getByUsername 
    (username,
    (error, result) => {
      if (error) {
        response.send(error.message);
      }
      //test
      else if (result.length !== 0) {
        response.send('A user with this username already exists!');
      } else { 
      

        const saltRounds = 10; // to have a strong password 
        bcrypt.hash(password, saltRounds, function (error, hash) {
          // Store hash in your password DB.
  
          if (error) {
            response.send(error.message);
          }
  
          const newUser = {
            name,
            username,
            password: hash,
          };
  
          ///console.log(hash);
  
          response.send('ok');
  
          User.create(newUser, (error, result) => {
            if (error) {
              response.send(error.message);
            }
            // console.log('helle', newUser);
            
  
            
            response.redirect('/login');
          
        });

      });
    }
  });

}


exports.authenticate = (request, response) => {
  const { name, username, password } = request.body;
  User.getByUsername (username,(error, result) => {
      if (error) {
        response.send(error.message);
      }
      //test
      else if (result.length === 0) {
        response.send('A user with this username dose not exists!');
      } else{

        const hash = result[0].password;

        bcrypt.compare(password, hash, (error, correct) => {
          if (error) {
            response.send(error.message);
          }
    
          if (!correct) {
            response.send("Invalid password!");
          }
    
          const user = {
            name: result[0].name,
            username: result[0].username,
            exp: MAXAGE
       
          }; 


        jwt.sign(user, SECRET, (error, token) => {
            if (error) {
              response.send(error.message);
            }
    
            request.user = {
              name: result[0].name,
              username: result[0].username,
            };

          response.cookie('authcookie', token, { maxAge: MAXAGE });
          response.redirect('/');
          });

        });


      }

    });
  }
