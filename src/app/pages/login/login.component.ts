import { AuthService } from './../../auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email = new FormControl("", [Validators.required]);
  password = new FormControl("", [Validators.required]);
  message: string = "";
  hide: boolean = true;
  constructor(private auth: AuthService,
    private router: Router,
    private snackbar: MatSnackBar

  ) { }

  ngOnInit() {
    console.log("Login work");
  }

  onLogIn() {
    const email = this.email.value;
    const password = this.password.value;
    this.auth.signInWithEmailAndPassword(email,password).then(()=>{
      this.router.navigate(['/']);
    }).catch(error => {
      this.message = error;
    })
  }
}


