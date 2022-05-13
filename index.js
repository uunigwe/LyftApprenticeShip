//If you don’t have a current code sample you can share, please write a small web application in one of the above languages (Python/Ruby/Javascript). The application only needs to do the following:
//Accept a POST request to the route “/test”, which accepts one argument “string_to_cut”
//Return a JSON object with the key “return_string” and a string containing every third letter from the original string
//(e.g.) If you POST {"string_to_cut": "iamyourlyftdriver"}, it will return: {"return_string": "muydv"}.
//
//Note: To see expected behavior you can test against a current working example with the command: 
// curl -X POST http://localhost:3000/test --data '{"string_to_cut": "iamyourlyftdriver"}' -H 'Content-Type: application/json'

const express = require('express');
const app     = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

let obj = { "string_to_cut" : 'iamyourlyftdriver' }

app.get('/', function(req, res){
    res.send("Lyft World!")
});

app.post('/test', function(req, res){
    res.setHeader('Content-Type', 'application/json');
    console.log(res.body)
    
     
   let string_to_cuts = obj.string_to_cut.split('');
   const results = {}
     function stringed (obj) {
     for(let i=0; i <string_to_cuts.length; i+=3){
     results.push('return_string:' + string_to_cuts[i]);
      }
      return results;
   }
   res.send(stringed(obj))
   console.log(res.send(stringed(obj)))
});

app.listen(3000, () => {
    console.log('Running on port 3000');
})