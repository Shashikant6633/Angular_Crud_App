import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { FormService } from '../form.service';
import { ToastrModule, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  userId!: number;
  userData: any;

  constructor(private route: ActivatedRoute, private formService: FormService, private router: Router, private toastr: ToastrService) { }

  // ngOnInit(): void {
  //   this.route.params.subscribe(params => {
  //     this.userId = params['id'];
  //     this.getUserData();
  //   });
  // }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.userId = +params['id']; // Convert the parameter to a number
      this.getUserData();
    });
  }

  getUserData(): void {
    this.formService.getUserById(this.userId).subscribe(data => {
      this.userData = data;
    });
  }

  submitForm(): void {
    // Call the formService method to update user data
    this.formService.updateUser(this.userId, this.userData).subscribe(() => {
      this.router.navigate(['/registration-table']);
      this.toastr.success('User Updated Successfully!', 'Success', {
        positionClass: 'toast-top-right',
        timeOut: 5000 // 5 seconds
      });
    });
  }
}
