import { Component, OnInit } from '@angular/core';
import { Service } from '../../common/service';
import { AutomotorDto } from '../../common/dtos';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-automotor-list',
  templateUrl: './automotor-list.html',
  imports: [CommonModule, ReactiveFormsModule],
})
export class AutomotorList implements OnInit {

  automotores: AutomotorDto[] = [];
  mensaje: string = '';

  constructor(private automotorService: Service, private router: Router) {}

  ngOnInit() {
    this.cargarAutomotores();
  }

  cargarAutomotores() {
    this.automotorService.getAll().subscribe({
      next: (res) => {
        this.automotores = res;
      },
      error: (err) => {
        console.error(err);
        this.mensaje = 'Error al cargar los automotores';
      }
    });
  }

  irAForm() {
    this.router.navigate(['/automotor-form']);
  }
  
  irACrearSujeto() {
    this.router.navigate(['/sujeto-form']);
  }
}
