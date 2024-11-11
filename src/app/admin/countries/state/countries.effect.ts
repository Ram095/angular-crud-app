// country.effects.ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of, tap } from 'rxjs';
import { AdminService } from '../../admin.service';
import {
  loadCountries,
  loadCountriesFailure,
  loadCountriesSuccess,
} from './countries.action';

@Injectable()
export class CountryEffects {
  loadCountries$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadCountries),
      mergeMap(() =>
        this.adminService.getCountryList().pipe(
          tap((countries) => console.log(countries)),
          map((countries) => loadCountriesSuccess({ countries })),
          catchError((error) =>
            of(loadCountriesFailure({ error: error.message }))
          )
        )
      )
    )
  );

  constructor(private actions$: Actions, private adminService: AdminService) {}
}
