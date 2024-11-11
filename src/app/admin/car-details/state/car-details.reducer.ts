// car.reducer.ts
import { Action, createReducer, on } from '@ngrx/store';
import {
  addCar,
  deleteCar,
  loadCars,
  loadCarsFailure,
  loadCarsSuccess,
  updateCar,
} from './car-details.action';
import { CarDetailState, initialState } from './car-details.state';

const _carReducer = createReducer(
  initialState,
  on(loadCars, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(loadCarsSuccess, (state, { cars }) => ({
    ...state,
    cars,
    loading: false,
    error: null,
  })),
  on(loadCarsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),

  on(addCar, (state, { car }) => ({
    ...state,
    cars: [...state.cars, car],
  })),

  on(deleteCar, (state, { carToDelete }) => {
    const updatedCars = state.cars.filter(
      (car) => car.make !== carToDelete.make
    );
    return {
      ...state,
      cars: updatedCars,
    };
  }),

  on(updateCar, (state, { updatedCarData }) => {
    const updatedCars = state.cars.map((car) =>
      car.make === updatedCarData.make && car.model === updatedCarData.model
        ? { ...car, ...updatedCarData }
        : car
    );
    return {
      ...state,
      cars: updatedCars,
    };
  })
);

export function carReducer(state: CarDetailState | undefined, action: Action) {
  return _carReducer(state, action);
}
