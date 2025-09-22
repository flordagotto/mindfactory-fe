import { Component } from '@angular/core';
import { AutomotorDto, CreateAutomotorDto, SujetoDto, UpdateAutomotorDto } from '../../common/dtos';
import { AutomotorService } from '../../common/service';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-automotor-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './automotor-form.html',
})
export class AutomotorFormComponent {
  form: FormGroup;
  mensaje: string = '';
  existingAutomotor: AutomotorDto | null = null;

  constructor(private fb: FormBuilder, private service: AutomotorService, private router: Router) {
    this.form = this.fb.group({
      dominio: ['', Validators.required],
      numeroChasis: [''],
      numeroMotor: [''],
      color: [''],
      fechaFabricacion: ['', Validators.required],
      cuit: ['', Validators.required],
      denominacion: ['', Validators.required],
    });
  }

  buscar() {
    const dominio = this.form.value.dominio;
    if (!dominio) return;

    this.service.getByDominio(dominio).subscribe({
      next: (auto: AutomotorDto) => {
        this.existingAutomotor = auto;
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
        this.existingAutomotor = null; 
        this.mensaje = 'No se encontró un automotor con ese dominio. Cree uno nuevo.';
        this.resetForm(false);
      },
    });
  }

  resetForm(resetDominio = true){
    this.existingAutomotor = null;
    if(resetDominio)
      this.form.reset();
    else
      this.form.patchValue({
          numeroChasis: "",
          numeroMotor: "",
          color: "",
          fechaFabricacion: "",
          cuit: "",
          denominacion: "",
        });
  }

  buscarSujeto(){
    const cuit = this.form.value.cuit;
    if (!cuit) {
      this.mensaje = 'Ingrese un CUIT para buscar';
      return;
    }

    this.service.getSujetoByCuit(cuit).subscribe({
      next: (sujeto: SujetoDto) => {
        if (sujeto) {
          this.form.patchValue({
            denominacion: sujeto.denominacion
          });
          this.mensaje = 'Sujeto cargado correctamente';
        } else {
          this.form.patchValue({ denominacion: '' });
          this.mensaje = 'No se encontró un sujeto con ese CUIT';
        }
      },
      error: (err) => {
        console.error(err);
        this.form.patchValue({ denominacion: '' });
        this.mensaje = 'Error al buscar el sujeto';
      }
    });
  }
  
  guardar(){
    if (this.form.invalid) {
      this.mensaje = 'Por favor completa los campos requeridos';
      return;
    }

    const automotor = this.form.value;
    if (this.existingAutomotor?.id) {
      const dto: UpdateAutomotorDto = {
        numeroChasis: automotor.numeroChasis,
        numeroMotor: automotor.numeroMotor,
        color: automotor.color,
        fechaFabricacion: automotor.fechaFabricacion.toString(),
        cuitDuenio: automotor.cuit
      };

      this.service.update(this.existingAutomotor.dominio, dto).subscribe({
        next: (res) => {
          this.mensaje = 'Automotor actualizado correctamente';
          this.resetForm(false);
        },
        error: (err) => {
          console.error(err);
          this.mensaje = 'Error al actualizar automotor';
        }
      });

    } else {
      const dto: CreateAutomotorDto = {
        dominio: automotor.dominio,
        numeroChasis: automotor.numeroChasis,
        numeroMotor: automotor.numeroMotor,
        color: automotor.color,
        fechaFabricacion: automotor.fechaFabricacion,
        cuitDuenio: automotor.cuit,
      };

      this.service.create(dto).subscribe({
        next: (res) => {
          this.mensaje = 'Automotor creado correctamente';
          this.resetForm(false);
        },
        error: (err) => {
          console.error(err);
          this.mensaje = 'Error al crear automotor';
        }
      });
    }
  }

  irAListado() {
    this.router.navigate(['/automotor-list']);
  }
}
