import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { StoreService } from 'src/app/core/services/store.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {
  public id: string;
  public isAddMode: boolean = true;
  public loading = false;
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
    private route: ActivatedRoute,
    private spinner: NgxSpinnerService,
    private _location: Location
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      this.isAddMode = false;
      this.form.disable();
      this.spinner.show();
      this.storeService.getStoreProductsById(this.id).subscribe(
        (data) => {
          this.form.patchValue(data);
          this.spinner.hide();
        },
        (err) => {
          console.log(err);
          this.spinner.hide();
        }
      );
    }
  }

  onSubmit() {
    this.spinner.show();
    if (this.form.invalid) {
      return;
    }
    this.createProduct();
  }

  private createProduct() {
    this.storeService.createProduct(this.form.value).subscribe(
      () => {
        this.router.navigate['products'];
        this.spinner.hide();
      },
      (err) => {
        console.log(err);
        this.spinner.hide();
        this._location.back();
        this.router.navigate['products'];
      }
    );
  }

  back() {
    this.router.navigate['products'];
  }
}
