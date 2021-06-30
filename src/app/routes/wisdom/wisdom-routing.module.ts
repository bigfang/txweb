import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WisdomEnterpriseComponent } from './enterprise/enterprise.component';

const routes: Routes = [{ path: 'enterprise', component: WisdomEnterpriseComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WisdomRoutingModule {}
