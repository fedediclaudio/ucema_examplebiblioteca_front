import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from 'src/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLogged: boolean = false

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
    this.loginService.getIsLoggedInObservable().subscribe((newValue: boolean) => {
      this.isLogged = newValue
    })
  }

  cerrarSesion() {
    this.loginService.logout()
    this.isLogged = false
    alert("Sesión cerrada correctamente")
    this.router.navigateByUrl('')
  }

}
