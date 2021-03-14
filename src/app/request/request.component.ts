import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})
export class RequestComponent implements OnInit {
  reqForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.reqForm = new FormGroup({
      name: new FormControl(null),
      date: new FormControl(null),
      facilities: new FormArray([])
    });
  }

  addFacility(): any{
    const facFormGroup = new FormGroup({
      facName: new FormControl(null),
      country: new FormControl(null)
    });
    (this.reqForm.get('facilities') as FormArray).push(facFormGroup);
  }

  removeFacility(index: number): any{
    (this.reqForm.get('facilities') as FormArray).removeAt(index);
  }

}
