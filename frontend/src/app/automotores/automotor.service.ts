import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AutomotorDto } from './automotor.dtos';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutomotorService {
  private apiUrl = 'http://localhost:3000/automotores';

  constructor(private http: HttpClient) {}

  getAll(): Observable<AutomotorDto[]> {
    return this.http.get<AutomotorDto[]>(this.apiUrl);
  }

  getByDominio(dominio: string): Observable<AutomotorDto> {
    return this.http.get<AutomotorDto>(`${this.apiUrl}/${dominio}`);
  }

  create(data: AutomotorDto): Observable<AutomotorDto> {
    return this.http.post<AutomotorDto>(this.apiUrl, data);
  }

  update(dominio: string, data: AutomotorDto): Observable<AutomotorDto> {
    return this.http.put<AutomotorDto>(`${this.apiUrl}/${dominio}`, data);
  }

  delete(dominio: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${dominio}`);
  }
}
