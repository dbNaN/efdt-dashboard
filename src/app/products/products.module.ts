import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/share.module';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { ChartsModule } from 'ng2-charts';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    ProductsRoutingModule,
    ChartsModule,
    NgxPaginationModule,
  ],
  declarations: [ProductsComponent, AddComponent, ViewComponent, ListComponent],
  providers: [],
})
export class ProductsModule {}
