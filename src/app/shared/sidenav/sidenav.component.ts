import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login/login.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  links = [
    {
      name: "Usuarios",
      url: "usuarios",
      icon: "accessibility"
    },
    {
      name: "Grafica",
      url: "graficas",
      icon: "assessment"
    }
  ]

  constructor(public authService: LoginService, private router: Router) { }

  async ngOnInit() {
    const user = await this.authService.getUserCurrent();
    if (user) {
      this.authService.isLogged = true;
    }
  }

  async logout(){
    try {
      await this.authService.logout();
        this.authService.isLogged = false;
        localStorage.removeItem('accesToken');
        this.router.navigate(['/login']);
    } catch (error) {
      console.log(error);
    }
  }

}
