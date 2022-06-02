var path = require('path') 
var express = require('express') 
var exphbs = require('express-handlebars')

var port = process.env.PORT || 3000 
var app = express() 

app.engine('handlebars', exphbs.engine({defaultLayout: 'main'})) 
app.set('view engine', 'handlebars')
//set it to use main handlebars then anything you render will be inside of the {{{body}}}

//serves the index template
app.use(express.static('public')) 

var allpuzzles = require('./puzzleData.json')

//opens the home page (not created yet)
app.get('/', function(req, res, next){
    res.status(200).render('homePage')
})

//opens the puzzle corrosponding to n 
//(differentiating betwwen the puzzles is done client side based on url)
app.get('/puzzle/:n', function (req, res, next){
    var n = parseInt(req.params.n)
    if(allpuzzles.puzzles[n]){
        res.status(200).render('puzzlePage')
    }else{
        next()
    }
})

app.get('/puzzleData.json', function(req, res){
    res.status(200).sendFile(__dirname + "/puzzleData.json")
})

app.get('*', function (req, res) {
    res.status(404).render('404')
    //render the 404 handlebar
})

app.listen(port, function () {
	console.log("== Server is listening on port " + port) 
})