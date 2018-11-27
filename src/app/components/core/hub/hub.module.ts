import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HubRoutingModule } from './hub-routing.module';
import { HubComponent } from './hub.component';
import { NavsideComponent } from '../navside/navside.component';

@NgModule({
  declarations: [HubComponent,NavsideComponent],
  imports: [
    CommonModule,
    HubRoutingModule,
  ]
})
export class HubModule { }
