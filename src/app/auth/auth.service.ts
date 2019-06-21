import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
    providedIn: 'root'
})
export class AuthService{

    constructor(private authFire:AngularFireAuth,
        private router:Router
        ){}
        

authRef(){
    return this.authFire.auth;

    }
    signInWithEmailAndPassword(email,password){
      return this.authFire.auth.signInWithEmailAndPassword(email,password)
       
    }
    // signOut(){
    //     return this.authFire.signOut();
    //   }
}