import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TareasRoutingModule } from './tareas-routing.module';
import { TareasComponent } from './tareas.component';
import { ControlTareasComponent } from './control-tareas/control-tareas.component';
import { ItemComponent } from './item/item.component';
import { ListaComponent } from './lista/lista.component';

@NgModule({
  imports: [
    CommonModule,
    TareasRoutingModule,
	FormsModule
  ],
  declarations: [TareasComponent, ControlTareasComponent, ItemComponent, ListaComponent]
})
export class TareasModule { }
