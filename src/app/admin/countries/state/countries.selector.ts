// country.selectors.ts
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CountryState } from './countries.state';

export const selectCountryState =
  createFeatureSelector<CountryState>('country');

export const selectAllCountries = createSelector(
  selectCountryState,
  (state) => state.countries
);

export const selectCountryLoading = createSelector(
  selectCountryState,
  (state) => state.loading
);

export const selectCountryError = createSelector(
  selectCountryState,
  (state) => state.error
);
