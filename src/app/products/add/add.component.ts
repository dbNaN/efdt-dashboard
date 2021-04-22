import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StoreService } from 'src/app/core/services/store.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {
  id!: string;
  isAddMode: boolean = true;
  loading = false;
  public form = this.formBuilder.group({
    title: ['', Validators.required],
    price: [0, Validators.required],
    category: ['', Validators.required],
    employee: ['', Validators.required],
    description: ['', Validators.required],
  });
  public controls = {
    title: this.form.get('title'),
    price: this.form.get('price'),
    category: this.form.get('category'),
    employee: this.form.get('employee'),
    description: this.form.get('description'),
  };
  constructor(
    private formBuilder: FormBuilder,
    private storeService: StoreService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log(this.route.snapshot);
    if (this.id) {
      this.isAddMode = false;
      this.form.disable();
      this.storeService.getStoreProductsById(this.id).subscribe((data) => {
        this.form.patchValue(data);
      });
    }
  }
  onSubmit() {
    if (this.form.invalid) {
      return;
    }
    this.createProduct();
  }

  private createProduct() {
    this.storeService.createProduct(this.form.value).subscribe(() => {
      this.router.navigate['products'];
    });
  }

  back() {
    this.router.navigate['products'];
  }
}
