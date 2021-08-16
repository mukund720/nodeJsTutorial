var mysql=require("mysql");
// need 4 things to connect with db
var conn=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'B560b560@',
    database:"mukund_programming"
})
conn.connect();
var sql_query="select * from user";
conn.query(sql_query,(error,results,fields)=>{
    if(error)
    {
        console.log(error.message);
    }
    else
    {
        console.log(results);
    }

})