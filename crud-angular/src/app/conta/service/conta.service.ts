import { Observable } from 'rxjs';
import { Conta } from './../model/conta';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContaService {
  private readonly URL = 'api/conta';

  constructor(private httpClient: HttpClient) { }

  save(conta: Conta){
    return this.httpClient.post<Conta>(this.URL, conta);
  }

  update(id: number, conta: Conta): Observable<Object> {
    return this.httpClient.put(`${this.URL}/${id}`, conta);
  }

  findContaById(id:number): Observable<Conta>{
    return this.httpClient.get<Conta>(`${this.URL}/${id}`);
  }
}
