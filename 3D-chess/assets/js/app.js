const chessboard = document.querySelector(".chessboard");

const boardOffset = 40;
const chessboardSize = chessboard.offsetWidth - boardOffset;
const cubeSize = chessboardSize / 8;

let className;
let blockX;
let blockY;
let blockZ;
let blockLeft;
let transformZ;
let cubeCounter = 0;
let evenOddCheck = true;

let initialBlockLeft = boardOffset / 2;
let initialTransformZ = -((chessboardSize - cubeSize) / 2);

createCube = (params) => {
    return `<div class="cube ${
        params.className
    }" style="width: ${
        params.blockX
    }px;height: ${
        params.blockY
    }px;left: ${
        params.blockLeft
    }px;bottom: -${
        params.blockX
    }px;transform: translateZ(${
        params.transformZ
    }px)">
            <div class="side top" style="transform: rotateX(90deg) translateZ(${
        params.blockY / 2
    }px);width: ${
        params.blockX
    }px;height: ${
        params.blockY
    }px;"></div>
            <div class="side front" style="transform: translateZ(${
        params.blockY / 2
    }px);height: ${
        params.blockZ
    }px;"></div>
            <div class="side back" style="transform: translateZ(${ - params.blockY / 2
    }px);height: ${
        params.blockZ
    }px;"></div>
            <div class="side left" style="transform: rotateY(90deg) translateZ(${ - params.blockY / 2 + params.blockX
    }px);width: ${
        params.blockY
    }px;height: ${
        params.blockZ
    }px;"></div>
            <div class="side right" style="transform: rotateY(-90deg) translateZ(${
        params.blockY / 2
    }px);width: ${
        params.blockY
    }px;height: ${
        params.blockZ
    }px;"></div>
            <div class="side bottom" style="transform: rotateX(-90deg) translateZ(${ - params.blockY / 2 + params.blockZ
    }px);width: ${
        params.blockX
    }px;height: ${
        params.blockY
    }px;"></div>
          </div>`;
};

for (let chessX = 0; chessX < 8; chessX++) {
    cubeCounter = chessX;
    evenOddCheck = true;
    for (let chessY = 0; chessY < 8; chessY++) {
        if (cubeCounter > 7) {
            evenOddCheck = false;
        }

        if (evenOddCheck == true) {
            cubeCounter += 1;
        } else {
            cubeCounter -= 1;
        }

        if (chessX % 2 == 0) {
            if (chessY % 2 == 0) {
                className = "odd";
            } else {
                className = "even";
            }
        } else {
            if (chessY % 2 == 0) {
                className = "even";
            } else {
                className = "odd";
            }
        }
        //
        blockX = cubeSize;
        blockY = cubeSize;
        blockZ = 20 * cubeCounter;
        blockLeft = initialBlockLeft + cubeSize * chessY;
        transformZ = initialTransformZ + cubeSize * chessX;

        chessboard.innerHTML += createCube({
            className: className,
            blockX: blockX,
            blockY: blockY,
            blockZ: blockZ,
            blockLeft: blockLeft,
            transformZ: transformZ
        });
    }
}
