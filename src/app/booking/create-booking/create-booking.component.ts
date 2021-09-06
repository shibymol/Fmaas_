import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.scss']
})
export class CreateBookingComponent implements OnInit {
  bookingRequest: FormGroup;
  bookingId: any;
  details: any;
  roomType =['Adult', 'Children', 'Family']
  public myDatePickerOptions = {
    dateRange: true,
    dateFormat: 'dd/mm/yyyy'
  };

  constructor( 
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private toast: ToastrService
  ) {
    this.bookingRequest = this.formBuilder.group({
      name: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required),
      rooms: new FormControl('', Validators.required)
    })
   }

  ngOnInit(): void {
  }

create(){
  if(this.bookingRequest.invalid){
    this.toast.error("Enter valid details")
    console.log('error')
    return
  }
  console.log(this.bookingRequest);
  const formVals = this.bookingRequest.value;

  const data ={
name: formVals.name,
from: formVals.date.dateRange.beginEpoc,
to: formVals.date.dateRange.endEpoc,
type: formVals.rooms
  }
  this.http.post(`https://61310706de84de00171f6be1.mockapi.io/api/v1/booking/book`, data).subscribe(res =>{
    console.log('res',res)
    this.details = res;
    this.bookingId = this.details.id;
    this.bookingRequest.reset();
  })
}
cancel(){
  this.bookingRequest.reset();
}
}
