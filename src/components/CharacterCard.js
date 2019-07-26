import React from 'react'

export default function CharacterCard (props) {
  const { character } = props;
  const { created, gender, image, location, name, species, status } = props.character;
  console.log(props);
  console.log(name);
  console.log(created);
  console.log(gender);
  console.log(location.name);
  console.log(species);
  console.log(status);
  return (
    <div className="character-wrap">
      <div className="character-card">
        <h1>{name}</h1>
        <img src={image} />
        <div className="character-created">
          Created: <h3>{created}</h3>
        </div>
      <div className="character-gender">
          Gender: <h3>{gender}</h3>
        </div>
        <div className="character-location">
          Location: <h3>{location.name}</h3>
        </div>
        <div className="character-species">
          Species: <h3>{species}</h3>
        </div>
        <div className="character-status">
          status: <h3>{status}</h3>
        </div>
      </div>
    </div>
    // <span>todo: location</span>
  )};
