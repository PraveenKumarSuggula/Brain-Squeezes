import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  isMenuToggled = false;
  userLoggedIn = false;
  onMenuShow = false;

  constructor(private router: Router,private authService: AuthenticationService) {    
    this.router.events.pipe(filter((event:any) => event instanceof NavigationEnd)).subscribe((event: any) => {
      this.onMenuShow = event.urlAfterRedirects.includes("/login") || event.urlAfterRedirects.includes("/signup") ? false: true;
    });
    this.authService.userLoggedIn.subscribe(x => this.userLoggedIn = x);
  }

  ngOnInit(): void {
  }

  onMenuToggled() {
    if (!this.isMenuToggled) {
      document.getElementById('accordionSidebar')?.classList.add('toggled');
      this.isMenuToggled = true;
    } else {
      document.getElementById('accordionSidebar')?.classList.remove('toggled');
      this.isMenuToggled = false;
    }
  }
}
