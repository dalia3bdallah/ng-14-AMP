import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { starComponent } from './star.components';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    starComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    FormsModule,
    CommonModule,
    starComponent,
    
  ]
})
export class SharedModule { }
