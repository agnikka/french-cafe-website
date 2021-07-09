const express = require('express');
const bodyParser = require('body-parser');
const crypto = require('crypto');
const data = require('./data');

const app = express();
// app.use(express.json());
const port = 3000;
const users = data.users;
const schedules = data.schedules;

app.get('/', (req, res) => {
  res.send('Welcome to our schedule website');
});

app.get('/users', (req, res) => {
  res.send(users);
});

app.get('/users/:id', (req, res) => {
  const id = Number(req.params.id);
  if (users[id] === undefined) {
    res.status(404).send(`Incorrect user id: ${id}`);
  }
  res.send(users[id]);
});

app.get('/users/:id/schedules', (req, res) => {
  const id = Number(req.params.id);
  const usersSchedules = [];
  schedules.forEach((item) => {
    if (item.user_id === id) {
      usersSchedules.push(item);
    }
  });
  if (users[id] === undefined) {
    res.status(404).send(`Incorrect user id: ${id}`);
  }
  if (usersSchedules.length === 0) {
    res.send('No schedules for this user');
  }
  res.send(usersSchedules);
});

app.get('/schedules', (req, res) => {
  res.send(schedules);
});

// app.post('/schedules', (req, res) => {
// });

app.listen(port, () => {
  console.log(`Started on PORT ${port}`);
});

// Będzie zwracać nowo utworzonego użytkownika.
// Hasło użytkownika musi być zaszyfrowane w SHA256.