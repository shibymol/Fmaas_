import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';


export interface PeriodicElement {
  name: string;
  position: number;
  Amount: number;
  Location: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'xxxxxx', Amount: 200000.099, Location: 'Melbourne'},
  {position: 2, name: 'xxxxxx', Amount: 10000.0005, Location: 'Sydney'},
  {position: 3, name: 'xxxxxx', Amount: 5000.09, Location: 'Perth'},
  {position: 4, name: 'xxxxxx', Amount: 15000, Location: 'Be'},
];
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
  providers: [{
    provide: MAT_STEPPER_GLOBAL_OPTIONS, useValue: { displayDefaultIndicatorType: false }
  }]
})
export class AuthComponent implements OnInit {
  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  fraudCheck: FormGroup;
  mfaCheck: FormGroup;
  displayedColumns: string[] = ['position', 'name', 'Amount', 'Location'];
  dataSource = ELEMENT_DATA;
  city = ['Melbourne', 'Sydney', 'Perth', 'NewCastle'];
  divSelected = 1;
  status = 'Validate';
  constructor(
    private formBuilder: FormBuilder,

  ) {
    this.fraudCheck = this.formBuilder.group({
      MSISDN: new FormControl('', [Validators.required, Validators.pattern("^((\\+61-?)|0)?[0-9]{10}$")]),
      location: new FormControl('', Validators.required),
      check: new FormControl('', Validators.required)
    });
    this.mfaCheck = this.formBuilder.group({
      OTP: new FormControl('', Validators.required),
    });
    this.firstFormGroup = this.formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this.formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.firstFormGroup = this.formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this.formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }
  submit() {
    if (this.fraudCheck.valid) {
      this.showDiv(2);
      this.status = 'MFA';
    } else {

    }
  }
  showDiv(id) {
    this.divSelected = id;
  }
  verify() {
    if (this.mfaCheck.valid) {
      this.showDiv(3);
      this.status = 'MFA';
    } else {

    }
  }
}
