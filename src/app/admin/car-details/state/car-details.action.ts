// car.actions.ts
import { createAction, props } from '@ngrx/store';
import { ICarDetail } from '../../../models/carDetail.model';

export const loadCars = createAction('[Car] Load Cars');

export const loadCarsSuccess = createAction(
  '[Car] Load Cars Success',
  props<{ cars: ICarDetail[] }>()
);

export const loadCarsFailure = createAction(
  '[Car] Load Cars Failure',
  props<{ error: string }>()
);

export const addCar = createAction(
  '[Car] Add Car',
  props<{ car: ICarDetail }>()
);

export const deleteCar = createAction(
  '[Car] Delete Car',
  props<{ carToDelete: ICarDetail }>()
);

export const updateCar = createAction(
  '[Car] Update Car',
  props<{ updatedCarData: ICarDetail }>()
);
