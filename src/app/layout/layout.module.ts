import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutWithHeaderComponent } from './layout-with-header/layout-with-header.component';
import { LayoutWithFooterComponent } from './layout-with-footer/layout-with-footer.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [LayoutWithHeaderComponent, LayoutWithFooterComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [LayoutWithHeaderComponent, LayoutWithFooterComponent]
})
export class LayoutModule { }
