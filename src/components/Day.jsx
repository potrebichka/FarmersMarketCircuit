import React from 'react';
import PropTypes from 'prop-types';

function Day(props){
  return (
    <div>
      <h3>{props.name}</h3>
      <p><em>{props.location}</em></p>
      <p>{props.hours}</p>
      <p>{props.booth}</p>
      <hr/>
    </div>
  );
}

Day.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  hours: PropTypes.string,
  booth: PropTypes.string
};

export default Day;