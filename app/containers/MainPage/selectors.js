/**
 * Mainpage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectMain = state => state.main || initialState;

const selectTicker = () =>
  createSelector(
    selectMain,
    mainState => mainState.ticker,
  );

const selectCurrencyValue = () =>
  createSelector(
    selectMain,
    mainState => mainState.currencyValue,
  );

const selectLoading = () =>
  createSelector(
    selectMain,
    mainState => mainState.loading,
  );

const selectError = () =>
  createSelector(
    selectMain,
    mainState => mainState.error,
  );

const selectTrades = () =>
  createSelector(
    selectMain,
    mainState => mainState.trades,
  );

const selectTradesLoading = () =>
  createSelector(
    selectMain,
    mainState => mainState.tradesLoading,
  );

const selectTradesError = () =>
  createSelector(
    selectMain,
    mainState => mainState.tradesError,
  );

export {
  selectMain,
  selectTicker,
  selectCurrencyValue,
  selectLoading,
  selectError,
  selectTrades,
  selectTradesLoading,
  selectTradesError,
};
