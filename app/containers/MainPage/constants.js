/*
 * MainConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const GET_TICKER = 'boilerplate/Main/GET_TICKER';
export const GET_TICKER_SUCCESS = 'boilerplate/Main/GET_TICKER_SUCCESS';
export const GET_TICKER_ERROR = 'boilerplate/Main/GET_TICKER_ERROR';
export const CHANGE_CURRENCY_VALUE = 'boilerplate/Main/CHANGE_CURRENCY_VALUE';
export const GET_TRADES = 'boilerplate/Main/GET_TRADES';
export const GET_TRADES_SUCCESS = 'boilerplate/Main/GET_TRADES_SUCCESS';
export const GET_TRADES_ERROR = 'boilerplate/Main/GET_TRADES_ERROR';
