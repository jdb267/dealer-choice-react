const { db } = require('./index');

const Team = db.define('team', {
  abbreviation: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  teamName: {
    type: Sequelize.STRING,
  },
  simpleName: {
    type: Sequelize.STRING,
  },
  location: {
    type: Sequelize.STRING,
  },
});

module.exports = { Team };
