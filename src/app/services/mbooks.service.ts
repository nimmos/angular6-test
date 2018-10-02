import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MbooksService {

	aLibros: Array<string>;

	constructor() {
		this.aLibros = [
			'My Hero Academia',
			'Boku no Hero Macadamia',
			'Angular pero divertido',
			'Cells at Work! VERY BLACK',
		];
	}

	getLibros(clave) {
		return this.aLibros;
	}

	getLibros$(clave) {
		return new Observable(
			(observer) => {
				setTimeout( () => {
					observer.next(this.aLibros);
				}, 2000);
			}
		);
	}
}
