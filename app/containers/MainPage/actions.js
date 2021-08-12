/*
 * MainPage Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  GET_TICKER_SUCCESS,
  GET_TICKER,
  GET_TICKER_ERROR,
  CHANGE_CURRENCY_VALUE,
  GET_TRADES,
  GET_TRADES_SUCCESS,
  GET_TRADES_ERROR,
} from './constants';

/**
 * Load the ticker, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_REPOS
 */
export function getTicker() {
  return {
    type: GET_TICKER,
  };
}

/**
 * Dispatched when the ticker are loaded by the request saga
 *
 * @param  {object} ticker The repository data
 * @param  {string} currencyValue The current currencyValue
 * @return {object}      An action object with a type of LOAD_REPOS_SUCCESS passing the repos
 */
export function getTickerLoaded(ticker, currencyValue) {
  return {
    type: GET_TICKER_SUCCESS,
    ticker,
    currencyValue,
  };
}

/**
 * Dispatched when loading the ticker fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_REPOS_ERROR passing the error
 */
export function getTickerError(error) {
  return {
    type: GET_TICKER_ERROR,
    error,
  };
}

/**
 * Changes the currencyValue of the ticker
 *
 * @param  {string} currencyValue
 *
 * @return {object} An action object with a type of CHANGE_CURRENCY_VALUE
 */
export function changeCurrencyValue(currencyValue) {
  return {
    type: CHANGE_CURRENCY_VALUE,
    currencyValue,
  };
}

/**
 * Load the trades, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_REPOS
 */
export function getTrades() {
  return {
    type: GET_TRADES,
  };
}

/**
 * Dispatched when the ticker are loaded by the request saga
 *
 * @param  {array} trades The repository data
 * @param  {string} currencyValue The current currencyValue
 * @return {object}      An action object with a type of LOAD_REPOS_SUCCESS passing the repos
 */
export function getTradesLoaded(trades, currencyValue) {
  return {
    type: GET_TRADES_SUCCESS,
    trades,
    currencyValue,
  };
}

/**
 * Dispatched when loading the ticker fails
 *
 * @param  {object} tradesError The error
 *
 * @return {object}       An action object with a type of LOAD_REPOS_ERROR passing the error
 */
export function getTradesError(tradesError) {
  return {
    type: GET_TRADES_ERROR,
    tradesError,
  };
}
