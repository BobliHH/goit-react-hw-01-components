import React from 'react';
import PropTypes from 'prop-types';

export const TransactionHistory = ({ items }) => {
  return (
    <table className="table">
      <thead className="tableHead">
        <tr className="tableRow">
          <th className="tableHead">Type</th>
          <th className="tableHead">Amount</th>
          <th className="tableHead">Currency</th>
        </tr>
      </thead>

      <tbody className='tableBody'>
        {items.map((item, idx) => {
          return (
            <TableRow
              key={item.id}
              id={item.id}
              type={item.type}
              currency={item.currency}
              amount={item.amount}
              index={idx}
            />
          );
        })}
      </tbody>
    </table>
  );
};

const TableRow = ({ type, amount, currency, index }) => {
  return (
    <tr idx={index}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

TableRow.propTypes = {
  index: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};