const request = require('request');
const arg= process.argv;
const fs = require('fs');

request(arg[2], (error, response, body)=>{
  fs.appendFile(arg[3], body, (err)=>{
    if (err) {
    throw err;}
  console.log(`Downloaded and saved ${body.length} to ${arg[3]}!`);})

});

