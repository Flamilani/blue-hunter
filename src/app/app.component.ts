import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'Blue Hunter';
  subtitle = 'Aplicação SPA com Angular';
  clientes = 'Busca de Clientes';
  livros = 'Busca de Livros';
}
