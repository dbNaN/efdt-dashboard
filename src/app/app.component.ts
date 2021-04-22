import { Component } from '@angular/core';
import Store from './core/models/store.model';
import { StoreService } from './core/services/store.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public name: string = '';
  constructor(private storeService: StoreService) {}

  ngOnInit() {
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
