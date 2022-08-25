import { AlertModalService } from './../../Shared/alert-modal.service';
import { AlertModalComponent } from './../../Shared/alert-modal/alert-modal.component';
import { CadastroService } from './../../Services/cadastro.service';
import { Usuario } from './../../Models/Usuario';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  cadastroForm!: FormGroup
  bsModalRef!: BsModalRef

  constructor(

    private service: CadastroService,
    private formBuilder: FormBuilder,
    private alertService: AlertModalService,
    private modalService: BsModalService

    ) { }

  ngOnInit(): void {
    this.cadastroForm = this.formBuilder.group(
      {
        email: ["", [Validators.required, Validators.email]],
        // confirmarEmail: ["", [Validators.required, Validators.email]],
        senha: ["", [Validators.required]],
        // confirmarSenha: ["", [Validators.required]]
      }
    )
  }

  submitCadastro() {
    console.log("teste");
    var dadosCadastro = this.cadastroForm.getRawValue() as Usuario;
    this.service.create(dadosCadastro)
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
