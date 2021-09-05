import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-tab',
  templateUrl: './custom-tab.component.html',
  styleUrls: ['./custom-tab.component.scss']
})
export class CustomTabComponent implements OnInit {
  @Input('tabTitle')  tabTitle!: string;
  @Input() active = false;
  constructor() { }

  ngOnInit(): void {
  }

}
