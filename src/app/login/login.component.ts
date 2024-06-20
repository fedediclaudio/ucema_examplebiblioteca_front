import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Usuario } from 'src/model/Usuario';
import { LoginService } from 'src/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  ok: boolean = true

  formLogin: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  })

  constructor(private loginService:LoginService, private router: Router) {}

  login(): void {
    const val = this.formLogin.value
    this.loginService.login(val.username, val.password).subscribe(
      (resultado) => {
        if(resultado) {
          this.router.navigate(['/'])
        }else {
          this.ok = false
        }
      }
    )
  
  }



  

}
