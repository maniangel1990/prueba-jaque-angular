import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {

  }

  async login(){
    const {email, password} = this.loginForm.value;
    try {
      const user = await this.loginService.login(email, password);
      
      if (user) {
        this.loginService.isLogged = true;
        let token = user.za;
        localStorage.setItem('accesToken', token);
        this.router.navigate(['/usuarios']);
      }
    } catch (error) {
      
    }
    
  }

}
