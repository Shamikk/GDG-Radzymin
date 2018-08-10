import { Component, OnInit, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent implements OnInit {



  @Input()
  headerHeight: number;

  constructor() { }

  ngOnInit() {
  }

}
