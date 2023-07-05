import React from 'react';
import PropTypes from 'prop-types';
import statsData from './data.json';


export const Stats = props => {
  return (
    <div>
      <h2>UPLOAD STATS</h2>
      <ul>
        {statsData.map(d => (
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
            ? '#50c4f4'
            : stat.label === '.pdf'
            ? '#a43cf3'
            : stat.label === '.mp3'
            ? '#e64c66'
            : '#1bbbc4',
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


