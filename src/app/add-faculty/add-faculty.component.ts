import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-faculty',
  templateUrl: './add-faculty.component.html',
  styleUrls: ['./add-faculty.component.css']
})
export class AddFacultyComponent implements OnInit {

  constructor() { }

  name = ""
  department = ""
  designation = ""
  dob = ""
  eduQuali = ""
  address = ""
  phone = ""
  doj= ""

  readValue=()=>{

    let data = {
      "name":this.name,
    "department":this.department,
    "designation":this.designation,
    "dob":this.dob,
    "eduQuali":this.eduQuali,
    "address":this.address,
    "phone":this.phone,
    "doj":this.doj,
    }
    console.log(data)
    this.name = ""
    this.department = ""
    this.designation = ""
    this.dob = ""
    this.eduQuali = ""
    this.address = ""
    this.phone = ""
    this.doj= ""

  }

  ngOnInit(): void {
  }

}
