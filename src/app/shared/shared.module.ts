import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrimAndUpperPipe } from './trim-and-upper.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [TrimAndUpperPipe],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TrimAndUpperPipe
  ]
})
export class SharedModule { }
