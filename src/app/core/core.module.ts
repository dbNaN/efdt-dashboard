import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ApiService } from './services/api.service';
import { StoreService } from './services/store.service';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PaginationService } from './services/pagination.service';

@NgModule({
  imports: [CommonModule],
  declarations: [HeaderComponent, SidebarComponent],
  exports: [HeaderComponent, SidebarComponent],
  providers: [ApiService, StoreService, PaginationService],
})
export class CoreModule {}
