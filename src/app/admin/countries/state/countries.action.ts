import { createAction, props } from '@ngrx/store';
import { ICountry } from '../../../models/countries.model';

export const loadCountries = createAction('[Country] Load Countries');
export const loadCountriesSuccess = createAction(
  '[Country] Load Countries Success',
  props<{ countries: ICountry[] }>()
);
export const loadCountriesFailure = createAction(
  '[Country] Load Countries Failure',
  props<{ error: string }>()
);
