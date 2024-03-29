const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost/nba_db', {
  logging: false,
});
// const faker = require('faker');

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

const syncAndSeed = async () => {
  await db.sync({ force: true });

  teams.forEach(
    async (team) =>
      await Team.create({
        abbreviation: team.abbreviation,
        teamName: team.teamName,
        simpleName: team.simpleName,
        location: team.location,
      })
  );
};

module.exports = {
  syncAndSeed,
  Team,
  db,
};

const teams = [
  {
    abbreviation: 'ATL',
    teamName: 'Atlanta Hawks',
    simpleName: 'Hawks',
    location: 'Atlanta',
  },
  {
    abbreviation: 'BOS',
    teamName: 'Boston Celtics',
    simpleName: 'Celtics',
    location: 'Boston',
  },
  {
    abbreviation: 'BKN',
    teamName: 'Brooklyn Nets',
    simpleName: 'Nets',
    location: 'Brooklyn',
  },
  {
    abbreviation: 'CHA',
    teamName: 'Charlotte Hornets',
    simpleName: 'Hornets',
    location: 'Charlotte',
  },
  {
    abbreviation: 'CHI',
    teamName: 'Chicago Bulls',
    simpleName: 'Bulls',
    location: 'Chicago',
  },
  {
    abbreviation: 'CLE',
    teamName: 'Cleveland Cavaliers',
    simpleName: 'Cavaliers',
    location: 'Cleveland',
  },
  {
    abbreviation: 'DAL',
    teamName: 'Dallas Mavericks',
    simpleName: 'Mavericks',
    location: 'Dallas',
  },
  {
    abbreviation: 'DEN',
    teamName: 'Denver Nuggets',
    simpleName: 'Nuggets',
    location: 'Denver',
  },
  {
    abbreviation: 'DET',
    teamName: 'Detroit Pistons',
    simpleName: 'Pistons',
    location: 'Detroit',
  },
  {
    abbreviation: 'GSW',
    teamName: 'Golden State Warriors',
    simpleName: 'Warriors',
    location: 'Golden State',
  },
  {
    abbreviation: 'HOU',
    teamName: 'Houston Rockets',
    simpleName: 'Rockets',
    location: 'Houston',
  },
  {
    abbreviation: 'IND',
    teamName: 'Indiana Pacers',
    simpleName: 'Pacers',
    location: 'Indiana',
  },
  {
    abbreviation: 'LAC',
    teamName: 'Los Angeles Clippers',
    simpleName: 'Clippers',
    location: 'Los Angeles',
  },
  {
    abbreviation: 'LAL',
    teamName: 'Los Angeles Lakers',
    simpleName: 'Lakers',
    location: 'Los Angeles',
  },
  {
    abbreviation: 'MEM',
    teamName: 'Memphis Grizzlies',
    simpleName: 'Grizzlies',
    location: 'Memphis',
  },
  {
    abbreviation: 'MIA',
    teamName: 'Miami Heat',
    simpleName: 'Heat',
    location: 'Miami',
  },
  {
    abbreviation: 'MIL',
    teamName: 'Milwaukee Bucks',
    simpleName: 'Bucks',
    location: 'Milwaukee',
  },
  {
    abbreviation: 'MIN',
    teamName: 'Minnesota Timberwolves',
    simpleName: 'Timberwolves',
    location: 'Minnesota',
  },
  {
    abbreviation: 'NOP',
    teamName: 'New Orleans Pelicans',
    simpleName: 'Pelicans',
    location: 'New Orleans',
  },
  {
    abbreviation: 'NYK',
    teamName: 'New York Knicks',
    simpleName: 'Knicks',
    location: 'New York',
  },
  {
    abbreviation: 'OKC',
    teamName: 'Oklahoma City Thunder',
    simpleName: 'Thunder',
    location: 'Oklahoma City',
  },
  {
    abbreviation: 'ORL',
    teamName: 'Orlando Magic',
    simpleName: 'Magic',
    location: 'Orlando',
  },
  {
    abbreviation: 'PHI',
    teamName: 'Philadelphia 76ers',
    simpleName: '76ers',
    location: 'Philadelphia',
  },
  {
    abbreviation: 'PHX',
    teamName: 'Phoenix Suns',
    simpleName: 'Suns',
    location: 'Phoenix',
  },
  {
    abbreviation: 'POR',
    teamName: 'Portland Trail Blazers',
    simpleName: 'Trail Blazers',
    location: 'Portland',
  },
  {
    abbreviation: 'SAC',
    teamName: 'Sacramento Kings',
    simpleName: 'Kings',
    location: 'Sacramento',
  },
  {
    abbreviation: 'SAS',
    teamName: 'San Antonio Spurs',
    simpleName: 'Spurs',
    location: 'San Antonio',
  },
  {
    abbreviation: 'TOR',
    teamName: 'Toronto Raptors',
    simpleName: 'Raptors',
    location: 'Toronto',
  },
  {
    abbreviation: 'UTA',
    teamName: 'Utah Jazz',
    simpleName: 'Jazz',
    location: 'Utah',
  },
  {
    abbreviation: 'WAS',
    teamName: 'Washington Wizards',
    simpleName: 'Wizards',
    location: 'Washington',
  },
];
