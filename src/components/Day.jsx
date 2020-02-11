import React from 'react';
import PropTypes from 'prop-types';

function Day(props){
  return (
    <div className="day">
      <style jsx> {`
        .day {
          font-size: 20px;
          text-align: center;
        }
      `}
      </style>
      <h3>{props.name}</h3>
      <p><em>{props.location}</em></p>
      <p>{props.hours}</p>
      <p>Booth: {props.booth}</p>
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