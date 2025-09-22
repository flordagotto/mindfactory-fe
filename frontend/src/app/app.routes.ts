import { Routes } from '@angular/router';
import { AutomotorList } from './automotores/automotor-list/automotor-list';
import { AutomotorFormComponent } from './automotores/automotor-form/automotor-form';

export const routes: Routes = [
  { path: '', redirectTo: '/automotor-form', pathMatch: 'full' },
  { path: 'automotor-list', component: AutomotorList },
  { path: 'automotor-form', component: AutomotorFormComponent },
];