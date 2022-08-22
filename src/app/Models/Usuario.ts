export class Usuario {
  id: number;
  email: string;
  senha: string;

  constructor(id: number, email: string, senha: string) {
    this.id = id;
    this.email = email;
    this.senha = senha;
  }
}
