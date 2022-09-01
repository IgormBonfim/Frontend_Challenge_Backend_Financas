import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ReceitaService } from 'src/app/Services/receita.service';

import { Financa } from '../../Models/Financa';

@Component({
  selector: 'app-receitas',
  templateUrl: './receitas.component.html',
  styleUrls: ['./receitas.component.css']
})
export class ReceitasComponent implements OnInit {

  public receitas!: Observable<Financa[]>;
  public searchForm!: FormGroup;

  constructor(
    private service: ReceitaService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
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
    this.router.navigate(["detalhes", id], { relativeTo: this.route});
  }

}
