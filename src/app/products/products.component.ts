import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Label, SingleDataSet } from 'ng2-charts';
import { CategoryStats } from '../core/models/category-stats.model';
import { StoreService } from '../core/services/store.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  constructor() {}
  ngOnInit() {}
}
