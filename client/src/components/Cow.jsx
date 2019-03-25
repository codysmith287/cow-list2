import React from 'react';

const Cow = (props) => (
  <div>
    <h2>{props.cow.name}</h2>
    <p>{props.cow.description}</p>
  </div>
)

export default Cow;