import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public isLogged = false;

  constructor(public afAuth: AngularFireAuth) {}

  async login(email: string, password: string): Promise<any> {
    try {
      const { user } = await this.afAuth.signInWithEmailAndPassword(email, password);
      return user;
    } catch (error) {
      console.log(error);
      alert('Revisa que tus credenciales sean correctas.')
    }
  }

  async registro(email: string, password: string): Promise<any>{
    try {
      const resp = await this.afAuth.createUserWithEmailAndPassword(email, password);
      return resp
    } catch (error) {
      if (error.code === 'auth/invalid-email') {
        alert('El formato del correo es incorrecto.');
      } else if(error.code === 'auth/weak-password'){
        alert('La contraseña debe tener minimo 6 caracteres.');
      }
      console.log('Error registro',error);      
    }    
  }

  async logout(){
    try {
      await this.afAuth.signOut();
    } catch (error) {
     console.log(error);
    }
  }

  getUserCurrent(){
    return this.afAuth.authState.pipe(first()).toPromise();
  }
}
