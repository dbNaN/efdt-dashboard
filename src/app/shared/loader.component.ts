import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loader',
  template:
    '<div class="overlay"><div class="loader" [hidden]="!visible"></div></div>',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent {
  @Input() visible: boolean = false;
}
