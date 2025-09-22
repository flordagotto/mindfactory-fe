import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AutomotorFormComponent } from './automotores/automotor-form/automotor-form';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, AutomotorFormComponent, HttpClientModule],
  template: `
    <h1>Gestión de Automotores</h1>
    <router-outlet></router-outlet>
  `,
})
export class App {
  protected readonly title = signal('frontend');
}
