import { Categoria } from "./Categoria";

export class Receita {
  public id!: number;
  public descricao!: string;
  public valor!: number;
  public dataReceita!: Date;
  public idCategoria!: number;
  public categoria!: Categoria;
}
