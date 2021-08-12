import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ButtonItem = styled.div`
  background-color: ${props => (props.selected ? '#0dbb66' : '#f5f5f5')};
  color: ${props => (props.selected ? '#ffffff' : '#000000')};
  border-radius: 3px;
  padding: 10px;
  margin: 5px;
  border: none;
`;

const ButtonList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`;

function ButtonsList({ selected, coins, onHandleClick }) {
  return (
    <ButtonList>
      {coins.map(coin => (
        <ButtonItem
          key={coin.name}
          selected={coin.value === selected}
          onClick={() => onHandleClick(coin)}
        >
          {coin.name}
        </ButtonItem>
      ))}
    </ButtonList>
  );
}

ButtonsList.propTypes = {
  selected: PropTypes.string,
  coins: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onHandleClick: PropTypes.func.isRequired,
};

export default ButtonsList;
