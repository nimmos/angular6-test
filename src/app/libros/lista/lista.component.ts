import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/books.model';
import { BOOKS } from '../../models/books.datos';
import { CatalogoService } from '../../services/catalogo.service';

@Component({
  selector: 'tst-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

	aBooks: Array<Book>;

	constructor(private catalogo: CatalogoService) { }

	ngOnInit() {
		this.aBooks = this.catalogo.getBooks();
	}

}
