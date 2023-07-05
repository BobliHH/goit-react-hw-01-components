import React from 'react';
import PropTypes from 'prop-types';
import data from './data.json';


export const Stats = props => {
  return (
    <div>
      <h2>UPLOAD STATS</h2>
      <ul>
        {data.map(d => (
          <Element stat={d} key={d.id} />
        ))}
      </ul>
    </div>
  );
}

function Element({ stat }) {
  return (
    <li
      style={{
        backgroundColor:
          stat.label === '.docx'
            ? '#4FC4F7'
            : stat.label === '.pdf'
            ? 'purple'
            : stat.label === '.mp3'
            ? 'red'
            : '#20B8C5',
      }}
    >
      <p>{stat.label}</p>
      <p>{stat.percentage}</p>
    </li>
  );
}

Stats.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};


