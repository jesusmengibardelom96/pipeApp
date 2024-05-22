import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button'
import { CardModule } from 'primeng/card'
import { FieldsetModule } from 'primeng/fieldset'
import { PanelModule } from 'primeng/panel'
import { ToolbarModule } from 'primeng/toolbar';
import { SplitButtonModule } from 'primeng/splitbutton';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    MenubarModule,
    FieldsetModule,
    ButtonModule,
    CardModule,
    PanelModule,
    ToolbarModule,
    SplitButtonModule,
    InputTextModule,
    TableModule
  ]
})
export class PrimeNgModule { }
