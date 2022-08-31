import { MinoPattern } from "./TetrisBlocks";
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
// ブロックを回転
const PutBlock = (
  blockIndex: number,
  x: number,
  y: number,
  Routeation: number,
  remove: boolean,
  action: boolean = false
) => {
  const TetorisBloxk = MinoPattern[blockIndex].blocks;
  const BlockRoutatMax = MinoPattern[blockIndex].RountaionNumber;

  for (const [dy, dx] of TetorisBloxk) {
    let ddx: number = dx;
    let ddy: number = dy;
    for (let i = 0; i < Routeation % BlockRoutatMax; i++) {
      ddx = dy;
      ddy = -dx;
    }

    if (remove) {
      board[y + ddy][x + ddx] = 0;
    } else {
      if (board[y + ddy][x + ddx]) {
        return;
      }
      if (!action) {
        board[y + ddy][x + ddx] = blockIndex;
      }
    }
  }
  if (action) {
    PutBlock(blockIndex, x, y, Routeation, remove, true);
  }
};
window.onload = () => {
  PutBlock(5, 3, 4, 2, false);
  PutBlock(1, 3, 7, 2, false);
  showBoard();
};
