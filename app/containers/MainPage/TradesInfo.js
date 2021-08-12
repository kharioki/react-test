import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import formatDistance from 'date-fns/formatDistance';

const Card = styled.div`
  width: 100%;
  border: 1px solid #e0e0e0;
  margin-bottom: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
  box-shadow: #e0e0e0 0px 0px 10px 0px;
`;

const Table = styled.table`
  width: 100%;
  border-spacing: 0;
  border-collapse: collapse;
  border: 1px solid #e0e0e0;
  margin-bottom: 10px;
  align-items: center;

  th,
  td {
    border: none;
  }

  td {
    padding: 5px 10px;
  }

  tbody tr {
    :nth-of-type(odd) {
      background-color: #efefef;
    }
    :hover {
      background-color: lightgreen;
    }
  }
  thead > tr {
    background-color: #e0e0e0;
  }
`;

export default function TradesInfo({ trades, tradesLoading, tradesError }) {
  if (tradesLoading) return <div>Loading...</div>;
  if (tradesError) return <div>Error!</div>;
  return (
    <Card>
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Time</th>
            <th>Amount</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {trades.map(trade => (
            <tr key={trade.ID}>
              <td>{trade.ID}</td>
              <td>
                {formatDistance(trade.MTS, new Date(), { addSuffix: true })}
              </td>
              <td>{trade.AMOUNT}</td>
              <td>{trade.PRICE.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Card>
  );
}

TradesInfo.propTypes = {
  trades: PropTypes.array,
  tradesLoading: PropTypes.bool,
  tradesError: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
};
