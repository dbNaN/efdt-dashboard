import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Label, SingleDataSet } from 'ng2-charts';
import { NgxSpinnerService } from 'ngx-spinner';
import { CategoryStats } from 'src/app/core/models/category-stats.model';
import { Product } from 'src/app/core/models/product.model';
import { PaginationService } from 'src/app/core/services/pagination.service';
import { StoreService } from 'src/app/core/services/store.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  public pagedItems: any[];
  public setPage: boolean = false;
  public products: any[] = [];
  public isGridLayout: boolean;
  public polarAreaChartLabels: Label[] = [];
  public polarAreaChartData: SingleDataSet = [];
  public isChartVisible: boolean = false;

  public polarAreaLegend: boolean = true;
  public polarAreaChartType = 'polarArea';
  public chartOptions = {
    responsive: true,
    maintainAspectRatio: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };
  public polarAreaColors = [];
  constructor(
    private storeService: StoreService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit() {
    this.getProducts();
    this.getStats();
  }

  getProducts() {
    this.setPage = false;
    this.spinner.show();
    this.storeService.getStoreProducts().subscribe(
      (response: Product[]) => {
        console.log(response);
        this.products = response;
        this.setPage = true;
        this.spinner.hide();
      },
      (err) => {
        console.log(err);
        this.spinner.hide();
      },
      () => {
        this.spinner.hide();
      }
    );
  }

  getStats() {
    this.storeService
      .getCategoriesStats()
      .subscribe((response: CategoryStats[]) => {
        let labels = [];
        let data = [];
        let color = [];
        response.forEach((e) => {
          labels.push(e.category);
          data.push(e.numberOfProducts);
        });
        this.polarAreaChartLabels = labels;
        this.polarAreaChartData = data;
        this.polarAreaColors = color;
        this.isChartVisible = true;
      });
  }

  changeLayout() {
    this.isGridLayout = !this.isGridLayout;
  }

  deleteProduct(id: string) {
    this.storeService.deleteProduct(id).subscribe(() => {
      this.getProducts();
    });
  }

  getItems(event) {
    this.pagedItems = event;
  }
}
