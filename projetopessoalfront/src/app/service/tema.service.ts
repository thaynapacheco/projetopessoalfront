import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Tema } from '../model/Tema';

@Injectable({
  providedIn: 'root'
})
export class TemaService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getTema(): Observable<Tema[]> {
    return this.http.get<Tema[]>('', this.token)
  }

  getTemaById(id: number): Observable<Tema> {
    return this.http.get<Tema>(`${id}`, this.token)
  }

  postTema(tema: Tema): Observable<Tema> {
    return this.http.post<Tema>('', tema, this.token)
  }

  putTema(tema: Tema): Observable<Tema> {
    return this.http.put<Tema>('', tema, this.token)
  }

  deleteTema(id: number) {
    return this.http.delete(`${id}`, this.token)
  }
}