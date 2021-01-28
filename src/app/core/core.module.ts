import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';

// ROUTING
import { CoreRoutingModule } from './core-routing.module';

// PIPE
import { SearchPipe } from './pipes/search.pipe';

// ANGULAR MATERIAL
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [LayoutComponent, SearchPipe],
  imports: [
    CommonModule,
    CoreRoutingModule,
    MatToolbarModule
  ],
  exports: [LayoutComponent]
})
export class CoreModule { }
