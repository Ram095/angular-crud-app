// car.selectors.ts
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CarDetailState } from './car-details.state';

const selectCarState = createFeatureSelector<CarDetailState>('car');

export const selectCarDetails = createSelector(
  selectCarState,
  (state) => state.cars
);
export const selectCarLoading = createSelector(
  selectCarState,
  (state) => state.loading
);
export const selectCarError = createSelector(
  selectCarState,
  (state) => state.error
);
export const selectCarCount = createSelector(
  selectCarDetails,
  (cars) => cars.length
);
