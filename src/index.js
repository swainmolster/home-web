const app = require('express')();

app.get('/', (req, res) => {
  res.send('Cleveland Cavaliers are world champs!');
});

app.listen(3000, () => console.log('Server running'));
