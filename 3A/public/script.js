const btn = document.getElementById("btn");
const message = document.getElementById("message");

btn.addEventListener("click", () => {
    message.innerText = "Button Clicked Successfully 🎉";
});