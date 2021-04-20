import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Label, SingleDataSet } from 'ng2-charts';
import { CategoryStats } from 'src/app/core/models/category-stats.model';
import { StoreService } from 'src/app/core/services/store.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  title = 'dashboard-test';
  base = 'http://us-central1-test-b7665.cloudfunctions.net/api/';
  idStores = 'ijpxNJLM732vm8AeajMR';
  products = [];
  className = false;
  public polarAreaChartLabels: Label[] = [
    'Download Sales',
    'In-Store Sales',
    'Mail Sales',
    'Telesales',
    'Corporate Sales',
  ];
  public polarAreaChartData: SingleDataSet = [300, 500, 100, 40, 120];
  public polarAreaLegend = true;

  public polarAreaChartType = 'polarArea';
  public chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };
  constructor(private http: HttpClient, private storeService: StoreService) {}

  ngOnInit() {
    this.test();
    this.test2();
  }
  test() {
    this.storeService.getStoreProducts().subscribe(
      (data: any) => {
        this.products = data;
      },
      (err) => {
        console.log(err);
      }
    );
    /*this.http
        .get(this.base + 'stores/' + this.idStores + '/products')
        .subscribe((data: any) => {
          console.log(data);
          this.products = data;
        });*/
  }

  test2() {
    this.storeService
      .getCategoriesStats()
      .subscribe((data: CategoryStats[]) => {
        let arr = [];
        let arr2 = [];
        data.forEach((e) => {
          arr.push(e.category);
          arr2.push(e.numberOfProducts);
        });
        this.polarAreaChartLabels = arr;
        this.polarAreaChartData = arr2;
      });
  }

  changeLayout() {
    this.className = !this.className;
  }

  deleteProduct(id: string) {
    this.storeService.deleteProduct(id).subscribe(() => {
      this.test();
    });
  }
}
