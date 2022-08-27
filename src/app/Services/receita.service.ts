import { FinancaRequest } from './../Models/FinancaRequest';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, first } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Receita } from '../Models/Receita';

@Injectable({
  providedIn: 'root'
})
export class ReceitaService {

  private readonly baseUrl = environment["endPoint"]

  constructor(private httpClient: HttpClient) { }

  listAllReceitas():Observable<Receita[]> {
    return this.httpClient.get<Receita[]>(this.baseUrl + "receitas").pipe(first());
  }

  create(receita: FinancaRequest) {
    return this.httpClient.post(this.baseUrl + "receitas", receita);
  }
}
