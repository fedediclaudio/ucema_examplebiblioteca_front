import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, Router } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { MainComponent } from './main/main.component';
import { LoansComponent } from './loans/loans.component';
import { ProfileComponent } from './profile/profile.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SectionAComponent } from './profile/section-a/section-a.component';
import { SectionBComponent } from './profile/section-b/section-b.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: MainComponent},
  { path: 'loans', component: LoansComponent},
  { path: 'profile', component: ProfileComponent, children: [
      { path: "section-a", component: SectionAComponent},
      { path: "section-b", component: SectionBComponent},
    ]
  },
  { path: 'contact', component: ContactComponent },
  { path: 'book-details/:isbn', component: BookDetailsComponent},
  { path: 'login', component: LoginComponent},
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
