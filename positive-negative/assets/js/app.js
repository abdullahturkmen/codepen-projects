let counterNumber = document.querySelector(".counter-number");
let counterContent = document.querySelector(".counter");
let angle;
let changeNumber;
let newNumber;
let changingNumber = 0;
onmousemove = function (e) {
	let mouseX = e.clientX;
	//let mouseY = e.clientY;
	let windowWidth = window.innerWidth;
	let halfWindowWidh = windowWidth / 2;

	//let i = counterContent.innerText;
	changeNumber = mouseX - halfWindowWidh;
	//(console.log(changeNumber)
	newNumber = Math.floor(changeNumber);
	setTimeout(function () {
		changingNumber = newNumber;
	}, 1000);

	//counterNumber.innerText = newNumber;
	animateValue(counterNumber, changingNumber, newNumber, 1500);
	angle = (changeNumber * 20) / halfWindowWidh;
	counterContent.style.transform = `rotate(${angle}deg)`;
};

function animateValue(obj, start, end, duration) {
	let startTimestamp = null;
	const step = (timestamp) => {
		if (!startTimestamp) startTimestamp = timestamp;
		const progress = Math.min((timestamp - startTimestamp) / duration, 1);
		obj.innerHTML = Math.floor(progress * (end - start) + start);
		if (progress < 1) {
			window.requestAnimationFrame(step);
		}
	};
	window.requestAnimationFrame(step);
}
