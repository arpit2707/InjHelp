const Sequelize = require('sequelize'); 


const sequelize = new Sequelize('node-complete','root','Arpit@723',{dialect:'mysql',host:"localhost"})

// const pool = mysql.createPool({
//     host:'localhost',
//     user:'root',
//     database:'node-complete',
//     password:'Arpit@723'
// });

module.exports = sequelize;