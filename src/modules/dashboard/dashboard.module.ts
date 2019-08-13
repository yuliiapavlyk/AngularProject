import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from 'src/pages/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from 'src/pages/header/header.component';
import { SideBarComponent } from 'src/pages/side-bar/side-bar.component';

@NgModule({
  declarations: [DashboardComponent, HeaderComponent, SideBarComponent],
  imports: [CommonModule, RouterModule.forChild([])],
})
export class DashboardModule { }
