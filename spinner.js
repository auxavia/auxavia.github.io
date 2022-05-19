// Navbar //
const hamburger = document.querySelector('.hamburger')

hamburger.addEventListener('click', function () {
    this.classList.toggle('isActive');
})

// Spinner //
let container = document.querySelector(".container");
let btn = document.getElementById("spin");
let number = Math.ceil(Math.random() * 1000);

btn.onclick = function () 
{
	container.style.transform = "rotate(" + number + "deg)";
	number += Math.ceil(Math.random() * 1000);
}