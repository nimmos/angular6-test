import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'tst-google-books',
  templateUrl: './google-books.component.html',
  styleUrls: ['./google-books.component.css']
})
export class GoogleBooksComponent implements OnInit {

	clave: string;
	aLibros: Array<any>;
	urlBase: string;

	constructor(public http: HttpClient) {
	}

	ngOnInit() {
		this.clave = '';
		this.aLibros = [];
		this.urlBase = 'https://www.googleapis.com/books/v1/volumes?q=intitle:';
	}

	btnBuscar() {
		const URL = this.urlBase + this.clave;
		this.http.get(URL).subscribe(
			(response: any) => {
				if(response.items) {
					this.clave = '';
					this.aLibros = [];
					response.items.forEach( element => {
						this.aLibros.push(element.volumeInfo.title);
					});
				}
			}
		);
	}
}
