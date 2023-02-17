import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuicklinkModule } from 'ngx-quicklink';
import { ComponentsProgressSpinnerComponent } from './c-p-s.component';


const routes: Routes = [
  {
    path: '',
    component: ComponentsProgressSpinnerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, QuicklinkModule]
})
export class ComponentsProgressSpinnerRoutingModule {
}
