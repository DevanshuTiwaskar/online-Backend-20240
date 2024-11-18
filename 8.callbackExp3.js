// function greet(name) {
//     console.log('hello ' + name);
// }

// function processUserInput(callback) {
//     let name = prompt('Please enter your name');
//     callback(name);
// }

// processUserInput(greet);

// //run this code using html files


const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function greet(name) {
  console.log('hello ' + name);
}

function processUserInput(callback) {
  rl.question('Please enter your name: ', function(name) {
    callback(name);
    rl.close();
  });
}

processUserInput(greet);
