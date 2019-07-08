import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddStudentDialogComponent } from '../add-student-dialog/add-student-dialog.component';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {
  students = [
    // {
    //   fullname: "Teera tublit",
    //   telno : "0638269546",
    // },
    // {
    //   fullname: "Teerasak tublit",
    //   telno : "0638269546",
    // }
  ];
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
  addStudent() {
    this.students.push({
      fullname: "ธีระ ทับฤทธิ์",
      id:"1104200754859",
      telno: "0638269546",
      status: "..."


    });
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(AddStudentDialogComponent, {
      width: '1000px'
    });

    dialogRef.afterClosed().subscribe(result => {
     console.log("");
     this.addStudent();
    });
  }
}
