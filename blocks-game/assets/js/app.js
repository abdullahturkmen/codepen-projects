const blocksContainer = document.querySelector('.blocks');
var blockZ = 50;
var blockTop = blockZ;
var movingBlockElement;
var dropBlockElement;

let windowWidth = window.innerWidth;
let halfWindowWidh = windowWidth / 2;

if(halfWindowWidh < 220){
    halfWindowWidh = 300;
}
else if(halfWindowWidh > 650){
    halfWindowWidh = 500;
}

const blocksList = [{
        "block-x": 200,
        "block-y": 200,
        "block-left": 0
    },];

createBlock = (params) => {
    return `<div class="block ${
        params.class
    }" style="width: ${
        params.blockX
    }px;height: ${
        params.blockY
    }px;top: ${
        params.blockTop
    }px;left: ${
        params.blockLeft
    }px;">
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
            <div class="side left" style="transform: rotateY(90deg) translateZ(${
        (-params.blockY / 2) + params.blockX
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
            <div class="side bottom" style="transform: rotateX(-90deg) translateZ(${
        (-params.blockY / 2) + params.blockZ
    }px);width: ${
        params.blockX
    }px;height: ${
        params.blockY
    }px;"></div>
          </div>`;
}


const blocksArrayList = () => {
    blocksList.slice(-5).reverse().map((x) => {
        blocksContainer.innerHTML += createBlock({
            class: '',
            blockX: x['block-x'],
            blockY: x['block-y'],
            blockZ: blockZ,
            blockTop: blockTop,
            blockLeft: x['block-left']
        });
        blockTop += blockZ
    });
    blocksList.slice(-1).reverse().map((x) => {
        blocksContainer.innerHTML += createBlock({
            class: 'block-moving',
            blockX: x['block-x'],
            blockY: x['block-y'],
            blockZ: blockZ,
            blockTop: 0
        });
    });

    if (blocksList.length >= 6) {
        let animateBlock = blocksList.slice(-6)[0];
        blocksContainer.innerHTML += createBlock({
            class: 'block-drop',
            blockX: animateBlock['block-x'],
            blockY: animateBlock['block-y'],
            blockZ: blockZ,
            blockTop: blockTop
        });

    }
}


const movingBlock = () => {
    setInterval(animate, 50);
    movingBlockElement = blocksContainer.querySelector('.block-moving');
}

const dropLastBlock = () => {
    if (!! blocksContainer.querySelector('.block-drop')) {
        setTimeout(dropAnimate, 50);
        dropBlockElement = blocksContainer.querySelector('.block-drop');
    }
}

var counter;
var increase;
var i;
var moveLeft;

const resetValues = () => {

    counter = -halfWindowWidh;
    increase = Math.PI / 1;
    i = 0;
    moveLeft = true;

    blockTop = blockZ;
    blocksContainer.innerHTML = '';
    blocksArrayList();
    movingBlock();
    dropLastBlock();
}
// reset game
resetValues();

document.body.onkeyup = function (e) {
    if (e.key == " " || e.code == "Space" || e.keyCode == 32) {

        let newBlockWidth;
        let lastBlockInArray = blocksList.slice(-1)[0];
        if (movingBlockElement.offsetLeft + parseInt(movingBlockElement.style.width) < lastBlockInArray['block-left'] || movingBlockElement.offsetLeft > lastBlockInArray['block-left'] + lastBlockInArray['block-x']) {
            console.log("kaybettin")
            // game over çıkar
        } else { // resetle
            var newBlockLeft;

            if (movingBlockElement.offsetLeft > lastBlockInArray['block-left'] && movingBlockElement.offsetLeft < lastBlockInArray['block-left'] + lastBlockInArray['block-x']) {
                newBlockWidth = (lastBlockInArray['block-left'] + lastBlockInArray['block-x']) - movingBlockElement.offsetLeft;
                newBlockLeft = Math.abs(movingBlockElement.offsetLeft)
            } else if (movingBlockElement.offsetLeft + parseInt(movingBlockElement.style.width) > lastBlockInArray['block-left'] && movingBlockElement.offsetLeft + parseInt(movingBlockElement.style.width) < lastBlockInArray['block-left'] + lastBlockInArray['block-x']) {
                newBlockWidth = (parseInt(movingBlockElement.style.width) + movingBlockElement.offsetLeft) - lastBlockInArray['block-left'];
                newBlockLeft = lastBlockInArray['block-left'];
            }


            if (newBlockWidth != undefined && newBlockLeft != undefined) {
                blocksList.push({"block-x": newBlockWidth, "block-y": 200, "block-left": newBlockLeft});
                // console.table(blocksList)
                resetValues();
            }
        }


    }
}

blocksContainer.addEventListener("touchstart", () => {
    let newBlockWidth;
    let lastBlockInArray = blocksList.slice(-1)[0];
    if (movingBlockElement.offsetLeft + parseInt(movingBlockElement.style.width) < lastBlockInArray['block-left'] || movingBlockElement.offsetLeft > lastBlockInArray['block-left'] + lastBlockInArray['block-x']) {
        console.log("kaybettin")
        // game over çıkar
    } else { // resetle
        var newBlockLeft;

        if (movingBlockElement.offsetLeft > lastBlockInArray['block-left'] && movingBlockElement.offsetLeft < lastBlockInArray['block-left'] + lastBlockInArray['block-x']) {
            newBlockWidth = (lastBlockInArray['block-left'] + lastBlockInArray['block-x']) - movingBlockElement.offsetLeft;
            newBlockLeft = Math.abs(movingBlockElement.offsetLeft)
        } else if (movingBlockElement.offsetLeft + parseInt(movingBlockElement.style.width) > lastBlockInArray['block-left'] && movingBlockElement.offsetLeft + parseInt(movingBlockElement.style.width) < lastBlockInArray['block-left'] + lastBlockInArray['block-x']) {
            newBlockWidth = (parseInt(movingBlockElement.style.width) + movingBlockElement.offsetLeft) - lastBlockInArray['block-left'];
            newBlockLeft = lastBlockInArray['block-left'];
        }


        if (newBlockWidth != undefined && newBlockLeft != undefined) {
            blocksList.push({"block-x": newBlockWidth, "block-y": 200, "block-left": newBlockLeft});
            // console.table(blocksList)
            resetValues();
        }
    }
 });

function animate() {
    if (moveLeft) {
        x = i;
        i += 0.01;
        y = Math.sin(counter);
        counter += increase;
        movingBlockElement.style.left = counter + "px";
        // console.log(counter)

        if (counter >= halfWindowWidh) {
            moveLeft = false;
        }
    } else {
        x = i;
        i += 0.01;
        y = Math.sin(counter);
        counter -= increase;
        movingBlockElement.style.left = counter + "px";
        // console.log(counter)

        if (counter <= -halfWindowWidh) {
            moveLeft = true;
        }
    }
}


const dropAnimate = () => {
    dropBlockElement.style.marginTop = "1000px";
    dropBlockElement.style.transfrom = "scale(.2)";
}
