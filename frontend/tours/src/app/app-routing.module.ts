import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { UserbookingsComponent } from './userbookings/userbookings.component';
import { ProfileComponent } from './profile/profile.component';
import { UserreviewComponent } from './userreview/userreview.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { AllusersComponent } from './allusers/allusers.component';
import { AlldestinationsComponent } from './alldestinations/alldestinations.component';
import { DestinationformComponent } from './destinationform/destinationform.component';
import { AdminreviewsComponent } from './adminreviews/adminreviews.component';
import { AdminprofileComponent } from './adminprofile/adminprofile.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AdminbookingsComponent } from './adminbookings/adminbookings.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contactus', component: ContactusComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'user', component: UserhomeComponent },
  { path: 'booking', component: UserbookingsComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'userreview', component: UserreviewComponent },
  { path: 'adminhome', component: AdminhomeComponent },
  { path: 'adminusers', component: AllusersComponent },
  { path: 'adminadddestination', component: AlldestinationsComponent },
  { path: 'formdestination', component: DestinationformComponent },
  { path: 'adminreviews', component: AdminreviewsComponent },
  { path: 'adminprofile', component: AdminprofileComponent },
  { path: 'adminbookings', component:AdminbookingsComponent},

  { path: '**', component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
