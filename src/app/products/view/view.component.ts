import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Label, SingleDataSet } from 'ng2-charts';
import { CategoryStats } from 'src/app/core/models/category-stats.model';
import { StoreService } from 'src/app/core/services/store.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
})
export class ViewComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
