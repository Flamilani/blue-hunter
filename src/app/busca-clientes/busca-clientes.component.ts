import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response } from '@angular/http';

@Component({
  selector: 'app-busca-clientes',
  templateUrl: './busca-clientes.component.html',
  styleUrls: ['./busca-clientes.component.less']
})
export class BuscaClientesComponent {

  user = [];

  titulo_cliente = 'Busca de clientes por nome';

  constructor(private http: HttpClient) { }
   
  name_part = '';

  buscaClientes() {
  	this.http.get<any>('https://dummy-blue-hunter.mybluemix.net/user/by-name/' + this.name_part)
  	.subscribe(data => this.user = data)  	
  }

}
