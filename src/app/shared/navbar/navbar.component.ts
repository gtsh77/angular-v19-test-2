import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  public url = ""

  constructor(private router:Router) {
    //watch for route url change
    router.events.subscribe((route) => {
      if(route instanceof NavigationEnd){
        console.log(route.url)
        this.url = route.url;
      }      
    });
  }

}
