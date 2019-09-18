import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { IUser } from '../../interfaces/user';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  updateForm: FormGroup;
  currentUser:IUser;
  constructor(private formBuilder: FormBuilder,
    private userService: UserService,
    private toastr:ToastrService) { }

  ngOnInit() {
    const user = this.userService.getCurrentUserInfo().subscribe(user=>{
      this.currentUser = user;});
    this.updateForm = this.formBuilder.group({
      firstName: [this.currentUser.firstName, Validators.required],
      lastName: [this.currentUser.lastName, Validators.required],
      email: [this.currentUser.email, Validators.compose([Validators.email, Validators.required]) ],
      address: [this.currentUser.address],
      country: [this.currentUser.country],
      city: [this.currentUser.city],
      postalCode: [this.currentUser.postalCode],
      aboutMe: [this.currentUser.aboutMe] });

  }
  onSubmit():void {
    const userInfo = {
      email:	this.updateForm.get('email').value,
      firstName:	this.updateForm.get('firstName').value,
      lastName:this.updateForm.get('lastName').value,
      address:	this.updateForm.get('address').value,
      country:	this.updateForm.get('country').value,
      city:	this.updateForm.get('city').value,
      postalCode:	this.updateForm.get('postalCode').value,
      aboutMe:	this.updateForm.get('aboutMe').value,
    }
    this.userService.registerUser(userInfo as IUser).subscribe(
     res=>{
       this.toastr.success('User profile is updated');
     },
     err=>{
       this.toastr.error('Try update user profile one more time');
     });
   }
}
