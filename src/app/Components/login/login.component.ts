import { Usuario } from './../../Models/Usuario';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { CadastroService } from 'src/app/Services/cadastro.service';
import { AlertModalService } from 'src/app/Shared/alert-modal.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup
  bsModalRef!: BsModalRef

  constructor(
    private service: CadastroService,
    private formBuilder: FormBuilder,
    private alertService: AlertModalService,
    private modalService: BsModalService
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group(
      {
        email: ["", [Validators.required, Validators.email]],
        senha: ["", [Validators.required]],
      }
    )
  }

  fazerLogin() {
    var usuario: Usuario = new Usuario(this.loginForm.value.email, this.loginForm.value.senha);
    console.log(usuario);
  }

}
