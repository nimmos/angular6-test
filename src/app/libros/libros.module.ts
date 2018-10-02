import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { LibrosRoutingModule } from './libros-routing.module';
import { LibrosComponent } from './libros.component';
import { MockBooksComponent } from './mock-books/mock-books.component';
import { GoogleBooksComponent } from './google-books/google-books.component';
import { GoogleBooksByServiceComponent } from './google-books-by-service/google-books-by-service.component';
import { ListaComponent } from './lista/lista.component';
import { DetailsComponent } from './details/details.component';
import { MbooksService } from '../services/mbooks.service';
import { GbooksService } from '../services/gbooks.service';
import { CatalogoService } from '../services/catalogo.service';

@NgModule({
	imports: [
		FormsModule,
		CommonModule,
		HttpClientModule,
		RouterModule,
		LibrosRoutingModule,
	],
	declarations: [
		LibrosComponent,
		MockBooksComponent,
		GoogleBooksComponent,
		GoogleBooksByServiceComponent,
		ListaComponent,
		DetailsComponent
	],
	providers: [
		MbooksService,
		GbooksService,
		CatalogoService
	]
})
export class LibrosModule { }
