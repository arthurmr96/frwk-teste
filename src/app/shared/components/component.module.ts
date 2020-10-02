import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/shared/material.module';
import { LayoutComponent } from 'src/app/shared/components/layout/layout.component';
import {MatMenuModule} from '@angular/material/menu';

@NgModule({
  declarations: [LayoutComponent],
  imports: [CommonModule, MaterialModule, RouterModule, MatMenuModule],
  exports: [LayoutComponent]
})
export class ComponentsModule {}
