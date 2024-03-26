// import { Component } from '@angular/core';
// import { FormGroup, FormControl, Validators } from '@angular/forms';

// @Component({
//   selector: 'app-form',
//   templateUrl: './form.component.html',
//   styleUrls: ['./form.component.css']
// })
// export class FormComponent {

//   form = new FormGroup({
//     name: new FormControl('', [Validators.required, Validators.minLength(3)]),
//     email: new FormControl('', [Validators.required, Validators.email]),
//     body: new FormControl('', Validators.required)
//   });
  
//   get f(){
//     return this.form.controls;
//   }
  
//   submit(){
//     console.log(this.form.value);
//   }

// }

// import { Component } from '@angular/core';
// import { FormGroup, FormControl, Validators } from '@angular/forms';
// import { FormService } from '../form.service';

// @Component({
//   selector: 'app-form',
//   templateUrl: './form.component.html',
//   styleUrls: ['./form.component.css']
// })
// export class FormComponent {

//   form = new FormGroup({
//     name: new FormControl('', [Validators.required, Validators.minLength(3)]),
//     email: new FormControl('', [Validators.required, Validators.email]),
//     phoneNumber: new FormControl('', Validators.required),
//     password: new FormControl('', [Validators.required, Validators.minLength(6)]),
//     confirmPassword: new FormControl('', Validators.required)
//   });

//   get f(){
//     return this.form.controls;
//   }

//   submit(){
//     console.log(this.form.value);
//   }

// }

import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormService } from '../form.service'; // Import FormService'
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phoneNumber: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmPassword: new FormControl('', Validators.required)
  });

  get f(){
    return this.form.controls;
  }

  constructor(private formService: FormService, private toastr: ToastrService) { } // Inject FormService

  submit() {
    // Check if the form is valid before submitting
    if (this.form.valid) {
      // Call the submitForm method of the FormService and pass the form value
      this.formService.submitForm(this.form.value).subscribe({
        next: (response: any) => {
          console.log('Form submitted successfully:', response);
          this.toastr.success('User Registered Successfully!', 'Success', {
            positionClass: 'toast-top-right',
            timeOut: 5000 // 5 seconds
          });
          // Optionally, you can reset the form after successful submission
          this.form.reset();
        },
        error: (error: any) => {
          console.error('Error submitting form:', error);
        }
      });
    }
  }
}
