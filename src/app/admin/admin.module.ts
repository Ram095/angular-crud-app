import { NgModule } from '@angular/core';
import { AsyncPipe, CommonModule, DecimalPipe } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LayoutComponent } from './layout/layout.component';
import { RouterModule, Routes } from '@angular/router';
import { NgbHighlight } from '@ng-bootstrap/ng-bootstrap';
import { AgGridAngular } from 'ag-grid-angular';
import { AdminService } from './admin.service';
import { SharedModule } from '../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { countryReducer } from './countries/state/countries.reducer';
import { CarDetailsComponent } from './car-details/car-details.component';
import { CountryComponent } from './countries/countries.component';
import { EffectsModule } from '@ngrx/effects';
import { CountryEffects } from './countries/state/countries.effect';
import { carReducer } from './car-details/state/car-details.reducer';
import { CarEffects } from './car-details/state/car-details.effects';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: '/admin/country', pathMatch: 'full' },
      { path: 'country', component: CountryComponent },
      {
        path: 'car-details',
        component: CarDetailsComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [
    SidebarComponent,
    LayoutComponent,
    CountryComponent,
    CarDetailsComponent,
  ],
  imports: [
    CommonModule,
    NgbHighlight,
    AgGridAngular,
    DecimalPipe,
    AsyncPipe,
    SharedModule,
    StoreModule.forFeature('country', countryReducer),
    StoreModule.forFeature('car', carReducer),
    EffectsModule.forFeature([CountryEffects]),
    EffectsModule.forFeature([CarEffects]),
    RouterModule.forChild(routes),
  ],
  providers: [AdminService],
})
export class AdminModule {}
