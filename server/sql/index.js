const express = require("express");
const mysql = require('mysql2')
const app = express();

app.use(express.json());
//create connection with mysql
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "test",
});

app.get("/",(req,res)=>{
  res.status(200).send("hello from server");
})

app.get("/books", (req, res) => {
  const q = "select title from books";
  db.query(q, (err, data) => {
    if (data) {
      return res.json(data);
    }
    return res.json(err);
  });
});

//with where clause finding specific book by id
app.get("/books/:id",(req,res)=>{
  const bookId=req.params.id;
  const q=`select * from books where id=${bookId}`
  db.query(q,(err,data)=>{
    if(data){
      return res.json(data);
    }
    return res.json(err);
  })
})

//insrt new book
app.post("/new/book",(req,res)=>{
  const q = "INSERT INTO books(`title`, `desc`, `cover`) VALUES (?)";
  const values=[req.body.title,req.body.desc,req.body.cover]
  db.query(q,[values],(err,data)=>{
    if(data){
      return res.json(data);
    }
    return res.json(err);
  })
})

app.listen(3000, () => {
  console.log("server is running");
});
