import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingRoutingModule } from './booking-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateBookingComponent } from './create-booking/create-booking.component';
import { ListBookingsComponent } from './list-bookings/list-bookings.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DashboardComponent,
    CreateBookingComponent,
    ListBookingsComponent
  ],
  imports: [
    CommonModule,
    BookingRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class BookingModule { }
