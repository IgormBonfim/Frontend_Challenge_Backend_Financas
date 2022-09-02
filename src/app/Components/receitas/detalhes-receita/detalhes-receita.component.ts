import { Observable } from 'rxjs';
import { Financa } from '../../../Models/Financa';
import { ReceitaService } from './../../../Services/receita.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalhes-receita',
  templateUrl: './detalhes-receita.component.html',
  styleUrls: ['./detalhes-receita.component.css']
})
export class DetalhesReceitaComponent implements OnInit {

  public receita!: Financa;

  constructor(
    private service: ReceitaService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: any) => {
        const receitaId = params.id;
        this.getReceita(receitaId);
      }
    )
  }

  getReceita(id: number) {
    this.service.getById(id).subscribe(res => this.receita = res);
  }

  editarReceita(id: number) {
    this.router.navigateByUrl("receitas/editar/" + id);
  }

}
