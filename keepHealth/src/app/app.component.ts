import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { CmTometersPipe } from './cm-tometers.pipe';
import { DietComponent } from './diet/diet.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { DietDetailComponent } from './diet/diet-detail/diet-detail.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginComponent,SidebarComponent,CmTometersPipe, DietComponent, HeaderComponent, DietDetailComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'keepHealth';
  showSidebar = true;
constructor(private router : Router){}
  ngOnInit(){
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd && event.url === '/login') {
        this.showSidebar = false; // Hide sidebar on login page
      } else {
        this.showSidebar = true; // Show sidebar on other pages
      }
    });


  }
}
