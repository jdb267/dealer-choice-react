const path = require('path');
const express = require('express');
const app = express();
const { syncAndSeed, Team, db } = require('./db/index');

const faker = require('faker');

const PORT = process.env.PORT || 3000;
const PUBLIC_PATH = path.join(__dirname, '../public');
const DIST_PATH = path.join(__dirname, '../dist');

app.use(express.json());
app.use(express.static(PUBLIC_PATH));
app.use(express.static(DIST_PATH));

app.get('/teams', async (req, res, next) => {
  res.send(await Team.findAll());
});

app.post('/add', async (req, res, next) => {
  const name = `${faker.animal.bird()}s`;
  const city = faker.address.cityName();
  res.send(
    await Team.create({
      abbreviation: faker.lorem.word(),
      teamName: `${city} ${name}`,
      simpleName: name,
      location: city,
    })
  );
});

app.delete('/delete/:id', async (req, res, next) => {
  const deletedTeam = await Team.findByPk(req.params.id);
  deletedTeam.destroy();
  res.sendStatus(204);
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

const init = () => {
  syncAndSeed();
  app.listen(PORT, () => {
    console.log(`Server listening on PORT: ${PORT}`);
  });
};

init();
