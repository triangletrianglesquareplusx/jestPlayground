function buildChessBoard(length, width, character){
    let chessBoard = '';
    for(let i = 0; i < length; i++){
        chessBoard += buildEvenRow(width, character);
        chessBoard += leaveSpace();
        chessBoard += buildOddRow(width, character);
        chessBoard += leaveSpace();
    }
    return chessBoard;
    
}

function buildEvenRow(width, character){
    let smallestBuildingBlock = `${character} `;
    let row = '';
    for(let i = 0; i< width;i++){
        row+= smallestBuildingBlock;
    }
    return row;
    
}

function buildOddRow(width, character){
    let smallestBuildingBlock = ` ${character}`;
    let row = '';
    for(let i = 0; i<width;i++){
        row += smallestBuildingBlock;
    }
    return row;
}

function leaveSpace(){
    return '\n'
}


module.exports = { buildChessBoard, buildOddRow, leaveSpace, buildEvenRow };

