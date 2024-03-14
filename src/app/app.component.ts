import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  formSubmit(myForm: NgForm) {
    if(myForm.valid){
      const formValues = JSON.stringify(myForm.value);
      console.log(formValues);
      console.log('%c Form submitted successfully', 'color: green; font-weight: 400; font-size: 15px');

    }else{
      alert("Please fill up the required fields")
    }
  }
  
  resetValue(myForm: NgForm) {
    myForm.resetForm();
  }

  setDefault(myForm: NgForm) {
    myForm.resetForm({
      name: 'Default Name',
      email: 'defaultId@gmail.com',
    });
  }
}
