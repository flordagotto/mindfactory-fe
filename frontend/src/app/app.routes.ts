import { Routes } from '@angular/router';
import { AutomotorList } from './automotores/automotor-list/automotor-list';
import { AutomotorFormComponent } from './automotores/automotor-form/automotor-form';
import { SujetoFormComponent } from './sujetos/sujeto-form/sujeto-form';

export const routes: Routes = [
  { path: '', redirectTo: '/automotor-form', pathMatch: 'full' },
  { path: 'automotor-list', component: AutomotorList },
  { path: 'automotor-form', component: AutomotorFormComponent },
  { path: 'sujeto-form', component: SujetoFormComponent }
];