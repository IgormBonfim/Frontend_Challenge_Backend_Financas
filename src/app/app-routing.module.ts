import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CadastrarComponent } from './Components/cadastrar/cadastrar.component';
import { HomeComponent } from './Components/home/home.component';
import { ReceitasComponent } from './Components/receitas/receitas.component';

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "home" },
  { path: "home", component: HomeComponent },
  { path: "cadastrar", component: CadastrarComponent },
  { path: "receitas", component: ReceitasComponent},
  { path: "receitas/adicionar", component: CadastrarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
