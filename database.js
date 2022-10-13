const express = require('express')
var mysql = require('mysql');
const path =require('path')
const app = express()
const cors = require("cors");
const { cp } = require('fs');
const port=3010


 
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database:"projet_web",
});




  app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/register.html'))
  })
  app.get('/register.js', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/register.js'))
  })
  app.get('/cookie.js', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/cookie.js'))
  })
  app.get('/login.js', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/login.js'))
  })

  app.get('/getInfo', function(req, res) {
    console.log(req.query);
    var reqJsonFirstName = req.query.firstname;
    var reqJsonLastName = req.query.lastname;
    var reqJsonEmail = req.query.email;
    var reqJsonPassword = req.query.password;
    var result = JSON.stringify({firstname : reqJsonFirstName, lastname: reqJsonLastName, email : reqJsonEmail, password:reqJsonPassword});
    con.connect(function(err) {
      if (err) throw err;
      con.query("INSERT INTO users"+"(first_name,last_name,email,password)"+"VALUES"+"('"+reqJsonFirstName+"','"+reqJsonLastName+"','"+reqJsonEmail+"','"+reqJsonPassword+"')", function (err, result, fields) {
        if (err) throw err;
      });
    });
    console.log("Sending  : " + result);
    res.send(result);
  });

  app.get('/getInfoLogin', function(req, res) {
    console.log(req.query);
    var reqJsonEmail = req.query.email;
    var reqJsonPassword = req.query.password;
    // var result = JSON.stringify({email : reqJsonEmail, password:reqJsonPassword});
  //   con.connect(function(err) {
  //     if (err) throw err;
  //     con.query("Select * from users where users.email='"+reqJsonEmail+"'and users.password ='"+reqJsonPassword+"'", function (err, result, fields) {
  //       if (err) throw err;
  //     });
  //   });
  //   console.log("Sending  : " + result);
  //   res.send(result);
  // });
    con.query("Select * from users where users.email='"+reqJsonEmail+"'and users.password ='"+reqJsonPassword+"'",function(err,result){
      console.log(result)
      if (err){
        res.send({err: err})
      }
      if(result.length>=1){
        res.send(result);
        console.log("bien envoyé")
      }
      else{
        res.send("Wrong username or passsword");
        console.log("ca marche");
      }
    }
  )
})


  //   con.connect(function(err) {
  //     if (err) throw err;
  //     con.query("Select * from users where users.email='"+reqJsonEmail+"'and users.password ='"+reqJsonPassword+"'", function (err, result, fields) {
  //       if (err) res.send(err);
  //     });
  //   });
  //   console.log("Sending  : well connected" + result);
  //   res.send(result);
  // });



  app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/login.html'))
  })



  app.get('/login.css', (req, res) => {
    res.sendFile(path.join(__dirname, 'login.css'))
  })

  app.get('/connect.js', (req, res) => {
    res.sendFile(path.join(__dirname, 'connect.js'))
  })

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })

  

// con.connect(function(err) {
//     if (err) throw err;
//     con.query("INSERT INTO users"+"(email,password)"+"VALUES"+"('"+reqJsonEmail+"','"+reqJsonPassword+"')", function (err, result, fields) {
//       if (err) throw err;
//     });
//   });



