import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListSeparatorPipe } from './list-separator/list-separator.pipe';
import { PluralSingularPipe } from './plural-singular/plural-singular.pipe';

@NgModule({
  declarations: [
    ListSeparatorPipe,
    PluralSingularPipe
  ],
  imports: [
    CommonModule,
  ],
   exports: [
    ListSeparatorPipe,
    PluralSingularPipe
   ]
})
export class CustomPipesModule { }
