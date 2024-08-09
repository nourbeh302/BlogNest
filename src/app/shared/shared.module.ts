import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { GridComponent } from './layout/grid/grid.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, ButtonComponent, GridComponent, NavbarComponent],
  exports: [ButtonComponent, GridComponent, NavbarComponent],
})
export class SharedModule {}
