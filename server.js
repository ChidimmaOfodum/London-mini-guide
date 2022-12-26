const express = require("express");
const fs = require("fs")
const app = express();
const port = 3000;

//....................reading files.............................

const harrow = JSON.parse(fs.readFileSync(`${__dirname}/data/Harrow.json`, "utf8"))
const heathrow = JSON.parse(fs.readFileSync(`${__dirname}/data/Heathrow.json`, "utf8"))
const stratford = JSON.parse(fs.readFileSync(`${__dirname}/data/Stratford.json`, "utf8"))

//..........defining routes........................................................

app.get("/pharmacies", (req, res) => {
    let {pharmacies} = stratford;
    res.send(pharmacies)
})

app.listen(port, () => {
    console.log("Listening on port " + port)
})




