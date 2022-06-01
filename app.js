// endpoitn => c'est la route
const express = require('express');
const app = express();
require('dotenv').config();
const chalk = require('chalk');
const progressBar = require('progress');
const {DB_USERNAME, DB_PASS} = process.env;
const eleves= [
    {name: "tech",age:20},
    {name: "Zola",age:32},
    {name: "cheikh",age:21},
]
app.get('/choix',(req,res) =>{
    res.send(eleves);
});
app.listen(4000,()=>{
    console.log('le server listening on '+ chalk.green(chalk.underline('localhost:4000')));
})
console.log(DB_USERNAME,' ',DB_PASS);