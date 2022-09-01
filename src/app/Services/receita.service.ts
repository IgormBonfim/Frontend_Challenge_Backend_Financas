import { FinancaRequest } from './../Models/FinancaRequest';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, first } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Financa } from '../Models/Financa';

@Injectable({
  providedIn: 'root'
})
export class ReceitaService {

  private readonly baseUrl = environment["endPoint"]

  constructor(private httpClient: HttpClient) { }

  listAllReceitas():Observable<Financa[]> {
    return this.httpClient.get<Financa[]>(this.baseUrl + "Receitas").pipe(first());
  }

  listByDescricao(search: string):Observable<Financa[]> {
    return this.httpClient.get<Financa[]>(this.baseUrl + "Receitas" + "/descricao?descricao=" + search).pipe(first());
  }

  getById(id: number):Observable<Financa> {
    return this.httpClient.get<Financa>(this.baseUrl + "Receitas/" + id);
  }

  create(receita: FinancaRequest) {
    return this.httpClient.post(this.baseUrl + "Receitas", receita);
  }
}
