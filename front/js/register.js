




function registere(){
var entryfirstname = document.getElementById("firstname").value;
var entryemail = document.getElementById("email").value;
var entrypassword = document.getElementById("password").value;
var entrypassword2 = document.getElementById("password2").value;
var entrylastname =document.getElementById("lastname").value;
console.log(entryfirstname)
console.log(entrylastname)
console.log(entrypassword)
console.log(entrypassword2)
console.log(entryemail)

if (entrypassword == "" || entrypassword2 == "" || entryfirstname == "" || entrylastname == "" || entryemail == "") {
    alert("not all fields are filled in");
    return;
  }
  if (entrypassword.length < 6) {
    alert("your passwords is to short (6 characters minimum)");
    return;
  }
  if (entrypassword != entrypassword2) {
    alert("Passwords didn't match");
    return
  }
  else{
    console.log("la suite")
  } 


    var xhttp = new XMLHttpRequest();


    const firstname=`firstname=${entryfirstname}`;
    const lastname=`&lastname=${entrylastname}`;
    const email=`&email=${entryemail}`;
    const password=`&password=${entrypassword}`;

    xhttp.open("GET", "getInfo?" +firstname + lastname + email +
    password, true);
    xhttp.send();
    console.log("AJAX request sent :"+ email+ " " +password);
    Cookies.set('email',entryemail)
    location.href="http://localhost:3010/"

    

}

