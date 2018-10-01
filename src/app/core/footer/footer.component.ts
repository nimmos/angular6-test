import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tst-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
	
	autor: string;
	empresa: string;

	constructor() { }

	ngOnInit() {
		this.autor = 'Nimmos';
		this.empresa = 'OVEX';
	}

}
