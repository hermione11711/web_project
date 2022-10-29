const cartContainer = document.querySelector('.cart-container');


 
 document.getElementById('cart-btn').addEventListener('click', () => {
        cartContainer.classList.toggle('show-cart-container');
    });

    function cart_content() {
    
      

              
        console.log(mycart);
        for (const element in mycart) {
            console.log(mycart[element])
            var tr = document.createElement("tr");
            var td1 = document.createElement("td");
            td1.textContent = mycart[element].price;
            var td2 = document.createElement("img");
            td2.src = mycart[element].image;
            td2.setAttribute("id", "tImage")
            var td3 = document.createElement("td");
            td3.textContent = mycart[element].title;
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            document.getElementById("table").appendChild(tr);
           console.log(td1.textContent);
          }
          
        }




