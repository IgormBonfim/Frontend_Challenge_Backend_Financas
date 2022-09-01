import { Categoria } from "./Categoria";

export class Financa {
  public id!: number;
  public descricao!: string;
  public valor!: number;
  public data!: Date;
  public idCategoria!: number;
  public categoria!: Categoria;
}
