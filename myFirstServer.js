const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const sql = require("./db.js");

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true
}));

app.get("/", (req, res) => {
res.json({ message: "Welcome to web course example application." });
});

// getting all customers
app.get("/customers", function(req, res){
    sql.query("SELECT * FROM customers", (err, mysqlres) => {
    if (err) {
    console.log("error: ", err);
    res.status(400).send({message: "error in getting all customers: " + err});
    return;
    }
    console.log("got all customers...");
    res.send(mysqlres);
    return;
    });
    });

app.listen(3000, () => {
console.log("Server is running on port 3000."
);
});
