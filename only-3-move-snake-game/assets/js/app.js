const canvas = document.getElementById("game-board");
const ctx = canvas.getContext("2d");


var dotPercent = 10

var snakePosition = [
    {
        x: 240,
        y: 20
    }
]

var eatPosition = {
	x: Math.floor(Math.random()*canvas.width/dotPercent)*dotPercent,
	y: Math.floor(Math.random()*canvas.height/dotPercent)*dotPercent
}

var snakeDirection = "left"


const drawSnake = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // console.log("snakePosition : ", snakePosition)
    // console.log("canvas.width : ", canvas.width)


    snakePosition.map((e, index) => {
        //console.log("e : ", e)
        ctx.fillStyle = "white";
        ctx.fillRect(e.x, e.y, dotPercent, dotPercent);
    })
}


const moveSnake = () => {
    if (snakeDirection == "left") {
        snakePosition.splice(0, 0, {
            x: (snakePosition[0].x - dotPercent),
            y: snakePosition[0].y
        })
    } else if (snakeDirection == "right") {
        snakePosition.splice(0, 0, {
            x: (snakePosition[0].x + dotPercent),
            y: snakePosition[0].y
        })
    } else if (snakeDirection == "up") {
        snakePosition.splice(0, 0, {
            x: snakePosition[0].x,
            y: (snakePosition[0].y - dotPercent)
        })

    } else if (snakeDirection == "down") {
        snakePosition.splice(0, 0, {
            x: snakePosition[0].x,
            y: (snakePosition[0].y + dotPercent)
        })
    }

    snakePosition.pop()




	if(snakePosition[0].x == eatPosition.x && snakePosition[0].y == eatPosition.y){
		generateEat()
		snakePosition.push({})
	}


   

}


// Listen for arrow key events to change the direction of the snake
document.addEventListener("keydown", (event) => {
    switch (event.keyCode) {
        case 37: snakeDirection = "left"
            break;
        case 38: snakeDirection = "up"
            break;
        case 39: snakeDirection = "right"
            break;
        case 40: snakeDirection = "down"
            break;
    }
});

const drawEat = () => {
    ctx.fillStyle = "red";
    ctx.fillRect(eatPosition.x, eatPosition.y, dotPercent, dotPercent);
}

const generateEat = () => {
    eatPosition = {
		x: Math.floor(Math.random()*canvas.width/dotPercent)*dotPercent,
		y: Math.floor(Math.random()*canvas.height/dotPercent)*dotPercent
	}
}


// Main game loop
const gameLoop = () => {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	drawSnake();
	moveSnake();
	drawEat();
	
	setTimeout(() => {
		requestAnimationFrame(gameLoop);
	  }, 50);
  };
  
  // Start the game
  gameLoop();