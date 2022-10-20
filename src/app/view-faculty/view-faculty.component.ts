import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-faculty',
  templateUrl: './view-faculty.component.html',
  styleUrls: ['./view-faculty.component.css']
})
export class ViewFacultyComponent implements OnInit {

  constructor(private myApi:ApiService) {
    this.putFacultyData()
   }

  putFacultyData=()=>{
    this.myApi.getFacultyData().subscribe(
      (data)=>{
        this.facultyData = data
      }
    )
  }
  
  deleteFacultyData=(id:any)=>{
    let data = {
      "id":id
    }
    this.myApi.deleteFacultyData(data).subscribe(
      (response)=>{

      }
    )
    alert("Deleted")
    this.putFacultyData()
  }

  facultyData:any =[]

  ngOnInit(): void {
  }

}
