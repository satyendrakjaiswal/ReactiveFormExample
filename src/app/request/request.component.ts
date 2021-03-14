import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})
export class RequestComponent implements OnInit {
  reqForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.reqForm = this.fb.group({
      name: null,
      date: null,
      facilities: this.fb.array([])
    });
  }

  addFacility(): any{
    const facFormGroup = this.fb.group({
      facName: null,
      country: null
    });
    (this.reqForm.get('facilities') as FormArray).push(facFormGroup);
  }

  removeFacility(index: number): any{
    (this.reqForm.get('facilities') as FormArray).removeAt(index);
  }

}
