
// accepts a text file on the arguments line
// ex) node temperatureConverter input.txt

var fs = require('fs');


var content;
function readLines () {
   fs.readFile(process.argv[2], function(err,data) {
      if (err) {
         throw err;
      }
      content = data.toString();
      processFile();
   }) ;

}

function processFile(){
   var lines = content.split("\n");

   lines.forEach(function(line) {
      var number = line.slice(0,-2);
      var finalNum;
      
      if ((line.slice(-1) === 'd') && (line.slice(-2,-1) === 'r')) {
         finalNum = parseInt(number / 3.14 * 180) + 'd';
      } else if (line.slice(-1) === 'r' && line.slice(-2,-1) === 'd'){
         finalNum = (number * 3.14 / 180);
         finalNum = (Math.round(finalNum * 100) / 100) + 'r';
      } else if (line.slice(-1) === 'c' && line.slice(-2,-1) === 'f') {
         finalNum = (number -32) * 5/9;
         finalNum += 'c'
      } else if (line.slice(-1) === 'f' && line.slice(-2,-1) === 'c') {
         finalNum = (number * 9/5) + 32;
         finalNum += 'f'
      } else if ((line.slice(-1) === 'c' && line.slice(-2,-1) === 'k')){
         finalNum = number - 273.15;
         finalNum += 'c';
      } else if ((line.slice(-1) === 'f' && line.slice(-2,-1) === 'k')){
         finalNum = (number * 9/5) - 459.67;
         finalNum += 'f';
      }  else if ((line.slice(-1) === 'k' && line.slice(-2,-1) === 'c')){
         finalNum = Number(number) + 273.15;
         finalNum += 'k';
      } else if ((line.slice(-1) === 'k' && line.slice(-2,-1) === 'f')){
         finalNum = (Number(number) + 459.67);
         finalNum = finalNum * 5/9;
         finalNum = (Math.round(finalNum * 100) / 100) + 'k';
      } else {
         finalNum = "No candidate for conversion";
      };

      console.log(finalNum);
   }) 
   
   
}

readLines();