import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLoading=false;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  onLogin(form:NgForm){
    this.router.navigate(['/empFeedback'])
  console.log(form)

  }
  }
