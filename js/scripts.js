const clickBtn = document.querySelector(".showBtn");
const closBtn = document.querySelector(".messag span li")
const messegeBox = document.querySelector(".messag");


let timer;

clickBtn.addEventListener("click", () => {
    messegeBox.classList.remove("close");
    messegeBox.classList.add("active");
    timer = setTimeout(function() {
        close();
    }, 5000)
})
closBtn.addEventListener("click", () => {
    clearTimeout(timer);
    close();
})

function close() {
    messegeBox.classList.remove("active");
    messegeBox.classList.add("close");
}