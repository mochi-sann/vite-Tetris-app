// [ 回転できる通り . [ 初期のブロックの場所x  , y]]
export type MinoPatternType = {
  RountaionNumber: number; // 下院店できる数
  blocks: Array<[number, number]>;
};
export const MinoPattern: Array<MinoPatternType> = [
  { RountaionNumber: 0, blocks: [] }, // 何もなし
  {
    // I
    RountaionNumber: 2,
    blocks: [
      [-1, 0],
      [0, 0],
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
      [0, 0],
      [1, 1],
    ],
  },
  {
    // Z 左
    RountaionNumber: 2,
    blocks: [
      [-1, 0],
      [0, 0],
      [0, 1],
      [1, 1],
    ],
  },
  {
    // Square
    RountaionNumber: 2,
    blocks: [
      [0, 1],
      [0, 0],
      [1, 0],
      [1, 1],
    ],
  },
  {
    //L字右
    RountaionNumber: 2,
    blocks: [
      [-1, 0],
      [0, 0],
      [1, 0],
      [1, 1],
    ],
  },
  {
    //L 字 左
    RountaionNumber: 2,
    blocks: [
      [0, 1],
      [0, 0],
      [1, 0],
      [1, -1],
    ],
  },
  {
    // T
    RountaionNumber: 2,
    blocks: [
      [-1, 0],
      [0, 0],
      [0, 1],
      [0, -1],
    ],
  },
];
