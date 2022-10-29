

const express = require('express')
var mysql = require('mysql');
const path =require('path')
const app = express()
const cors = require("cors");
const { cp } = require('fs');
const port=3010

app.use(express.static('front'));

 
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database:"projet_web",
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/front/html/home.html'))
})
app.get('/home.html', (req, res) => {
  res.sendFile(path.join(__dirname, '/front/html/home.html'))
})
app.get('/about-us.html', (req, res) => {
  res.sendFile(path.join(__dirname, '/front/html/about-us.html'))
})
app.get('/products.html', (req, res) => {
  res.sendFile(path.join(__dirname, '/front/html/products.html'))
})
app.get('/sign-in.html', (req, res) => {
  res.sendFile(path.join(__dirname, '/front/html/sign-in.html'))
})

app.get('/login.html', (req, res) => {
  res.sendFile(path.join(__dirname, '/front/html/login.html'))
})
app.get('/nutrition/clothing.html', (req, res) => {
  res.sendFile(path.join(__dirname, '/front/html/nutrition/clothing.html'))
})
app.get('/nutrition/gainer.html', (req, res) => {
  res.sendFile(path.join(__dirname, '/front/html/nutrition/gainer.html'))
})
app.get('/nutrition/isolate.html', (req, res) => {
  res.sendFile(path.join(__dirname, '/front/html/nutrition/isolate.html'))
})
app.get('/nutrition/preworkout.html', (req, res) => {
  res.sendFile(path.join(__dirname, '/front/html/nutrition/preworkout.html'))
})
app.get('/nutrition/snacks&drinks.html', (req, res) => {
  res.sendFile(path.join(__dirname, '/front/html/nutrition/snacks&drinks.html'))
})
app.get('/nutrition/vitamins.html', (req, res) => {
  res.sendFile(path.join(__dirname, '/front/html/nutrition/vitamins.html'))
})
app.get('/nutrition/whey.html', (req, res) => {
  res.sendFile(path.join(__dirname, '/front/html/nutrition/whey.html'))
})




  app.get('/welcome', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/welcome.html'))
  })

  app.get('/cookie.js', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/cookie.js'))
  })
  app.get('/login.js', (req, res) => {
    res.sendFile(path.join(__dirname, '/front/js/login.js'))
  })
  app.get('/cart.js', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/cart.js'))
  })

  app.get('/getInfo', function(req, res) {
    console.log(req.query);
    var reqJsonFirstName = req.query.firstname;
    var reqJsonLastName = req.query.lastname;
    var reqJsonEmail = req.query.email;
    var reqJsonPassword = req.query.password;
    var result = JSON.stringify({firstname : reqJsonFirstName, lastname: reqJsonLastName, email : reqJsonEmail, password:reqJsonPassword});
      con.query("INSERT INTO users"+"(first_name,last_name,email,password)"+"VALUES"+"('"+reqJsonFirstName+"','"+reqJsonLastName+"','"+reqJsonEmail+"','"+reqJsonPassword+"')", function (err, result, fields) {
        if (err) throw err;
      });
    console.log("Sending  : " + result);
    res.send(result);
  });

  app.get('/getInfoLogin', function(req, res) {
    console.log(req.query);
    var reqJsonEmail = req.query.email;
    var reqJsonPassword = req.query.password;


    con.query("Select * from users where users.email='"+reqJsonEmail+"'and users.password ='"+reqJsonPassword+"'",function(err,result){
      console.log(result)
      if (err){
        res.send({err: err})
      }
      if(result.length>=1){
        res.send("true");
        console.log("bien envoyé")
      }
      else{
        res.send("Wrong username or passsword");

        console.log("ca marche");
      }
    }
  )
})

app.get('/getusername', function(req, res) {
  console.log(req.query);
  var reqJsonEmail = req.query.email;


  con.query("Select first_name from users where users.email='"+reqJsonEmail+"'",function(err,result){
    console.log(JSON.stringify(result))
    if (err){
      res.send({err: err})
    }
    if(result.length>=1){
      res.send(JSON.stringify(result));
      console.log("bien envoyé")
    }
  }
)
})

app.get('/nutrition/getusername', function(req, res) {
  console.log(req.query);
  var reqJsonEmail = req.query.email;


  con.query("Select first_name from users where users.email='"+reqJsonEmail+"'",function(err,result){
    console.log(JSON.stringify(result))
    if (err){
      res.send({err: err})
    }
    if(result.length>=1){
      res.send(JSON.stringify(result));
      console.log("bien envoyé")
    }
  }
)
})

app.get('/suppcart', function(req, res) {
  console.log(req.query);
  var reqJsonEmail = req.query.email;


  con.query("DELETE FROM cart_item WHERE id_user='"+reqJsonEmail+"'",function(err,result){
    console.log(result)
    if (err){
      res.send({err: err})
    }
  }
)
})

app.get('/nutrition/suppcart', function(req, res) {
  console.log(req.query);
  var reqJsonEmail = req.query.email;


  con.query("DELETE FROM cart_item WHERE id_user='"+reqJsonEmail+"'",function(err,result){
    console.log(result)
    if (err){
      res.send({err: err})
    }
  }
)
})




app.get('/nutrition/addtocart', function(req, res) {
  console.log(req.query);
  var product_value = req.query.value;
  var cookie_value = req.query.login;

    con.query("INSERT INTO cart_item"+"(id_user,product_id)"+"VALUES"+"('"+cookie_value+"','"+product_value+"')", function (err, result, fields) {
      if (err) throw err;
    });
});

app.get('/loadcart', function(req, res) {
  console.log(req.query);
  var cookie_value = req.query.email;

    con.query("SELECT product.name, product.price, product.image FROM product JOIN cart_item ON cart_item.product_id=product.id_product JOIN users ON users.email=cart_item.id_user WHERE email='"+cookie_value+"'", function (err, result, fields) {
      if (err) throw err;
       console.log(JSON.stringify(result))
      res.send(JSON.stringify(result))
    });

});
app.get('/nutrition/loadcart', function(req, res) {
  console.log(req.query);
  var cookie_value = req.query.email;

    con.query("SELECT product.name, product.price, product.image FROM product JOIN cart_item ON cart_item.product_id=product.id_product JOIN users ON users.email=cart_item.id_user WHERE email='"+cookie_value+"'", function (err, result, fields) {
      if (err) throw err;
       console.log(JSON.stringify(result))
      res.send(JSON.stringify(result))
    });

});







  app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '/front/html/login.html'))
  })



  app.get('/login.css', (req, res) => {
    res.sendFile(path.join(__dirname, '/front/css/login.css'))
  })

  app.get('/connect.js', (req, res) => {
    res.sendFile(path.join(__dirname, 'connect.js'))
  })




  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })

  




