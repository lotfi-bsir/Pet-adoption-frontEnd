import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsProgressSpinnerRoutingModule } from './c-p-s-r.module';
import { ComponentsProgressSpinnerComponent } from './c-p-s.component';
import { BreadcrumbsModule } from '../../../../../@vex/components/breadcrumbs/breadcrumbs.module';
import { SecondaryToolbarModule } from '../../../../../@vex/components/secondary-toolbar/secondary-toolbar.module';
import { PageLayoutModule } from '../../../../../@vex/components/page-layout/page-layout.module';
import {
  ComponentsOverviewProgressSpinnerModule
} from '../components-overview/components/components-overview-progress-spinner/components-overview-progress-spinner.module';


@NgModule({
  declarations: [ComponentsProgressSpinnerComponent],
  imports: [
    CommonModule,
    ComponentsProgressSpinnerRoutingModule,
    BreadcrumbsModule,
    SecondaryToolbarModule,
    PageLayoutModule,
    ComponentsOverviewProgressSpinnerModule,
  ]
})
export class CPSModule {
}
