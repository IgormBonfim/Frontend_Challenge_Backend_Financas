import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

import { Receita } from './../../Models/Receita';
import { ReceitaService } from './../../Services/receita.service';

@Component({
  selector: 'app-receitas',
  templateUrl: './receitas.component.html',
  styleUrls: ['./receitas.component.css']
})
export class ReceitasComponent implements OnInit {

  public receitas!: Observable<Receita[]>;
  public searchForm!: FormGroup;

  constructor(
    private service: ReceitaService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.receitas = this.service.listAllReceitas().pipe();
    this.onFormBuilder();
    console.log(this.receitas)
  }

  onFormBuilder() {
    this.searchForm = this.formBuilder.group(
      {
        search: ["", [Validators.required]],
      }
    )
  }

  onSearch() {
    this.receitas = this.service.listByDescricao(this.searchForm.value.search);
  }

  maisDetalhes(id: number){
    console.log(id)
  }

}
