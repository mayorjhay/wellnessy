var input = document.querySelectorAll("inpur");
var register = document.getElementById("register")

function change() {
    if (input.value="") {
        register.disabled = true
    }
}
onchange=function () {
    change()
};