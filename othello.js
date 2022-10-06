var counter = 1;

function placeToken(id)
    {
    console.log(counter);
    console.log("ID: " + id) //confirming that the id is being properly read
    var clickedSquare1 = document.getElementById(id);
    clickedSquare2 = clickedSquare1.src.split("/").pop();
    var clickedPath = "/images/" + clickedSquare2;
    console.log(clickedPath);

    if (counter % 2 == 1)
        {
        if (clickedPath == "/images/emptySquare.png")
            {
            console.log("inside odd"); //confirming that the conditional works
            clickedSquare1.src = "/images/blackToken.png";
            }

        }
    else
        {
        console.log("inside even"); //confirming that the conditional works
        clickedSquare1.src = "/images/whiteToken.png";
        }
    counter++;
    }


