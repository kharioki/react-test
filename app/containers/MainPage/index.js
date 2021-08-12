/*
 * MainPage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useEffect, memo, useState } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import H2 from 'components/H2';
import CenteredSection from '../HomePage/CenteredSection';
import Section from '../HomePage/Section';
import messages from './messages';
import { changeCurrencyValue, getTicker, getTrades } from './actions';
import {
  selectCurrencyValue,
  selectTicker,
  selectError,
  selectLoading,
  selectTrades,
  selectTradesError,
  selectTradesLoading,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import ButtonsList from './ButtonsList';
import TickerInfo from './TickerInfo';
import TradesInfo from './TradesInfo';

const key = 'main';

export function MainPage({
  currencyValue,
  loading,
  error,
  ticker,
  onFetch,
  onChangeCurrencyValue,
  onFetchTrades,
  trades,
  tradesLoading,
  tradesError,
}) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const [selected, setSelected] = useState('');

  // array of coins
  const coins = [
    {
      value: 'BTC',
      name: 'Bitcoin',
      ticker: 'tBTCUSD',
    },
    {
      value: 'ETH',
      name: 'Ethereum',
      ticker: 'tETHUSD',
    },
    {
      value: 'DSH',
      name: 'Dash Coin',
      ticker: 'tDSHUSD',
    },
    {
      value: 'BTG',
      name: 'Bitcoin Gold',
      ticker: 'tBTGUSD',
    },
  ];

  const handleClick = e => {
    setSelected(e.value);
    onChangeCurrencyValue(e.ticker);
  };

  const tickerProps = {
    loading,
    error,
    ticker,
  };

  const tradesProps = {
    trades,
    tradesLoading,
    tradesError,
  };

  useEffect(() => {
    // When initial state username is not null, submit the form to load repos
    if (currencyValue && currencyValue.trim().length > 0) {
      onFetch();
      onFetchTrades();
    }
  }, [currencyValue]);

  return (
    <article>
      <Helmet>
        <title>Main Page</title>
        <meta
          name="description"
          content="A React.js Boilerplate application mainpage"
        />
      </Helmet>
      <div>
        <CenteredSection>
          <H2>
            <FormattedMessage {...messages.header} />
          </H2>
          <p>
            <FormattedMessage {...messages.intro} />
          </p>
        </CenteredSection>
        <Section>
          <H2>
            <FormattedMessage {...messages.subHeader} />
          </H2>
          <ButtonsList
            selected={selected}
            coins={coins}
            onHandleClick={handleClick}
          />
        </Section>
        <Section>
          <H2>
            <FormattedMessage {...messages.ticker} />
          </H2>
          <TickerInfo {...tickerProps} />
        </Section>
        <Section>
          <H2>
            <FormattedMessage {...messages.trades} />
          </H2>
          <TradesInfo {...tradesProps} />
        </Section>
      </div>
    </article>
  );
}

MainPage.propTypes = {
  currencyValue: PropTypes.string,
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  ticker: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  onFetch: PropTypes.func,
  onChangeCurrencyValue: PropTypes.func,
  onFetchTrades: PropTypes.func,
  trades: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  tradesLoading: PropTypes.bool,
  tradesError: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
};

const mapStateToProps = createStructuredSelector({
  ticker: selectTicker(),
  currencyValue: selectCurrencyValue(),
  loading: selectLoading(),
  error: selectError(),
  trades: selectTrades(),
  tradesLoading: selectTradesLoading(),
  tradesError: selectTradesError(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onChangeCurrencyValue: val => {
      dispatch(changeCurrencyValue(val));
    },
    onFetch: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(getTicker());
    },
    onFetchTrades: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(getTrades());
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(MainPage);
