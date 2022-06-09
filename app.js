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
// defin routes for the apis
// require('./api/modules/clients/clients.routes')(app);
//AUTOLOAD ROUTES
var routes = Files.walk(__dirname + "/modules");
// import publics routes 
for (var i = 0; i < routes.length; i++)
  if (routes[i].indexOf("public.routes") !== -1) require(routes[i])(app);
// use the gard /middleware
require("./modules/auth/auth.gard")(app);
for (var i = 0; i < routes.length; i++)
// import privates routes 
  if (
    routes[i].indexOf("routes") !== -1 &&
    routes[i].indexOf("public.routes") == -1
  )
    require(routes[i])(app);

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
