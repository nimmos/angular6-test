import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tst-home',
  template: `
	<div class="row">
		<tst-saludo class="col"></tst-saludo>
		<tst-referencias class="col"></tst-referencias>
	</div>
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
