var blockZ = 50;
var blockTop = 0;
const blocks = [
    {
        "block-x": 200,
        "block-y": 200
    },
    {
        "block-x": 110,
        "block-y": 200
    },
    {
        "block-x": 100,
        "block-y": 100
    },
    {
        "block-x": 80,
        "block-y": 50
    }, {
        "block-x": 50,
        "block-y": 20
    }
];

// console.table(blocks)

block = (params) => {
    return `<div class="block" style="width: ${params.blockX}px;height: ${params.blockY}px;top: ${params.blockTop}px">
              <div class="side top" style="transform: rotateX(90deg) translateZ(${params.blockY / 2}px);width: ${params.blockX}px;height: ${params.blockY}px;"></div>
              <div class="side front" style="transform: translateZ(${params.blockY / 2}px);height: ${params.blockZ}px;"></div>
              <div class="side back" style="transform: translateZ(${-params.blockY / 2}px);height: ${params.blockZ}px;"></div>
              <div class="side left" style="transform: rotateY(90deg) translateZ(${(-params.blockY / 2) + params.blockX}px);width: ${params.blockY}px;height: ${params.blockZ}px;"></div>
              <div class="side right" style="transform: rotateY(-90deg) translateZ(${params.blockY / 2}px);width: ${params.blockY}px;height: ${params.blockZ}px;"></div>
              <div class="side bottom" style="transform: rotateX(-90deg) translateZ(${(-params.blockY / 2) + params.blockZ}px);width: ${params.blockX}px;height: ${params.blockY}px;"></div>
            </div>`;
}

const blocksContainer = document.querySelector('.blocks');


blocks.slice(0).reverse().map((x) => {
  blocksContainer.innerHTML += block({blockX: x['block-x'], blockY: x['block-y'], blockZ: blockZ, blockTop: blockTop});
    blockTop += blockZ
});
