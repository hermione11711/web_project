window.onload =function giveUser(){
    var entryemail = Cookies.get('email');

    var xhttp = new XMLHttpRequest();

    const email=`email=${entryemail}`;

    xhttp.open("GET", "getusername?"+email,true);
    console.log(email);
    xhttp.send();

    xhttp.addEventListener('load', function(){
        if (xhttp.status === 200 && xhttp.readyState === 4){
            var response = JSON.parse(xhttp.responseText)
            console.log("AJAX response : " + xhttp.responseText);
            console.log("ca marche "+response);
            
            document.getElementById("demo").innerHTML = ` Welcome ${response[0].first_name} !`;
            
        } else {
            console.error("Bad request");
        }

    
})


}