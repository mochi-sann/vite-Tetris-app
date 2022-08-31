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
  remove: boolean = false,
  action: boolean = false
): boolean => {
  const TetorisBloxk = MinoPattern[blockIndex].blocks;
  const BlockRoutatMax = MinoPattern[blockIndex].RountaionNumber;
  let end = false;
  for (const [dy, dx] of TetorisBloxk) {
    let ddx: number = dx;
    if (x + ddx < 0 || x + ddx > 9) {
      end = true;
      return false;
    }
  }
  for (const [dy, dx] of TetorisBloxk) {
    let ddx: number = dx;
    let ddy: number = dy;
    // if (ddx < 0 && 11 < ddx) {
    //   return false;
    // }
    for (let i = 0; i < Routeation % BlockRoutatMax; i++) {
      ddx = dy;
      ddy = -dx;
    }

    if (remove) {
      board[y + ddy][x + ddx] = 0;
    } else {
      if (end || board[y + ddy][x + ddx]) {
        return false;
      }
      if (!action) {
        board[y + ddy][x + ddx] = blockIndex;
      }
    }
  }
  if (action) {
    PutBlock(blockIndex, x, y, Routeation, remove, true);
  }
  return true;
};

let CurrentPosition = {
  x: 4,
  y: 1,
  r: 0,
  i: 2,
  gameover: false,
};

const MoveMino = (x: number, y: number, r: number): boolean => {
  PutBlock(
    CurrentPosition.i,
    CurrentPosition.x,
    CurrentPosition.y,
    CurrentPosition.r,
    true
  );
  const MinoTrue = PutBlock(
    CurrentPosition.i,
    CurrentPosition.x + x,
    CurrentPosition.y + y,
    CurrentPosition.r + r
  );

  if (MinoTrue) {
    CurrentPosition.x += x;
    CurrentPosition.y += y;
    CurrentPosition.r += r;
    showBoard();
    return true;
  } else {
    PutBlock(
      CurrentPosition.i,
      CurrentPosition.x,
      CurrentPosition.y,
      CurrentPosition.r
    );
    return false;
  }
};

window.onload = () => {
  PutBlock(
    CurrentPosition.i,
    CurrentPosition.x,
    CurrentPosition.y,
    CurrentPosition.r
  );
  document.onkeydown = (e) => {
    if (CurrentPosition.gameover) {
      return;
    }
    switch (e.key) {
      case "ArrowLeft":
        // 左
        MoveMino(-1, 0, 0);
        break;
      case "ArrowRight":
        // 右
        MoveMino(1, 0, 0);
        break;
      case "ArrowUp":
        MoveMino(0, 0, 1);
        // 上-
        break;

      case "ArrowDown":
        MoveMino(0, 1, 0);
        // 下
        break;
      default:
        break;
    }
  };
  showBoard();
};
