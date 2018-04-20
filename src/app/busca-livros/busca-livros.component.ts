import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-busca-livros',
  templateUrl: './busca-livros.component.html',
  styleUrls: ['./busca-livros.component.less']
})
export class BuscaLivrosComponent {

  book = [];

  livros = 'Busca de livros por título';

 

  constructor(private http: HttpClient) { }
  onNameKeyUp(event:any) {
  	this.title_part = event.target.value;
  }

   title_part = '';

   buscaLivros() {
  	this.http.get<any>('https://dummy-blue-hunter.mybluemix.net/book/by-title/' + this.title_part)
  	.subscribe(data => this.book = data)
  }

}
