import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { BuscaClientesComponent } from './busca-clientes/busca-clientes.component';
import { BuscaLivrosComponent } from './busca-livros/busca-livros.component';

const ClientesRoutes: Routes = [
  { path: 'clientes', component: BuscaClientesComponent }
]

const LivrosRoutes: Routes = [
  { path: 'livros', component: BuscaLivrosComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    BuscaClientesComponent,
    BuscaLivrosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(ClientesRoutes),
    RouterModule.forRoot(LivrosRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
