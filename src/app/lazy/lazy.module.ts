import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyComponent } from './lazy.component';
import { LazyRoutingModule } from './lazy-routing.module';

@NgModule({
  declarations: [LazyComponent],
  exports: [LazyComponent],
  imports: [CommonModule, LazyRoutingModule],
  providers: [],
})
export class LazyModule {}
