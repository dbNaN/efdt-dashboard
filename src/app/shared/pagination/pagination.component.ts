import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { PaginationService } from 'src/app/core/services/pagination.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit {
  @Input() data: any;
  @Input() isSetPage: boolean;
  @Output() items = new EventEmitter();
  public pager: any = {};
  public pagedItems: any[];

  constructor(
    private paginationService: PaginationService,
    private cdRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {}
  ngOnChanges(changes: SimpleChanges) {
    if (changes.isSetPage.currentValue) {
      this.setPage(1);
    }
  }
  ngAfterViewChecked() {
    this.cdRef.detectChanges();
  }
  setPage(page: number) {
    if (page < 1 || page > this.pager.totalPages) {
      return;
    }
    this.pager = this.paginationService.getPagination(this.data.length, page);
    this.pagedItems = this.data.slice(
      this.pager.startIndex,
      this.pager.endIndex + 1
    );
    this.items.emit(this.pagedItems);
  }
}
