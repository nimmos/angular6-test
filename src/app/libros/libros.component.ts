import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tst-libros',
  template: `
	<div class="row">
		<tst-mock-books class="col-6"></tst-mock-books>
		<tst-google-books class="col-6"></tst-google-books>
		<tst-google-books-by-service class="col-6"></tst-google-books-by-service>
		<tst-lista class="col-6"></tst-lista>
	</div>
  `,
  styles: []
})
export class LibrosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
