

function registere(){
    var entryfirstname = document.getElementById("firstname").value;
    var entryemail = document.getElementById("email").value;
    var entrypassword = document.getElementById("password").value;
    var entrylastname =document.getElementById("lastname").value;

    var xhttp = new XMLHttpRequest();


    const firstname=`firstname=${entryfirstname}`;
    const lastname=`&lastname=${entrylastname}`;
    const email=`&email=${entryemail}`;
    const password=`&password=${entrypassword}`;

    xhttp.open("GET", "getInfo?" +firstname + lastname + email +
    password, true);
    xhttp.send();
    console.log("AJAX request sent :"+ email+ " " +password);

}