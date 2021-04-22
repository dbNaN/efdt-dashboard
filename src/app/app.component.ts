import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Store from './core/models/store.model';
import { StoreService } from './core/services/store.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public name: string = '';
  public getRoutes: string[] = [];
  constructor(private storeService: StoreService, private router: Router) {}

  ngOnInit() {
    this.getRoutes = this.router.config
      .filter((route) => route.path)
      .map((route) => route.path);
    console.log(this.getRoutes);
    this.storeService.getStoreById().subscribe(
      (response: { name: string }) => {
        this.name = response.name;
      },
      (err) => {
        console.log(err);
        this.name = 'Default';
      }
    );
  }
}
