import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search-student',
  templateUrl: './search-student.component.html',
  styleUrls: ['./search-student.component.css']
})
export class SearchStudentComponent implements OnInit {

  constructor(private myApi:ApiService) { }

  searchValue = ""

  studentData :any

  searchStudent=()=>{
    let data = {
      "name":this.searchValue,
      "admission_no":this.searchValue
    }
    console.log(data)
    this.myApi.searchStudentData(data).subscribe(
      (resp)=>{
        this.studentData = resp
      }
    )
  }

  ngOnInit(): void {
  }

}
