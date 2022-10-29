

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

    xhttp.addEventListener('load', function(){
        if (xhttp.status === 200 && xhttp.readyState === 4){
            var response = xhttp.responseText;
            console.log("AJAX response : " + xhttp.responseText);
            document.getElementById("demo").innerHTML = `${response}!`;
             document.getElementById("email").value = "";
             document.getElementById("password").value = "";

             if(response=="true"){
                console.log("cookie")
                Cookies.set('email',entryemail)
                location.href="http://localhost:3010/"
             }
        } else {
            console.error("Bad request");
        }

    })

}