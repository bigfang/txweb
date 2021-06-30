import { NgModule, Type } from '@angular/core';
import { SharedModule } from '@shared';
import { WisdomRoutingModule } from './wisdom-routing.module';

const COMPONENTS: Type<void>[] = [];

@NgModule({
  imports: [SharedModule, WisdomRoutingModule],
  declarations: COMPONENTS,
})
export class WisdomModule {}
