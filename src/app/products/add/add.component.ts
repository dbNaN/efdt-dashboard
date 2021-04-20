import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StoreService } from 'src/app/core/services/store.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {
  loading = false;
  public form = this.formBuilder.group({
    title: [''],
    price: [0],
    category: [''],
    employee: [''],
    description: [''],
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
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {}
  onSubmit() {
    //this.submitted = true;

    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }
    this.createProduct();
  }

  private createProduct() {
    this.storeService.createProduct(this.form.value).subscribe(() => {
      console.log('ciao');
      this.router.navigate['products'];
    });
  }

  back() {
    this.router.navigate['products'];
  }
}
