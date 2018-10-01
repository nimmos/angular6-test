import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tst-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

	title: string;
	logo: string;

	constructor() { }

	ngOnInit() {
		this.title = 'this test';
		this.logo = '../../../assets/logo_angular.svg';
	}

}
