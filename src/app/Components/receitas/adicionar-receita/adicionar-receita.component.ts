import { Categoria } from './../../../Models/Categoria';
import { CategoriaService } from './../../../Services/categoria.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-adicionar-receita',
  templateUrl: './adicionar-receita.component.html',
  styleUrls: ['./adicionar-receita.component.css']
})
export class AdicionarReceitaComponent implements OnInit {

  public categorias!: Categoria[];

  constructor(private categoriaService: CategoriaService) { }

  ngOnInit(): void {
    this.categoriaService.listAllCategorias().subscribe(
      res => {
        this.categorias = res,
        console.log(res)
      }
    );
    console.log(this.categorias)
  }

}
