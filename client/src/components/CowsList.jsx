import React from 'react';

const CowList = (props) => (
  // map out cow list
  <div>
    {props.cows.map((cow, index) => {
      return (
        <div
          key = {index}
          onClick = {() => props.onCowListClick(cow.id)}
        >
          <h4>{cow.name}</h4>
        </div>
      );
    })}
  </div>
)


export default CowList;