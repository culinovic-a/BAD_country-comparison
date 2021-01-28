import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';

import { CoreRoutingModule } from './core-routing.module';
import { SearchPipe } from './pipes/search.pipe';

@NgModule({
  declarations: [LayoutComponent, SearchPipe],
  imports: [
    CommonModule,
    CoreRoutingModule
  ]
})
export class CoreModule { }
