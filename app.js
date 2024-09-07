let swap_btn = document.getElementById("swap_btn");
let from = document.getElementById("fromInp");
let to = document.getElementById("toInp");
let temp;
let to_main = document.getElementById("to_main1");
let from_main = document.getElementById("from_main1");
let trail = document.getElementById("trail");
swap_btn.addEventListener("click", () => {
    temp = from.value;
    from.value = to.value;
    to.value = temp;
});
const user = document.getElementById("exampleInputEmail1");
const pass = document.getElementById("exampleInputPassword1");
let login_btn = document.getElementById("submit");
let wrong = document.getElementById("wrong");
login_btn.addEventListener("click", () => {
    if (user.value != "Admin@a" && pass.value != "root") {
        wrong.style.display = "block";

    }
});
