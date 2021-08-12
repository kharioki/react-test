/*
 * MainReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import {
  GET_TICKER,
  GET_TICKER_SUCCESS,
  GET_TICKER_ERROR,
  CHANGE_CURRENCY_VALUE,
  GET_TRADES,
  GET_TRADES_SUCCESS,
  GET_TRADES_ERROR,
} from './constants';

// The initial state
export const initialState = {
  loading: false,
  error: false,
  currencyValue: '',
  ticker: {},
  tradesLoading: false,
  tradesError: false,
  trades: [],
};

/* eslint-disable default-case, no-param-reassign */
const mainReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case GET_TICKER:
        draft.loading = true;
        draft.error = false;
        break;

      case GET_TICKER_SUCCESS:
        draft.loading = false;
        draft.ticker = action.ticker;
        draft.currencyValue = action.currencyValue;
        break;

      case GET_TICKER_ERROR:
        draft.error = action.error;
        draft.loading = false;
        break;

      case CHANGE_CURRENCY_VALUE:
        draft.currencyValue = action.currencyValue;
        break;

      case GET_TRADES:
        draft.tradesLoading = true;
        draft.tradesError = false;
        break;

      case GET_TRADES_SUCCESS:
        draft.tradesLoading = false;
        draft.trades = action.trades;
        draft.currencyValue = action.currencyValue;
        break;

      case GET_TRADES_ERROR:
        draft.tradesError = action.tradesError;
        draft.tradesLoading = false;
        break;
    }
  });

export default mainReducer;
