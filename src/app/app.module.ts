import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { WelcomeCardComponent } from './main/welcome-card/welcome-card.component';
import { BookListComponent } from './main/book-list/book-list.component';
import { BookInfoComponent } from './main/book-list/book-info/book-info.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { LoansComponent } from './loans/loans.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SectionAComponent } from './profile/section-a/section-a.component';
import { SectionBComponent } from './profile/section-b/section-b.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { LibroService } from 'src/services/libro.service';
import { UsuarioService } from 'src/services/usuario.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { AuthInterceptor } from 'src/intereceptors/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    WelcomeCardComponent,
    BookListComponent,
    BookInfoComponent,
    ProfileComponent,
    LoansComponent,
    ContactComponent,
    NotFoundComponent,
    SectionAComponent,
    SectionBComponent,
    BookDetailsComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
