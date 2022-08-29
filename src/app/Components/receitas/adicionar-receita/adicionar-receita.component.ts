import { FinancaRequest } from './../../../Models/FinancaRequest';
import { AlertModalService } from './../../../Shared/alert-modal.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Categoria } from './../../../Models/Categoria';
import { CategoriaService } from './../../../Services/categoria.service';
import { ReceitaService } from './../../../Services/receita.service';
import { Receita } from 'src/app/Models/Receita';

@Component({
  selector: 'app-adicionar-receita',
  templateUrl: './adicionar-receita.component.html',
  styleUrls: ['./adicionar-receita.component.css']
})
export class AdicionarReceitaComponent implements OnInit {

  receitaForm!: FormGroup
  categorias!: Categoria[];

  constructor(
    private categoriaService: CategoriaService,
    private receitaService: ReceitaService,
    private formBuilder: FormBuilder,
    private alertService: AlertModalService
    ) { }

  ngOnInit(): void {
    this.onFormBuilder();
    this.onListaCategorias();
  }

  onListaCategorias() {
    this.categoriaService.listAllCategorias().subscribe(
      res => {
        this.categorias = res,
        console.log(res)
      }
    );
    console.log(this.categorias)
  }

  onFormBuilder() {
    this.receitaForm = this.formBuilder.group(
      {
        descricao: ["", [Validators.required]],
        valor: ["", [Validators.required]],
        data: ["", [Validators.required]],
        idCategoria: ["", [Validators.required]]
      }
    )
  }

  submitReceita() {
    var dadosReceita = this.receitaForm.getRawValue() as FinancaRequest;
    console.log(dadosReceita);
    this.receitaService.create(dadosReceita)
      .subscribe(
        response => {
          let resposta: any;
          resposta = response;
          console.log(resposta.mensagem);
          console.log(resposta.type)
          this.alertService.showAlert(resposta.mensagem, resposta.type)
        }
      )
  }

}
