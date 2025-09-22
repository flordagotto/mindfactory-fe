import { Component } from '@angular/core';
import { AutomotorDto } from '../automotor.dtos';
import { AutomotorService } from '../automotor.service';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-automotor-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './automotor-form.html',
})
export class AutomotorFormComponent {
  form: FormGroup;
  mensaje: string = '';

  constructor(private fb: FormBuilder, private automotorService: AutomotorService) {
    this.form = this.fb.group({
      dominio: [''],
      numeroChasis: [''],
      numeroMotor: [''],
      color: [''],
      fechaFabricacion: [''],
      cuit: [''],
      denominacion: [{ value: '', disabled: true }],
    });
  }

  buscar() {
    const dominio = this.form.value.dominio;
    if (!dominio) return;

    this.automotorService.getByDominio(dominio).subscribe({
      next: (auto: AutomotorDto) => {
        this.form.patchValue({
          numeroChasis: auto.numeroChasis,
          numeroMotor: auto.numeroMotor,
          color: auto.color,
          fechaFabricacion: auto.fechaFabricacion,
          cuit: auto.sujeto?.cuit,
          denominacion: auto.sujeto?.denominacion,
        });
        this.mensaje = 'Automotor cargado correctamente';
      },
      error: () => {
        this.mensaje = 'No se encontró el automotor';
        this.form.reset();
      }
    });
  }

  buscarSujeto(){

  }
}
