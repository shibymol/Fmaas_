import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomTabComponent } from './custom-tab/custom-tab.component';
import { TabGroupComponent } from './tab-group/tab-group.component';
import { AngularMyDatePickerModule } from 'angular-mydatepicker';



@NgModule({
  declarations: [
    CustomTabComponent,
    TabGroupComponent
  ],
  imports: [
    CommonModule,
    AngularMyDatePickerModule
  ],
  exports: [
    TabGroupComponent,
    CustomTabComponent,
    AngularMyDatePickerModule,


  ]
})
export class SharedModule { }
