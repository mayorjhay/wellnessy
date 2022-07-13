var user = document.getElementById("user")
var psd = document.getElementById("psd")
var login = document.getElementById("login")

function myfunc() {
    if(user.value !== ""){
      login.disabled=true
      
  window.location.href("dashboard.html");
    }else{
        alert("fill up the empty space")
    }
}
