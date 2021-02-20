import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login/login.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {
  registroForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private registroService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  async onRegistro(){
    const { email, password } = this.registroForm.value;
    try {
      const {user} = await this.registroService.registro(email, password); 
      if (user) {
        this.registroService.isLogged = true;
        let token = user.za;
        localStorage.setItem('accesToken', token);
        this.router.navigate(['/usuarios']);
      }     
    } catch (error) {
      
    }
  }

}
