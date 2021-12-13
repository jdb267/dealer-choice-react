import React from 'react';
import axios from 'axios';
import Team from './Team';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      teams: [],
    };
  }

  async componentDidMount() {
    const { data } = await axios.get('/teams');
    this.setState({ teams: data });
  }

  addTeam = async () => {
    const { data } = await axios.post('/add');
    this.setState({
      teams: [...this.state.teams, data],
    });
  };

  deleteTeam = async (id) => {
    await axios.delete(`/delete/${id}`);
    this.setState({
      teams: this.state.teams.filter((team) => {
        return team.id !== id;
      }),
    });
  };

  render() {
    const { teams } = this.state;
    return (
      <div className="team">
        <h1>Create Your Own League</h1>
        <img src="nba-logo.png" width="50px" />
        <button onClick={this.addTeam}> Add team </button>
        {teams.map((team) => (
          <Team team={team} deleteTeam={this.deleteTeam} />
        ))}
      </div>
    );
  }
}
