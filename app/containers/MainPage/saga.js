/**
 * Gets the ticker from Bitfinex API endpoint
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { GET_TICKER, GET_TRADES } from './constants';
import {
  getTickerLoaded,
  getTickerError,
  getTradesLoaded,
  getTradesError,
} from './actions';

import { selectCurrencyValue } from './selectors';
import { resolveTicker, resolveTrades } from './utils';

/**
 * Bitfinex ticker request/response handler
 */
export function* getTicker() {
  // Select currencyValue from store
  const currencyValue = yield select(selectCurrencyValue());
  const corsUrl = 'https://salty-garden-20739.herokuapp.com/';
  const requestURL = `${corsUrl}https://api-pub.bitfinex.com/v2/ticker/${currencyValue}`;

  try {
    // Call our request helper (see 'utils/request')
    const res = yield call(request, requestURL);
    const ticker = resolveTicker(res);
    yield put(getTickerLoaded(ticker, currencyValue));
  } catch (err) {
    yield put(getTickerError(err));
  }
}

/**
 * Bitfinex trades request/response handler
 */
export function* getTrades() {
  // Select currencyValue from store
  const currencyValue = yield select(selectCurrencyValue());
  const corsUrl = 'https://salty-garden-20739.herokuapp.com/';
  const requestURL = `${corsUrl}https://api-pub.bitfinex.com/v2/trades/${currencyValue}/hist/?=limit=20&sort=-1`;

  try {
    // Call our request helper (see 'utils/request')
    const res = yield call(request, requestURL);
    const trades = resolveTrades(res);
    yield put(getTradesLoaded(trades, currencyValue));
  } catch (err) {
    yield put(getTradesError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* fetchData() {
  // Watches for GET_TICKER actions and calls getTicker when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(GET_TICKER, getTicker);
  yield takeLatest(GET_TRADES, getTrades);
}
