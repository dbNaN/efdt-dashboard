import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Label, SingleDataSet } from 'ng2-charts';
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
  // pager object
  pager: any = {};

  // paged items
  pagedItems: any[];

  public loader: boolean = false;
  public products: any[] = [
    {
      id: '3dkjcHtVCku9xML1gS6G',
      data: {
        description: 'fdsfds',
        price: 250,
        title: 'lplp',
        employee: 'fdssd',
        category: 'fds',
      },
    },
    {
      id: '430sQSsxwFAIviXFBlCs',
      data: {
        title: 'a',
        employee: 'fdssd',
        price: 0,
        category: 'z',
        description: 'w',
      },
    },
    {
      id: '7LCrVrl98vJ1ltNKnO77',
      data: {
        category: 'Pasticceria',
        title: 'Torta sake',
        description: 'Torta al sake caldo',
        employee: 'Giovanni',
        price: 10,
      },
    },
    {
      id: 'ZDXfjxwDRe1aOnty6UUv',
      data: {
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae mi tellus. Sed viverra lacus dapibus metus tincidunt malesuada. Morbi imperdiet iaculis diam. Vivamus malesuada nisi sed lacus laoreet, id efficitur enim vestibulum. Donec ac risus eget nibh commodo pellentesque at id risus. Ut nec erat est. Nam nec bibendum enim. Phasellus ac efficitur sapien. Etiam at ligula et orci ultrices sollicitudin in vitae est.',
        title: 'Long description',
        price: '55',
        category: 'testing',
        id: 'id1',
        employee: 'Giovanni',
      },
    },
    {
      id: 'aPf4UL223BKdhuYkrxXd',
      data: {
        category: 'Panini dolci',
        description: 'EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEh',
        price: 10,
        title: 'panino al sambuco',
        employee: 'Giovanni',
      },
    },
    {
      id: 'cgkMKOKLFuATjtiVpboo',
      data: {
        review: '',
        description: 'pollo con patate',
        title: 'pollo con patate',
        employee: 'Aldo',
        price: '15',
        category: 'secondo',
      },
    },
    {
      id: 'osKO5guWuoABgKjIWK3M',
      data: {
        title: 'torta alla vaniglia',
        employee: 'Salgemma Lorenza',
        price: 240,
        category: 'torte',
        description: 'Torta di buona fattura',
      },
    },
  ];
  public isGridLayout: boolean;
  public polarAreaChartLabels: Label[] = [];
  public polarAreaChartData: SingleDataSet = [];

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
    private paginationService: PaginationService
  ) {}

  ngOnInit() {
    console.log(this.products);
    //this.setPage(1);
    this.getProducts();
    //this.getStats();
  }

  getProducts() {
    this.storeService.getStoreProducts().subscribe(
      (response: Product[]) => {
        console.log(response);
        this.products = response;
        this.setPage(1);
      },
      (err) => {
        console.log(err);
      },
      () => {
        this.loader = false;
      }
    );
  }

  getStats() {
    this.storeService
      .getCategoriesStats()
      .subscribe(async (response: CategoryStats[]) => {
        let labels = [];
        let data = [];
        let color = [];
        await response.forEach((e) => {
          labels.push(e.category);
          data.push(e.numberOfProducts);
          color.push(this.randomRGB());
        });
        this.polarAreaChartLabels = labels;
        this.polarAreaChartData = data;
        this.polarAreaColors = color;
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

  randomRGB() {
    const r = Math.random() * 255;
    const g = Math.random() * 255;
    const b = Math.random() * 255;
    return `rgba(${r},${g},${b},0.28)`;
  }
  setPage(page: number) {
    if (page < 1 || page > this.pager.totalPages) {
      return;
    }

    // get pager object from service
    this.pager = this.paginationService.getPagination(
      this.products.length,
      page
    );

    // get current page of items
    this.pagedItems = this.products.slice(
      this.pager.startIndex,
      this.pager.endIndex + 1
    );
  }
}
