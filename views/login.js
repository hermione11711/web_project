function login(){
    var entryemail = document.getElementById("email").value;
    var entrypassword = document.getElementById("password").value;

    var xhttp = new XMLHttpRequest();


    const email=`email=${entryemail}`;
    const password=`&password=${entrypassword}`;

    xhttp.open("GET", "getInfoLogin?" +email +
    password, true);
    xhttp.send();
    console.log("AJAX request sent :"+ email+ " " +password);

}