import { Component, OnInit } from '@angular/core';
import { GbooksService } from '../../services/gbooks.service';

@Component({
  selector: 'tst-google-books-by-service',
  templateUrl: './google-books-by-service.component.html',
  styleUrls: ['./google-books-by-service.component.css']
})
export class GoogleBooksByServiceComponent implements OnInit {

	clave: string;
	aLibros: Array<any>;

	constructor(public gbooks: GbooksService) {
	}

	ngOnInit() {
		this.clave = '';
		this.aLibros = [];
	}

	btnBuscar() {

		this.aLibros = [];
		this.gbooks.getLibros(this.clave)
		.subscribe(
			response => this.aLibros = response
		);
		this.clave = '';
	}

}
