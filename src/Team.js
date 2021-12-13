import React from 'react';

function Team(props) {
  const { team, deleteTeam } = props;
  const { id, teamName, simpleName, location } = team;
  return (
    <div key={team.id} className="team">
      <h1> {teamName} </h1>
      <p>
        The {simpleName} will be playing tonight in {location}!
      </p>
      <button onClick={() => deleteTeam(id)}>Delete</button>
    </div>
  );
}

export default Team;
