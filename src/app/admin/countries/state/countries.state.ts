import { ICountry } from '../../../models/countries.model';

export interface CountryState {
  countries: ICountry[];
  loading: boolean;
  error: string | null;
}

export const initialState: CountryState = {
  countries: [],
  loading: false,
  error: null,
};
