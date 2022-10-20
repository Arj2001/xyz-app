import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search-faculty',
  templateUrl: './search-faculty.component.html',
  styleUrls: ['./search-faculty.component.css']
})
export class SearchFacultyComponent implements OnInit {

  constructor(private myApi:ApiService) { }

  name = ""

  facultyData :any

  searchFaculty=()=>{
    let data = {
      "name":this.name
    }
    console.log(data)
    this.myApi.searchFacultyData(data).subscribe(
      (resp)=>{
        this.facultyData = resp
      }
    )
  }
  ngOnInit(): void {
  }

}
