import { DetalhesReceitaComponent } from './Components/receitas/detalhes-receita/detalhes-receita.component';
import { AdicionarReceitaComponent } from './Components/receitas/adicionar-receita/adicionar-receita.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CadastrarComponent } from './Components/cadastrar/cadastrar.component';
import { HomeComponent } from './Components/home/home.component';
import { ReceitasComponent } from './Components/receitas/receitas.component';

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "home" },
  { path: "home", component: HomeComponent },
  { path: "cadastrar", component: CadastrarComponent },
  { path: "receitas", component: ReceitasComponent },
  { path: "receitas/adicionar", component: AdicionarReceitaComponent },
  { path: "receitas/detalhes", component: DetalhesReceitaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
