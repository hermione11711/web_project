
const name = document.getElementById("name");
const email = document.getElementById("email")
const password1 = document.getElementById("password");
const password2 = document.getElementById("confirm-password");

function matchPassword() {
  if (password1.value == "" || password2.value == "" || name.value == "" || email.value == "") {
    alert("not all fields are filled in");
    return;
  }
  if (password1.value.length < 6) {
    alert("your passwords is to short (6 characters minimum)");
    return;
  }
  if (password1.value != password2.value) {
    alert("Passwords didn't match");
  } else {
    alert("Your account has been created sucessfully");
    localStorage.setItem('name', name.value);
    window.location = "../html/home.html"
    
    console.log(localStorage.getItem('name'))

  }
  return false;
}
