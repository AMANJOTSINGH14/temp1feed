import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  isLoading=false;
  constructor(private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
  }
  onSignup(form:NgForm){

 this.router.navigate(['/login'])

  }
  }
