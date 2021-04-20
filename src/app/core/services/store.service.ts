import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../models/product.model';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  constructor(private apiService: ApiService) {}

  getStores(): Observable<any> {
    return this.apiService.get('stores');
  }

  getStoreById(): Observable<any> {
    return this.apiService.get(`stores/${environment.storeId}`);
  }

  getStoreProducts() {
    return this.apiService.get(`stores/${environment.storeId}/products`);
  }

  getStoreProductsById(id: string) {
    return this.apiService.get(`stores/${environment.storeId}/products/${id}`);
  }

  createProduct(product: Product) {
    return this.apiService.post(
      `stores/${environment.storeId}/products`,
      product
    );
  }

  deleteProduct(id: string) {
    return this.apiService.delete(
      `stores/${environment.storeId}/products/${id}`
    );
  }

  getCategoriesStats() {
    return this.apiService.get(
      `stores/${environment.storeId}/stats/categories`
    );
  }
}
