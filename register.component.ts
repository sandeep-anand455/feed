import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { RegisterServiceService } from '../register-service.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

registerForm: FormGroup;
loading = false;
submitted = false;
graduation: any;
gradSpeciality: any ;
yearOfPassing: any ;
gender: any = [];
mobNumberPattern = '^((\\+91-?)|0)?[0-9]{10}$';


  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    public registerService: RegisterServiceService

) { }

ngOnInit() {
  this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      emailId : ['', Validators.required],
      mobileNumber : ['', Validators.required],
      graduationCollegeName : ['', Validators.required],
      graduationMarks : ['', Validators.required],
      gender: ['', Validators.required],
      TwelfthMarks : ['', Validators.required, Validators.max(100), Validators.min(50)],
      TenthMarks : ['', Validators.required, Validators.max(100), Validators.min(50)],
      permanentAddress : ['', Validators.required],
      currentAddress : ['', Validators.required],
      govtIssuedIDProof : ['', Validators.required]
      // username: ['', Validators.required],
      // password: ['', [Validators.required, Validators.minLength(6)]]
  });
   this.registerService.getAllGenders().subscribe(resp => {
   this.gender = resp
   console.log(resp)
   })
}


}

