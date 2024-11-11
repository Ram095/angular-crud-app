import { DecimalPipe } from '@angular/common';
import { Component, OnInit, PipeTransform } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable, startWith, map } from 'rxjs';
import { ICountry } from '../../models/countries.model';
import { AdminService } from '../admin.service';
import { loadCountries } from './state/countries.action';
import { selectAllCountries } from './state/countries.selector';
import { CountryState } from './state/countries.state';

@Component({
  selector: 'app-landing',
  templateUrl: './countries.component.html',
  styleUrl: './countries.component.scss',
})
export class CountryComponent implements OnInit {
  countries!: ICountry[];
  countries$!: Observable<ICountry[]>;
  filter = new FormControl('', { nonNullable: true });
  constructor(
    private store: Store<CountryState>,
    public pipe: DecimalPipe,
    public adminService: AdminService
  ) {}
  ngOnInit(): void {
    this.getCountryData();
  }

  getCountryData() {
    this.store.dispatch(loadCountries());

    this.countries$ = this.store
      .select(selectAllCountries)
      .pipe(
        map((countries) =>
          countries.filter((country) =>
            this.filter.value
              ? country.name
                  .toLowerCase()
                  .includes(this.filter.value.toLowerCase())
              : true
          )
        )
      );
  }

  search(text: string, pipe: PipeTransform): ICountry[] {
    return this.countries.filter((country) => {
      const term = text.toLowerCase();
      return (
        country.name.toLowerCase().includes(term) ||
        pipe.transform(country.area).includes(term) ||
        pipe.transform(country.population).includes(term)
      );
    });
  }
}
