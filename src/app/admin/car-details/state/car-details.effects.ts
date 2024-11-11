import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import {
  loadCars,
  loadCarsFailure,
  loadCarsSuccess,
} from './car-details.action';
import { AdminService } from '../../admin.service';
import { ICarDetail } from '../../../models/carDetail.model';

@Injectable()
export class CarEffects {
  constructor(private actions$: Actions, private adminService: AdminService) {}

  loadCars$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadCars),
      mergeMap(() =>
        this.adminService.getCarDetails().pipe(
          map((cars: ICarDetail[]) => loadCarsSuccess({ cars })),
          catchError((error) => of(loadCarsFailure({ error: error.message })))
        )
      )
    )
  );
}
