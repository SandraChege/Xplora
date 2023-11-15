import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import {CarouselModule} from '@coreui/angular'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from './footer/footer.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { ContactusComponent } from './contactus/contactus.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { UserbookingsComponent } from './userbookings/userbookings.component';
import { ProfileComponent } from './profile/profile.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { UserreviewComponent } from './userreview/userreview.component';
import { AllusersComponent } from './allusers/allusers.component';
import { AlldestinationsComponent } from './alldestinations/alldestinations.component';
import { DestinationformComponent } from './destinationform/destinationform.component';
import { AdminreviewsComponent } from './adminreviews/adminreviews.component';
import { AdminprofileComponent } from './adminprofile/adminprofile.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AdminbookingsComponent } from './adminbookings/adminbookings.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, NavbarComponent, FooterComponent,  LandingpageComponent, ContactusComponent, LoginComponent, RegisterComponent, UserhomeComponent, UserdashboardComponent, UserbookingsComponent, ProfileComponent, AdmindashboardComponent, AdminhomeComponent, UserreviewComponent, AllusersComponent, AlldestinationsComponent, DestinationformComponent, AdminreviewsComponent, AdminprofileComponent, NotfoundComponent, AdminbookingsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    //CarouselModule
 
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
