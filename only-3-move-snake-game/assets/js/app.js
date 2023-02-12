const canvas = document.getElementById("game-board");
const ctx = canvas.getContext("2d");


var dotPercent = 10
var snakePosition = []
var foodPosition = {}
var snakeDirection = null
var moveLimit = 0
var gameScore = 0
let gameLoopInterval
let gameWallMode = true

const startGame = () => {
    document.querySelector('.start-btn').style.display = "none";
    snakePosition = [{
            x: 220,
            y: 120
        }]
    foodPosition = {
        x: Math.floor(Math.random() * canvas.width / dotPercent) * dotPercent,
        y: Math.floor(Math.random() * canvas.height / dotPercent) * dotPercent
    }
    snakeDirection = "right"
    moveLimit = 4
    gameScore = 0
    clearInterval(gameLoopInterval);
    gameLoop();
}

const drawSnake = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // console.log("snakePosition : ", snakePosition)
    // console.log("canvas.width : ", canvas.width)

    snakePosition.map((e, index) => { // console.log("e : ", e)
        ctx.fillStyle = "white";
        ctx.fillRect(e.x, e.y, dotPercent, dotPercent);
    })
}

const moveSnake = () => {

    if (snakePosition.slice(1).filter(snake => snake.x === snakePosition[0].x && snake.y === snakePosition[0].y).length > 0) {
        return gameOver()
    }

    if (snakePosition[0].x < 0 || snakePosition[0].x >= canvas.width || snakePosition[0].y < 0 || snakePosition[0].y >= canvas.height) {

        if (gameWallMode) {
            return gameOver()
        }

        if (snakePosition[0].x < 0) {
            snakePosition[0].x = canvas.width - dotPercent
        } else if (snakePosition[0].x >= canvas.width) {
            snakePosition[0].x = - dotPercent
        } else if (snakePosition[0].y < 0) {
            snakePosition[0].y = canvas.height
        } else if (snakePosition[0].y >= canvas.height) {
            snakePosition[0].y = - dotPercent
        }


    }

    if (moveLimit <= 0) {
        return gameOver()
    }

    if (snakePosition.length === 0 && snakeDirection === null) 
        return false


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
    } else {
        return false
    }

    // delete last block
    snakePosition.pop()

    // eat food
    if (snakePosition[0].x === foodPosition.x && snakePosition[0].y === foodPosition.y) {
        return eatFood()
    }

}

// Listen for arrow key events to change the direction of the snake
document.addEventListener("keydown", (event) => {
    switch (event.keyCode) {
        case 37:
            if (snakeDirection != "left") {
                snakeDirection = "left"
                moveLimit--
            }
            break;
        case 38:
            if (snakeDirection != "up") {
                snakeDirection = "up"
                moveLimit--
            }
            break;
        case 39:
            if (snakeDirection != "right") {
                snakeDirection = "right"
                moveLimit--
            }
            break;
        case 40:
            if (snakeDirection != "down") {
                snakeDirection = "down"
                moveLimit--
            }
            break;
    }
});

const drawFood = () => {
    ctx.fillStyle = "red";
    ctx.fillRect(foodPosition.x, foodPosition.y, dotPercent, dotPercent);
}

const drawScore = () => {
    ctx.fillStyle = "#fff";
    ctx.font = "18px Arial";
    ctx.fillText(`Score: ${gameScore}`, 10, 30);
}

const drawLimit = () => {
    ctx.fillStyle = "#fff";
    ctx.font = "18px Arial";
    ctx.fillText(`Move Limit: ${moveLimit}`, canvas.width - 120, 30);
}

const generateFood = () => {
    return foodPosition = {
        x: Math.floor(Math.random() * canvas.width / dotPercent) * dotPercent,
        y: Math.floor(Math.random() * canvas.height / dotPercent) * dotPercent
    }
}

const eatFood = () => {
    gameScore++
    moveLimit = 4
    generateFood()
    snakePosition.push({})
}

const gameOver = () => {
    snakePosition = []
    foodPosition = {}
    moveLimit = 0
    snakeDirection = null
    clearInterval(gameLoopInterval);
    document.querySelector('.start-btn').style.display = "block";
}

// Main game loop
const gameLoop = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawSnake();
    moveSnake();
    drawFood();
    drawScore();
    drawLimit();

    gameLoopInterval = setTimeout(() => {
        gameLoop();
    }, 50);
};