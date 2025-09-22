import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AutomotorDto, CreateAutomotorDto, CreateSujetoDto, SujetoDto, UpdateAutomotorDto } from './dtos';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Service {
  private apiAutomotorUrl = 'http://localhost:3000/automotores';
  private apiSujetoUrl = 'http://localhost:3000/sujetos';

  constructor(private http: HttpClient) {}

  getAll(): Observable<AutomotorDto[]> {
    return this.http.get<AutomotorDto[]>(this.apiAutomotorUrl);
  }

  getByDominio(dominio: string): Observable<AutomotorDto> {
    return this.http.get<AutomotorDto>(`${this.apiAutomotorUrl}/${dominio}`);
  }

  create(data: CreateAutomotorDto): Observable<void> {
    return this.http.post<void>(this.apiAutomotorUrl, data);
  }

  update(dominio: string, data: UpdateAutomotorDto): Observable<void> {
    return this.http.put<void>(`${this.apiAutomotorUrl}/${dominio}`, data);
  }

  delete(dominio: string): Observable<void> {
    return this.http.delete<void>(`${this.apiAutomotorUrl}/${dominio}`);
  }
  
  getSujetoByCuit(cuit: string): Observable<SujetoDto> {
    return this.http.get<SujetoDto>(`${this.apiSujetoUrl}/by-cuit`, {
      params: { cuit } 
    });
  }
  
  createSujeto(data: CreateSujetoDto): Observable<void> {
    return this.http.post<void>(this.apiSujetoUrl, data);
  }
}
