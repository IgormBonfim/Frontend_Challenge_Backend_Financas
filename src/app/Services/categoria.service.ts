import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Categoria } from '../Models/Categoria';
import { Observable, first } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private readonly baseUrl = environment["endPoint"]

  constructor(private httpClient: HttpClient) { }

  listAllCategorias():Observable<Categoria[]> {
    return this.httpClient.get<Categoria[]>(this.baseUrl + "categorias");
  }
}
