import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'tst-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

	@Input() aItems;
	@Output() evtDelete: EventEmitter<number>;

	constructor() {
		this.evtDelete = new EventEmitter();
	}

	ngOnInit() {
	}

	btnDelete(i) {
		this.evtDelete.emit(i);
	}
}
