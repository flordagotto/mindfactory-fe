import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Service } from '../../common/service';
import { CreateSujetoDto } from '../../common/dtos';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sujeto-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './sujeto-form.html',
})
export class SujetoFormComponent {
  mensaje: string = '';
  form: FormGroup;

  constructor(private fb: FormBuilder, private sujetoService: Service, private router: Router) {
    this.form = this.fb.group({
      spo_cuit: ['', [Validators.required]],
      spo_denominacion: ['', [Validators.required]],
    });
  }

  guardar() {
    if (this.form.invalid) {
      this.mensaje = 'Por favor completa los campos requeridos';
      return;
    }

    const dto: CreateSujetoDto = this.form.value;
    this.sujetoService.createSujeto(dto).subscribe({
      next: () => {
        this.mensaje = `Sujeto creado correctamente`;
        this.form.reset();
      },
      error: (err) => {
        console.error(err);
        this.mensaje = 'Error al crear el sujeto';
      }
    });
  }
  
  irAForm() {
    this.router.navigate(['/automotor-form']);
  }
  
  irAListado() {
    this.router.navigate(['/automotor-list']);
  }
}
