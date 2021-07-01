import { NgModule, Type } from '@angular/core';
import { SharedModule } from '@shared';
import { WisdomRoutingModule } from './wisdom-routing.module';
import { WisdomEnterpriseComponent } from './enterprise/enterprise.component';
import { WisdomEnterpriseEditComponent } from './enterprise/edit/edit.component';
import { WisdomEnterpriseViewComponent } from './enterprise/view/view.component';

const COMPONENTS: Type<void>[] = [WisdomEnterpriseComponent, WisdomEnterpriseEditComponent, WisdomEnterpriseViewComponent];

@NgModule({
  imports: [SharedModule, WisdomRoutingModule],
  declarations: COMPONENTS,
})
export class WisdomModule {}
