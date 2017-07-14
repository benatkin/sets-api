const app = require('express')();

const sets = {
  food: ["Burrito", "Spaghetti", "Kebab"],
  transport: ["Walk", "Bike", "Drive"]
};

app.get('/sets', (req, res) => {
  res.send(Object.keys(sets));
});

app.get('/sets/:key', (req, res) => {
  const set = sets[req.params.key];
  if (set) {
    res.json(set).end();
  } else {
    res.status(404).json({error: 'Not found'}).end();
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
