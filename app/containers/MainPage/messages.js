/*
 * MainPage Messages
 *
 * This contains all the text for the MainPage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.containers.MainPage';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: "Tony's Exchange",
  },
  intro: {
    id: `${scope}.intro`,
    defaultMessage: 'Get the latest Crypto exchange rates',
  },
  subHeader: {
    id: `${scope}.subHeader`,
    defaultMessage: 'Select a coin to see details',
  },
  ticker: {
    id: `${scope}.ticker`,
    defaultMessage: 'Overview details',
  },
  trades: {
    id: `${scope}.trades`,
    defaultMessage: 'Trade details',
  },
});
