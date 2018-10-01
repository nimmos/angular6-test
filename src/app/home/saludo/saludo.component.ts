import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tst-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent implements OnInit {

	usuario: string;
	idioma: string;

	constructor() { }

	ngOnInit() {
		this.usuario = 'Niichan';
		this.idioma = 'en';
	}

	btnBorrar(ev) {
		this.usuario = '';
	}

}
