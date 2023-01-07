const express = require("express");
const app = express();
const port = 3000;

//....................reading files.............................

// const harrow = JSON.parse(fs.readFileSync(`${__dirname}/data/Harrow.json`, "utf8"))
const harrow = require("./data/Harrow.json")
const heathrow = require("./data/Heathrow.json")
const stratford = require("./data/Stratford.json")


//..........defining routes........................................................
let {pharmacies, colleges, hospitals, doctors} = stratford

app.get("/pharmacies", (req, res) => {
    res.json(pharmacies)
})

app.get("/colleges", (req, res) => {
  res.json(colleges);
});

app.get("/hospitals", (req, res) => {
    res.json(hospitals)
   ;
});

app.get("/doctors", (req, res) => {
    res.json(doctors);
});

//.......................Starting Server....................................

app.listen(port, () => {
    console.log("Listening on port " + port)
})






