for(var i = 0; i < 10; i++){
    var row = document.createElement('div')
    row.classList.add('row')                    //creating a new row div

    for(var j = 0; j < 10; j++){
        var cell = document.createElement('div')
        cell.classList.add('cell')
        row.appendChild(cell)                   //creating a cell div and adding 10 of them to the row div to create a line
    }

    container.appendChild(row)                  //adding the row that is filled with cells to the container
}



// a function to handle a box getting clicked
// right now it just changes the box color
function boxClicked (event) {

    var currentButton = event.target

    if (currentButton.classList[0] === 'cell'){
        currentButton.classList.toggle('box-clicked')
        console.log(currentButton)
    }
    //could add a class to curent target boxes that will be a way to check with the answer sheet
}

var boxContainer = document.getElementById ('container')
boxContainer.addEventListener ('click', boxClicked)



