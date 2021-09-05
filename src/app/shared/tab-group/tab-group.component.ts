import { AfterContentInit, Component, ContentChildren, OnInit, QueryList } from '@angular/core';
import { CustomTabComponent } from '../custom-tab/custom-tab.component';

@Component({
  selector: 'app-tab-group',
  templateUrl: './tab-group.component.html',
  styleUrls: ['./tab-group.component.scss']
})
export class TabGroupComponent implements AfterContentInit {
  @ContentChildren(CustomTabComponent) customTabs!: QueryList<CustomTabComponent>;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentInit() {
    let activeTabs = this.customTabs.filter((tab)=>tab.active);
    
    if(activeTabs.length === 0) {
      this.selectTab(this.customTabs.first);
    }
  }
  
  selectTab(tab: any){
    // deactivate all tabs
    this.customTabs.toArray().forEach(tab => tab.active = false);
    
    // activate the tab the user has clicked on.
    tab.active = true;
  }
}
