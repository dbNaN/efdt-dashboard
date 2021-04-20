import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ApiService } from './services/api.service';
import { StoreService } from './services/store.service';

@NgModule({
  imports: [CommonModule],
  declarations: [],
  providers: [ApiService, StoreService],
})
export class CoreModule {}
