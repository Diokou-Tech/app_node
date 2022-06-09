// endpoint => c'est la route
const express = require("express");
const app = express();
require("dotenv").config();
const chalk = require("chalk");
const ProgressBar = require("progress");
const Files = require("fileworkdiokou");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const { DB_USERNAME, DB_PASS, PORT } = process.env;

// require('./api/modules/clients/clients.routes')(app);

//AUTOLOAD ROUTES
var routes = Files.walk(__dirname + "/modules");
//IMPORT THE PUBLIC ROUTES 
for (var i = 0; i < routes.length; i++)
  if (routes[i].indexOf("public.routes") !== -1) require(routes[i])(app);

// USE THE GARDE / MIDDLEWARE
require("./modules/auth/auth.gard")(app);

//IMPORT ROUTES PRIVATES
for (var i = 0; i < routes.length; i++)
  if (
    routes[i].indexOf("routes") !== -1 &&
    routes[i].indexOf("public.routes") == -1
  )
    require(routes[i])(app);
// LANCH APP SERVER
app.listen(PORT, () => {
  console.log(
    "le server listening on " +
      chalk.green(chalk.underline("localhost:" + PORT))
  );
});
console.log(DB_USERNAME, " ", DB_PASS);
// const bar = new ProgressBar(':bar',{total: 5});
// const timer = setInterval(()=>{
//     bar.tick();
//     if(bar.complete){
//         clearInterval();
//     }
// },100);
