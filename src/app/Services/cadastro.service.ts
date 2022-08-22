import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { Usuario } from './../Models/Usuario';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  private readonly baseUrl = environment["endPoint"]

  constructor(private httpClient: HttpClient) { }

  create(usuario: Usuario) {
    return this.httpClient.post(this.baseUrl + "usuarios", usuario).subscribe();
  }
}
