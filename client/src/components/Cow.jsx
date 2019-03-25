import React from 'react';

const Cow = (props) => (
  <div> {console.log(props)}
    <h2>{props.cow.id} {props.cow.name}</h2>
    <p>{props.cow.description}</p>
  </div>
)

export default Cow;