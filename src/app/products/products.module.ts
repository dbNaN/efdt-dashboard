import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { AddComponent } from './add/add.component';
import { ChartsModule } from 'ng2-charts';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { PaginationComponent } from '../shared/pagination/pagination.component';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    ProductsRoutingModule,
    ChartsModule,
    NgxPaginationModule,
    MatGridListModule,
  ],
  exports: [MatGridListModule],
  declarations: [ProductsComponent, AddComponent, ListComponent],
  providers: [],
})
export class ProductsModule {}
