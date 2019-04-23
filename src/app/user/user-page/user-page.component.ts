import { Component, OnInit,ChangeDetectionStrategy } from '@angular/core';
import { UserService } from 'src/app/shared/dbAccess/user.service';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/shared/models/user.model';
import { FormControl, Form, FormGroup, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {
  //Will hold our user data.
  userData: UserModel[];
  
  //Auto complete variables.
  classesForm: FormGroup;
  filteredUsers: String[] = [];
  isLoading = false;

  /*
  TODO: 
    DISPLAY Image
    Edit all fields
    Autocomplete on edit skills and classes. 

  */
  constructor(private userService : UserService,private router : Router, private formBuilder: FormBuilder)
   { 
    this.userService.getUserdetails().subscribe(userData => this.userData = userData);
    console.log(this.userData);
   }

  ngOnInit() {
    
    this.classesForm = this.formBuilder.group({
      userInput: null
    })
  }
  searchClasses(constrain: string){
    this.userService.searchClasses(constrain).subscribe((data:any)=>{
      console.log(data)
    })
  }
  
  addclass(){
    //this.userService.
  }



}
