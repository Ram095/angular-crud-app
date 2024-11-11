// country.reducer.ts
import { Action, createReducer, on } from '@ngrx/store';
import {
  loadCountries,
  loadCountriesSuccess,
  loadCountriesFailure,
} from './countries.action';
import { CountryState, initialState } from './countries.state';

const _countryReducer = createReducer(
  initialState,
  on(loadCountries, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(loadCountriesSuccess, (state, { countries }) => ({
    ...state,
    loading: false,
    countries,
  })),
  on(loadCountriesFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);

export function countryReducer(
  state: CountryState | undefined,
  action: Action
) {
  return _countryReducer(state, action);
}
