//defining variables to require express and set port number

const express = require('express')
const app = express()
const PORT = 8000
//defining variable for object
const boxers = {
    'muhammad ali':  {
        'ringName': 'The Greatest',
        'birthName': 'Cassius Clay',
        'birthLocation': 'Louisville, KY',
        'titleDefenses': 10
    },
    'mike tyson': {
        'ringName': 'Iron Mike',
        'birthName': 'Michael Gerard Tyson',
        'birthLocation': 'Brooklyn, NY',
        'titleDefenses': 9
    },
    'joe lewis': {
        'ringName': 'Brown Bomber',
        'birthName': 'Joseph Louis Barrow',
        'birthLocation': 'LaFayette, AL',
        'titleDefenses': 25
    },
    'unknown':  {
        'ringName': 'Unknown',
        'birthName': 'Unknown',
        'birthLocation': 'Unknown',
        'titleDefenses': 'Unknown'
    }
}
//get handling standardized for file location and set to html index page
app.get('/', (request, response) =>{
    response.sendFile(__dirname + '/index.html')
})
//get handling for object data set to lowercase; responding with json
app.get('/api/:name', (request,response)=>{
    const boxerName = request.params.name.toLowerCase()
    if (boxers[boxerName]){
        response.json(boxers[boxerName])
    } else {
        response.json(boxers['unknown'])
    }
    
})
//listen handling set with literal based on PORT variable so I can change the port later without having to update anything except the variable
app.listen(PORT, ()=>{
    console.log(`The server is now running on port ${PORT}!`)
})