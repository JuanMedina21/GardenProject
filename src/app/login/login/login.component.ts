import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { Subscriber } from 'rxjs';
import {FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { DatabaseService } from '../services/database.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  sessionToken='';



  constructor(private fb: FormBuilder, private dbService: DatabaseService) { }

  ngOnInit() {
  }

  login(email: string , password: string): void {
    event.preventDefault();
    let userInfo: any ={
      email: email,
      password: password
    }
    this.dbService.login(userInfo)
    .subscribe(user => {
      this.User.push(user);
    })

    
  }

}
