import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  getStudentData=()=>{
    return this.http.get("http://localhost:8080/studentView");
  }
  postStudentData=(data: any)=>{
    return this.http.post("http://localhost:8080/studentAdd",data)
  }
  deleteStudentData=(id:any)=>{
    return this.http.post("http://localhost:8080/studentDelete",id)
  }
  getFacultyData=()=>{
    return this.http.get("http://localhost:8080/facultyView");
  }
  postFacultyData=(data: any)=>{
    return this.http.post("http://localhost:8080/facultyAdd",data)
  }
  deleteFacultyData=(id:any)=>{
    return this.http.post("http://localhost:8080/facultyDelete",id)
  }
  searchFacultyData=(search:any)=>{
    return this.http.post("http://localhost:8080/searchFaculty",search)
  }
  searchStudentData=(search:any)=>{
    return this.http.post("http://localhost:8080/searchStudent",search)
  }
}
