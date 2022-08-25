import { Observable } from 'rxjs';
import { ReceitaService } from './../../Services/receita.service';
import { Receita } from './../../Models/Receita';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-receitas',
  templateUrl: './receitas.component.html',
  styleUrls: ['./receitas.component.css']
})
export class ReceitasComponent implements OnInit {

  public receitas!: Observable<Receita[]>;

  constructor(
    private service: ReceitaService
  ) { }

  ngOnInit(): void {
    this.receitas = this.service.listAllReceitas().pipe()
    console.log(this.receitas)
  }

  maisDetalhes(id: number){
    console.log(id)
  }

}
