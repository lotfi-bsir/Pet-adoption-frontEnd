import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '../../@vex/layout/layout.module';
import { CustomLayoutComponent } from './custom-layout.component';
import { SidenavModule } from '../../@vex/layout/sidenav/sidenav.module';
import { ToolbarModule } from '../../@vex/layout/toolbar/toolbar.module';
import { FooterModule } from '../../@vex/layout/footer/footer.module';
import { ConfigPanelModule } from '../../@vex/components/config-panel/config-panel.module';
import { SidebarModule } from '../../@vex/components/sidebar/sidebar.module';
import { QuickpanelModule } from '../../@vex/layout/quickpanel/quickpanel.module';
import { HomeComponent } from './home/home.component';
import {RouterModule} from "@angular/router";
import { HeaderComponent } from './components/header/header.component';

import {IconsFaModule} from "../pages/ui/icons/icons-fa/icons-fa.module";
import {MatIconModule} from "@angular/material/icon";
import { BannerComponent } from './components/banner/banner.component';
import { CtaComponent } from './components/cta/cta.component';
import { FeatureComponent } from './components/feature/feature.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { StatsComponent } from './components/stats/stats.component';



@NgModule({
  declarations: [CustomLayoutComponent, HomeComponent, HeaderComponent, BannerComponent, CtaComponent, FeatureComponent, NewsletterComponent, StatsComponent],
  imports: [
    CommonModule,
    LayoutModule,
    SidenavModule,
    ToolbarModule,
    FooterModule,
    ConfigPanelModule,
    SidebarModule,
    QuickpanelModule,
    RouterModule,
    IconsFaModule,
    MatIconModule
  ]
})
export class CustomLayoutModule {
}
