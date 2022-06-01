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

// sets up a default solution (where all answers are zero)
// size should be an integer by now
function defaultSolution (puzzleSize) {
    for (var i = 0; i < (puzzleSize * puzzleSize); i++ ) {
        solution.push(0)
    }
}

// a function to handle a box getting clicked
// right now it just changes the box color
function boxClicked (event) {

    var currentButton = event.target
    var action = document.querySelector('input[name="select"]:checked').id

    if (currentButton.classList[0] === 'cell' && action === "select-color"){
        // change looks
        currentButton.classList.remove('box-crossed')
        currentButton.classList.toggle('box-clicked')
    }
    else if (currentButton.classList[0] === 'cell' && action === "select-cross-out"){
        // change looks
        currentButton.classList.remove('box-clicked')
        currentButton.classList.toggle('box-crossed')
    }

    // change answer
    // can probably be optimized
    for (var i = 0; i < puzzleSize * puzzleSize; i++) {
        if (allCells[parseInt(i)].classList.contains("box-clicked")) {
            solution [parseInt(i)] = 1
        } else {
            solution [parseInt(i)] = 0
        }
    }

    console.log(solution)
    //could add a class to curent target boxes that will be a way to check with the answer sheet
}


//get the current puzzle data if on a puzzle page
//the size is stored in puzzleSizem, the solution in puzzleSol and the nam in puzzleName
fetch("/puzzleData.json", {
    method: 'GET'
})
.then(res => res.json())
.then(data => {
    console.log(data)
    cururl = window.location.pathname
    cururlparts = cururl.split('/')
    if(cururlparts[1] === 'puzzle'){
        puzzleSol = data.puzzles[parseInt(cururlparts[2])].solution
        puzzleSize = data.puzzles[parseInt(cururlparts[2])].size
        puzzleName =  data.puzzles[parseInt(cururlparts[2])].name
    }
})
.then(res => {
    defaultSolution (puzzleSize)    
})



// set up an empty solution
var allCells = document.getElementsByClassName("cell")
var solution = []

// set up box event listener
var boxContainer = document.getElementById ('container')
boxContainer.addEventListener ('click', boxClicked)



