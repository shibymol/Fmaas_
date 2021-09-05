import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-bookings',
  templateUrl: './list-bookings.component.html',
  styleUrls: ['./list-bookings.component.scss']
})
export class ListBookingsComponent implements OnInit {
  bookingId: any
  details = [] as any;
  detailTable = false;
  constructor(
    private http: HttpClient,

  ) { }

  ngOnInit(): void {
  }
  getDetails() {
    this.http.get(`https://61310706de84de00171f6be1.mockapi.io/api/v1/booking/book/${this.bookingId}`).subscribe(res => {
      this.details = res;
      this.detailTable = true;
    })
  }
}