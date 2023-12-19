const express = require('express');
const mysql = require('mysql2');
const cors = require('cors')
const app = express();
app.use(cors())
app.use(express.json());


const connection = mysql.createConnection({
    host: 'mysql-224da6f9-sahilnegi-bf3c.a.aivencloud.com',
    user: 'avnadmin',
    password: 'AVNS_VW9Cu4NbLc2k-sfocnv',
    database: 'User_details',
    port:10828
  })

  connection.connect(function(err) {
    if (err) {
        console.log(err);
        console.log("err1");
        return 
    }
    console.log('You are now connected...')
    // connection.query('CREATE TABLE people(id int primary key, name varchar(255), age int, address text)', function(err, result) {});

    //     connection.query('INSERT INTO people (id,name, age, address) VALUES (?, ?, ?, ?)', [ 1,'Larry', '41', 'CaliforniaUSA'], function(err, result) {
    //         if (err) {
    //             console.log(err);
    //             console.log("err2");
    //             return 
    //         }
    //     connection.query('SELECT * FROM people', function(err, results) {
    //         if (err) {
    //             console.log("err");
    //             return 
    //         }
    //       console.log(results[0].id)
    //       console.log(results[0].name)
    //       console.log(results[0].age)
    //       console.log(results[0].address)
    //     })
    //   })
    }) 

    // connection.query('delete from payment',
    // function(err, results) {
    //    if(err){
    //        console.log(err);
    //        console.log("err");
    //        return;
    //    }
    //    console.log(results);
    //        })
    // connection.query('delete from users',
    //  function(err, results) {
    //     if(err){
    //         console.log(err);
    //         console.log("err");
    //         return;
    //     }
    //     console.log(results);
    //         })



app.post('/paid', (req , res)=>{
    const {email , payment_status} = req.body;

    connection.query(`insert into payment(   email , payment_status)  
    values (?  ,  ? )`,[  email, payment_status ]  ,
     function(err, results) {
        if(err){
            console.log(err);
            console.log(" payment error");
            return;
        }
        console.log(results);
            })
    res.status(200).json("Payed successfully");

    
});

app.post(('/formSubmit') , (req  , res)=>{
    const {user_name , email , age , batch_timing , Date_Of_Payment}  = req.body;
    console.log(user_name , typeof user_name);
    console.log("Form-data");
    // console.log(formData);
    // ${user_name} , ${email} , ${age} , ${batch_timing}, ${Date_Of_payment} 
    connection.query(`insert into users( user_name , email , age , batch_timing, Date_Of_payment )  
    values (?  ,  ? ,  ? , ? , ? )`,[user_name , email , age , batch_timing, Date_Of_Payment ]  ,
     function(err, results) {
        if(err){
            console.log(err);
            console.log("err");
            return;
        }
        console.log(results);
            })
    res.status(200).json("Form Stored successfully");
    
});

app.get('/', (req , res )=>{
    console.log("Working")
 
})



app.listen(5000,()=>{
    console.log('hello')
})