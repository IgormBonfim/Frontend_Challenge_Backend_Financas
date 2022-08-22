import { CadastroService } from './../../Services/cadastro.service';
import { Usuario } from './../../Models/Usuario';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  cadastroForm!: FormGroup

  constructor(

    private service: CadastroService,
    private formBuilder: FormBuilder

    ) { }

  ngOnInit(): void {
    this.cadastroForm = this.formBuilder.group(
      {
        email: ["", [Validators.required, Validators.email]],
        senha: ["", [Validators.required]]
      }
    )
  }

  submitCadastro() {
    console.log("teste");

    var dadosCadastro = this.cadastroForm.getRawValue() as Usuario;
    this.service.create(dadosCadastro);
    console.log("Usuario cadastrado");
  }

}
