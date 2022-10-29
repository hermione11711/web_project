

const cartContainer = document.querySelector('.cart-container');


 
 document.getElementById('cart-btn').addEventListener('click', () => {
        cartContainer.classList.toggle('show-cart-container');
    });



function addtocart(val){
    var valueP= val
    var loginC =Cookies.get('email');
    console.log(valueP);
    console.log(loginC);
    var xhttp= new XMLHttpRequest();

    const value =`value=${valueP}`;
    const login =`&login=${loginC}`;

    xhttp.open("GET","addtocart?" +value+login,true);
    xhttp.send();
    console.log(value + login);
    location.reload();
    return false;


}

window.addEventListener('load',function loadcart(){

    

    var cookie_email=Cookies.get('email');


    var xhttp = new XMLHttpRequest();

    const email=`email=${cookie_email}`;

    

    xhttp.open("GET","loadcart?" +email,true);
    xhttp.send();

    xhttp.addEventListener('load', function(){
        if (xhttp.status === 200 && xhttp.readyState === 4){
            var response = JSON.parse(xhttp.responseText)
            console.log("AJAX response : " + xhttp.responseText);
            console.log(response);
            for (let  i=0;i<response.length;i++){
            var tr = document.createElement("tr");
            var td1 = document.createElement("td");
            td1.textContent = response[i].price;
            var td2 = document.createElement("img");
            td2.src = response[i].image;
            td2.setAttribute("id", "tImage")
            var td3 = document.createElement("td");
            td3.textContent = response[i].name;
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            document.getElementById("table").appendChild(tr);
            }
        } else {
            console.error("Bad request");
        }


    })
   




}) 

function clearcart(){

    var cookie_email=Cookies.get('email');


    var xhttp = new XMLHttpRequest();

    const email=`email=${cookie_email}`;

    xhttp.open("GET","suppcart?" +email)
    xhttp.send();
    location.reload();
    return false;


}
