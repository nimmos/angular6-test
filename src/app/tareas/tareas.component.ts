import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tst-tareas',
  template: `
    <div class="row">
		<tst-control-tareas class="col"></tst-control-tareas>
    </div>
  `,
  styles: []
})
export class TareasComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
