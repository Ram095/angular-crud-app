import { ICarDetail } from '../../../models/carDetail.model';

export interface CarDetailState {
  cars: ICarDetail[];
  loading: boolean;
  error: string | null;
}

export const initialState: CarDetailState = {
  cars: [],
  loading: false,
  error: null,
};
