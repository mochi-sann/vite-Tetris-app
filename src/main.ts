const board: number[][] = [];
const tate = 20;
const yoko = 10;

for (let i = 0; i < tate; i++) {
  board[i] = [];
  for (let y = 0; y < yoko; y++) {
    board[i][y] = 0;
  }
}

const showBoard = () => {
  while (document.body.firstChild) {
    document.body.removeChild(document.body.firstChild);
  }
  board.map((valuey, y) => {
    valuey.map((valuex, x) => {
      const div = document.createElement("div");
      div.style.position = "absolute";
      div.style.left = `${x * 24}px`;
      div.style.top = `${y * 24}px`;
      div.style.width = `${24}px`;
      div.style.height = `${24}px`;
      div.style.border = "4px ridge #aaa";
      div.style.backgroundColor = valuex === 0 ? "#ccc" : "#444";
      document.body.appendChild(div);
    });
  });
};
// [ 回転できる通り . [ 初期のブロックの場所x  , y]]
type BlockType = { RountaionNumber: number; blocks: [number, number] };
const blocks: BlockType = [
  { RountaionNumber: 0, blocks: [] }, // 何もなし
  {
    // I
    RountaionNumber: 2,
    blocks: [
      [-1, 0],
      [1, 0],
      [2, 0],
    ],
  },
  {
    // Z 右
    RountaionNumber: 2,
    blocks: [
      [-1, 0],
      [0, 1],
      [1, 1],
    ],
  },
];

const PutBlock = (
  blockIndex: number,
  x: number,
  y: number,
  Routeation: number,
  remove: boolean,
  action
) => {
  const TetorisBloxk = [...blocks[blockIndex]];
  const BlockRoutatMax = TetorisBloxk.shift();
  TetorisBloxk.unshift([0, 0]);

  for (const [dx, dy] of TetorisBloxk) {
    for (let i = 0; i < Routeation % BlockRoutatMax; i++) {
      [dx, dy] = [dy, -dx];
    }

    board[y + dy][x + dx] = blockIndex;
  }
};
window.onload = () => {
  PutBlock(1, 3, 4, 0);
  showBoard();
};
