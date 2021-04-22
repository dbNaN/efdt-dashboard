import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { PaginationComponent } from './pagination/pagination.component';
import { MatGridListModule } from '@angular/material/grid-list';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    MatGridListModule,
  ],
  declarations: [PaginationComponent],
  exports: [PaginationComponent, MatGridListModule],
  providers: [],
})
export class SharedModule {}
