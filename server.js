const express = require("express");
const app = express();
const port = 3000;

//....................reading files.............................

// const harrow = JSON.parse(fs.readFileSync(`${__dirname}/data/Harrow.json`, "utf8"))
const harrow = require("./data/Harrow.json");
const heathrow = require("./data/Heathrow.json");
const stratford = require("./data/Stratford.json");

const data = { harrow: harrow, heathrow: heathrow, stratford: stratford };

//..........defining routes........................................................
let { pharmacies, colleges, hospitals, doctors } = stratford;

app.get("/pharmacies", (req, res) => {
  res.json(pharmacies);
});

app.get("/colleges", (req, res) => {
  res.json(colleges);
});

app.get("/hospitals", (req, res) => {
  res.json(hospitals);
});

app.get("/doctors", (req, res) => {
  res.json(doctors);
});

// routes to get data in all cities

// :/city/:category

app.get("/:city", (req, res) => {
  let city = req.params.city.toLowerCase();
  res.send(data[city]);
});

app.get("/:city/:place", (req, res) => {
  const city = req.params.city.toLowerCase();
  const place = req.params.place.toLowerCase();
  const result = data[city][place];
  if(result) {
    res.json(result)
  } else {
    res.status(404).json({
        message: "Not found"
    })
  }
});

//.......................Starting Server....................................

app.listen(port, () => {
  console.log("Listening on port " + port);
});
