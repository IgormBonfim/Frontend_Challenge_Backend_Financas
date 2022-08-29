import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastrarComponent } from './Components/cadastrar/cadastrar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HeaderComponent } from './Components/header/header.component';
import { HomeComponent } from './Components/home/home.component';
import { AdicionarReceitaComponent } from './Components/receitas/adicionar-receita/adicionar-receita.component';
import { ReceitasComponent } from './Components/receitas/receitas.component';
import { AlertModalComponent } from './Shared/alert-modal/alert-modal.component';
import { LoadingComponent } from './Shared/loading/loading.component';
import { DetalhesReceitaComponent } from './Components/receitas/detalhes-receita/detalhes-receita.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    CadastrarComponent,
    ReceitasComponent,
    LoadingComponent,
    AlertModalComponent,
    AdicionarReceitaComponent,
    DetalhesReceitaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AlertModalComponent]
})
export class AppModule { }
