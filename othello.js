var counter = 1;

function placeToken(id)
    {
    console.log(counter);
    console.log("ID: " + id) //confirming that the id is being properly read
    var row = id.substring(1,2);
    var col = id.substring(3,4);
    console.log("Row: " + row);
    console.log("Col: " + col);

    var clickedSquare = document.getElementById(id);
    var pathEnd = clickedSquare.src.split("/").pop();
    var clickedPath = "/images/" + pathEnd;
    var whitesTurn = false;
    var blacksTurn = false;

    if (counter % 2 == 1)
        {
        whitesTurn = true;
        if (clickedPath == "/images/emptySquare.png")
            {
            clickedSquare.src = "/images/blackToken.png";
            }
        }
    else
        {
        blacksTurn = true;
        if (clickedPath == "/images/emptySquare.png")
            {
            clickedSquare.src = "/images/whiteToken.png";
            }

        }
    //flipHorizontal();
    counter++;
    }

// function flipHorizontal()
//     {
//     //looking left
//     if (clickedPath == "/images/blackToken.png") && 
    
//     if (Board.board[row][col].equals("X") && Board.board[row][col - 1].equals("O"))
//     {
//     for(int i = col - 1; i >= 0; i-- )
//         {
//         if(Board.board[row][i].equals("X"))
//             {
//             flipXLeft(i);
//             }
//         }
//     }
    


