import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.css']
})
export class ViewStudentComponent implements OnInit {

  constructor(private myApi:ApiService) {
    this.putStudentData()
   }

  putStudentData=()=>{
    this.myApi.getStudentData().subscribe(
      (data)=>{
        this.studentData = data
        console.log(data)
      }
    )
  }

  deleteStudentData=(id:any)=>{
    let data = {
      "id":id
    }
    this.myApi.deleteStudentData(data).subscribe(
      (response)=>{

      }
    )
    alert("Deleted successfully")
    this.putStudentData()
  }

  studentData :any= []

  ngOnInit(): void {
  }

}
