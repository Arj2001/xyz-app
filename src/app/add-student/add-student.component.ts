import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  constructor() { }

  name = ""
  roll_no = ""
  admission_no = ""
  college = ""
  department = ""
  bloodGroup = ""
  dob = ""
  parentName = ""
  parentEmail = ""
  guardianName = ""
  guardianAddress = ""

  readValue=()=>{
    let data = {
      "name":this.name,
      "roll_no":this.roll_no,
      "admission_no":this.admission_no,
      "college":this.college,
      "department":this.department,
      "bloodGroup":this.bloodGroup,
      "dob":this.dob,
      "parentName":this.parentName,
      "parentEmail":this.parentEmail,
      "guardianName":this.guardianName,
      "guardianAddress":this.guardianAddress,
    }

    console.log(data)
  }



  ngOnInit(): void {
  }

}
