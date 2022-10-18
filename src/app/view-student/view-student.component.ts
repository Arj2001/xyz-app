import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.css']
})
export class ViewStudentComponent implements OnInit {

  constructor(private myApi:ApiService) {
    // this.putStudentData()
   }

  // putStudentData=()=>{
  //   this.myApi.getStudentData().subscribe(
  //     (data)=>{
  //       this.studentData = data
  //       console.log(data)
  //     }
  //   )
  // }

  studentData = [
    {'name':'Arjun','roll_no':15,'admission_no':540,'college':'ABC','department':'Computer Science','bloodGroup':'A+','dob':'2001-12-07','parentName':'xyz','parentEmail':'xyz@gmail.com','guardianName':'xyz','guardianAddress':'xyz street'},
    {'name':'Anand','roll_no':11,'admission_no':589,'college':'ABC','department':'Mechanical','bloodGroup':'A-','dob':'2001-05-14','parentName':'xyz','parentEmail':'xyz@gmail.com','guardianName':'xyz','guardianAddress':'xyz street'},
    {'name':'Mia','roll_no':9,'admission_no':420,'college':'ABCDE','department':'Civil','bloodGroup':'O+','dob':'2000-07-25','parentName':'xyz','parentEmail':'xyz@gmaisdf.cn','guardianName':'xyz','guardianAddress':'gami street'},
    {'name':'Honey','roll_no':21,'admission_no':541,'college':'BBEE','department':'Civil','bloodGroup':'AB-','dob':'2000-01-04','parentName':'pqr','parentEmail':'pqr@gmail.com','guardianName':'pqr','guardianAddress':'pqr street'},
    {'name':'John','roll_no':25,'admission_no':600,'college':'BBEE','department':'Electical','bloodGroup':'O-','dob':'2003-06-29','parentName':'mno','parentEmail':'mno@gmailc.pc','guardianName':'mno','guardianAddress':'mno street'},
  ]
  // studentData :any= []

  ngOnInit(): void {
  }

}
