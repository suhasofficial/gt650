let redbtn = document.getElementById("red")
let bluebtn = document.getElementById("blue")
let blackbtn = document.getElementById("black")
let bike = document.getElementById("bike")

redbtn.onclick = function () {
    bike.style.backgroundImage = "url(img/1.jpg"
}
bluebtn.onclick = function () {
    bike.style.backgroundImage = "url(img/3.jpg"
}
blackbtn.onclick = function () {
    bike.style.backgroundImage = "url(img/2.jpg"
}