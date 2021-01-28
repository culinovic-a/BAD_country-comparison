import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';

// ROUTING
import { CoreRoutingModule } from './core-routing.module';

// ANGULAR MATERIAL
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    CoreRoutingModule,
    MatToolbarModule
  ],
  exports: [LayoutComponent]
})
export class CoreModule { }
