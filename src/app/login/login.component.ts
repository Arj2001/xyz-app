import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private myRoute:Router) { }

  username = ""
  password = ""

  readValue=()=>{
    let data = {
      "username":this.username,
      "password":this.password,
    }
    if(this.username == "admin" && this.password == "admin"){
      this.myRoute.navigate(["/home"]) 
      this.username= ""
      this.password= ""
    }else{
      alert("Invalid credtionals")
    }


  }

  ngOnInit(): void {
  }

}
