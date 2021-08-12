import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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

const CardList = styled.div`
  padding: 10px 20px;
  align-items: center;
  border-left: 1px solid #e0e0e0;

  p {
    font-size: 13px;
  }
`;

const LastPrice = styled.p`
  font-size: 36px;
  color: #797979;
  font-weight: bold;
`;

const Percentage = styled.p`
  color: ${props => (props.positive ? '#0dbb66' : '#ff5000')};
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
`;

export default function TickerInfo({ ticker, error, loading }) {
  if (error) return <p>{error}</p>;
  if (loading) return <p>Loading...</p>;
  return ticker.LAST_PRICE ? (
    <Card>
      <div>
        <div>
          <p>Latest price(&#36;)</p>
          <LastPrice>{ticker.LAST_PRICE.toLocaleString()}</LastPrice>
        </div>
        <div>
          <p>Percentage</p>
          <Percentage positive={ticker.DAILY_CHANGE_RELATIVE > 0}>
            {(ticker.DAILY_CHANGE_RELATIVE * 100).toFixed(2)}%
          </Percentage>
        </div>
      </div>
      <CardList>
        <p>Ask Price(&#36;): {ticker.ASK.toLocaleString()}</p>
        <p>Ask Size : {ticker.ASK_SIZE}</p>
        <p>Bid Price(&#36;): {ticker.BID.toLocaleString()}</p>
        <p>Bid Size : {ticker.BID_SIZE}</p>
        <p>High(&#36;): {ticker.HIGH.toLocaleString()}</p>
        <p>Low(&#36;): {ticker.LOW.toLocaleString()}</p>
      </CardList>
    </Card>
  ) : null;
}

TickerInfo.propTypes = {
  ticker: PropTypes.object,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  loading: PropTypes.bool,
};
