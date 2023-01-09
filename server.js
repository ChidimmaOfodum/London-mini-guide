const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());
const port = 8001;

//....................reading files.............................

// const harrow = JSON.parse(fs.readFileSync(`${__dirname}/data/Harrow.json`, "utf8"))
const harrow = require("./data/Harrow.json");
const heathrow = require("./data/Heathrow.json");
const stratford = require("./data/Stratford.json");

const data = { harrow: harrow, heathrow: heathrow, stratford: stratford };

//..........defining routes........................................................

app.get("/:city", (req, res) => {
  let city = req.params.city.toLowerCase();
  res.send(data[city]);
});

app.get("/:city/:place", (req, res) => {
  const city = req.params.city.toLowerCase();
  const place = req.params.place.toLowerCase();
  const result = data[city][place];
  if (result) {
    res.json(result);
  } else {
    res.status(404).send("Not found");
  }
});

app.post("/test", (req, res) => {
  console.log(req.body);
  res.json({
    status: "success",
    data: req.body,
  });
});

//.......................Starting Server....................................

app.listen(port, () => {
  console.log("Listening on port " + port);
});
