import { NgModule, Type } from '@angular/core';
import { SharedModule } from '@shared';
import { WisdomRoutingModule } from './wisdom-routing.module';
import { WisdomEnterpriseComponent } from './enterprise/enterprise.component';

const COMPONENTS: Type<void>[] = [WisdomEnterpriseComponent];

@NgModule({
  imports: [SharedModule, WisdomRoutingModule],
  declarations: COMPONENTS,
})
export class WisdomModule {}
