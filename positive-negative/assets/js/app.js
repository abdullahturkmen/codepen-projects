let counterNumber = document.querySelector(".counter-number");
let counterContent = document.querySelector(".counter");
let angle;
let changeNumber;
let newNumber;
onmousemove = function (e) {
    let mouseX = e.clientX;
    // let mouseY = e.clientY;
    let windowWidth = window.innerWidth;
    let halfWindowWidh = windowWidth / 2;

    // let i = counterContent.innerText;
    changeNumber = mouseX - halfWindowWidh;
    newNumber = Math.floor(changeNumber * 2);
    counterNumber.innerText = newNumber;
    angle = (changeNumber * 20) / halfWindowWidh;
    counterContent.style.transform = `rotate(${angle}deg)`;
};
