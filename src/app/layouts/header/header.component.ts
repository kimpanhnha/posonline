import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
 
  constructor(
    ) { }

  ngOnInit() {
  }
// logOut(){
//   this.auth.singOut().then(()=>
//   this.router.navigate(['/login'])
// })
}

