import { Component, OnInit } from '@angular/core';
import { Contacto } from '../../models/contacto.model';
import { GRUPOS, SECTORES, AFICIONES } from '../../models/maestro.datos';
import { Grupo } from '../../models/grupo.model';
import { Sector } from '../../models/sector.model';
import { Aficion } from '../../models/aficion.model';

@Component({
  selector: 'tst-form-td',
  templateUrl: './form-td.component.html',
  styleUrls: ['./form-td.component.css']
})
export class FormTdComponent implements OnInit {

	contacto: Contacto;
	aGrupos: Array<Grupo>;
	aSectores: Array<Sector>;
	aAficiones: Array<Aficion>;

	constructor() {}

	ngOnInit() {
		this.contacto = new Contacto();
		this.aGrupos = GRUPOS;
		this.aSectores = SECTORES;
		this.aAficiones = AFICIONES;
	}

	changeAficiones(ev) {

		if(!this.contacto.aficiones) {
			this.contacto.aficiones = [];
		}

		if(ev.target.checked) {
			if (!this.contacto.aficiones.includes(ev.target.id)) {
				this.contacto.aficiones.push(ev.target.id);
			}
		} else {
			this.contacto.aficiones.splice(
				this.contacto.aficiones.indexOf(ev.target.id), 1
			);
		}
	}

	enviar() {
		console.log('Datos enviados.');
	}
}
