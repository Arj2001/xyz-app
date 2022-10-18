import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { ViewStudentComponent } from "./view-student/view-student.component";
import { AddFacultyComponent } from './add-faculty/add-faculty.component';
import { ViewFacultyComponent } from './view-faculty/view-faculty.component';
import { HttpClientModule } from "@angular/common/http";

const addRoute:Routes = [
  {
    path:"",component:LoginComponent
  },
  {
    path:"home",component:HomeComponent
  },
  {
    path:"add-student",component:AddStudentComponent
  },
  {
    path:"view-student",component:ViewStudentComponent
  },
  {
    path:"add-faculty",component:AddFacultyComponent
  },
  {
    path:"view-faculty",component:ViewFacultyComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    AddStudentComponent,
    ViewStudentComponent,
    AddFacultyComponent,
    ViewFacultyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(addRoute),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
