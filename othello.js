var counter = 1;

function placeToken(id)
    {
    console.log(counter);
    console.log("ID: " + id) //confirming that the id is being properly read
    var clickedSquare1 = document.getElementById(id);
    clickedSquare2 = clickedSquare1.src.split("/").pop();
    var clickedPath = "/images/" + clickedSquare2;

    if (counter % 2 == 1)
        {
        if (clickedPath == "/images/emptySquare.png")
            {
            clickedSquare1.src = "/images/blackToken.png";
            }
        }
    else
        {
        if (clickedPath == "/images/emptySquare.png")
            {
            clickedSquare1.src = "/images/whiteToken.png";
            }

        }
    counter++;
    }


