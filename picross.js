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



// var test = document.getElementById('test')
// test.addEventListener('click', function(event){
//     test.style.backgroundColor = 'black'

// })

//likely need to recreate this so they all have indivudal ids