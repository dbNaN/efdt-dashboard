import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { ProductsComponent } from './products.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {
    path: '',
    component: ProductsComponent,

    children: [
      {
        path: '',
        component: ListComponent,
      },
      {
        path: 'add',
        component: AddComponent,
      },
      {
        path: ':id/view',
        component: ViewComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
