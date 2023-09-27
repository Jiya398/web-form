import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';

  defaultEducation = 'level';

  firstName!:string;
  lastName!:string;
  userName!: string;
  email!: string;
  education!: string;


  @ViewChild('myForm') form!: NgForm;

  onSubmit(){
    console.log(this.form);
    this.firstName = this.form.value.registrationForm.firstName;
    this.lastName = this.form.value.registrationForm.lastName;
    this.userName = this.form.value.registrationForm.userName;
    this.email = this.form.value.registrationForm.email;
    this.education = this.form.value.education;
    this.form.reset();
  }

  setDefaultValues(){

    this.form.form.patchValue({
      personDetails: {
         firstName: '',
         lastName: '',
         userName: '',
         email: '',
         education: '',
         career: ''
      }
    })
  }
}
