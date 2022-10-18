import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-faculty',
  templateUrl: './view-faculty.component.html',
  styleUrls: ['./view-faculty.component.css']
})
export class ViewFacultyComponent implements OnInit {

  constructor() { }

  facultyData = [
    {'name':'Arun','department':'Civil','designation':'Senior Professor','dob':'1998-05-09','eduQuali':'Phd','address':'house 12','phone':9534278210,'doj':'2022-10-18'},
    {'name':'Pritam','department':'Computer Science','designation':'Professor','dob':'1996-04-24','eduQuali':'Phd','address':'house 23','phone':9571235900,'doj':'2022-05-16'},
    {'name':'Yashmia','department':'Electronics','designation':'Asst. Professor','dob':'1999-03-21','eduQuali':'MSc','address':'house 654','phone':6652001423,'doj':'2022-04-09'},
    {'name':'Sai','department':'Computer Science','designation':'Guest Leture','dob':'1994-05-28','eduQuali':'MCA','address':'house rt34','phone':7230142300,'doj':'2021-12-02'},
    {'name':'Aparana','department':'Mechanical','designation':'Guest Lecture','dob':'1999-09-11','eduQuali':'MTech','address':'house rf5','phone':542973044,'doj':'2022-04-25'},
  ]

  ngOnInit(): void {
  }

}
