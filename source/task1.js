export function buildChessBoard(length, width, character) {
  let chessBoard = "";
  for (let i = 0; i < length; i++) {
    chessBoard += buildEvenRow(width, character);
    chessBoard += leaveSpace();
    chessBoard += buildOddRow(width, character);
    chessBoard += leaveSpace();
  }
  return chessBoard;
}

export function buildEvenRow(width, character) {
  let smallestBuildingBlock = `${character} `;
  let row = "";
  for (let i = 0; i < width; i++) {
    row += smallestBuildingBlock;
  }
  return row;
}

export function buildOddRow(width, character) {
  let smallestBuildingBlock = ` ${character}`;
  let row = "";
  for (let i = 0; i < width; i++) {
    row += smallestBuildingBlock;
  }
  return row;
}

export function leaveSpace() {
  return "\n";
}
