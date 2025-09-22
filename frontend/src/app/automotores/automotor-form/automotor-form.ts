import { Component } from '@angular/core';
import { AutomotorDto } from '../automotor.dtos';
import { AutomotorService } from '../automotor.service';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

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
      dominio: ['', Validators.required],
      numeroChasis: [''],
      numeroMotor: [''],
      color: [''],
      fechaFabricacion: [''],
      cuit: [''],
      denominacion: [''],
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
        this.mensaje = 'El automotor cargado existe. Puede modificarlo.';
      },
      error: () => {
        this.mensaje = 'No se encontró un automotor con ese dominio. Cree uno nuevo.';
        this.form.reset();
      },
    });
  }

  buscarSujeto(){

  }
  
  guardar(){

  }
}
