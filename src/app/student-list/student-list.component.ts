import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddStudentDialogComponent } from '../add-student-dialog/add-student-dialog.component';


@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {
  students = [];
  statuss: status[] = [
    {value: 'pass', viewValue: 'ผ่าน'},
    {value: 'notpass', viewValue: 'ไม่ผ่าน'}
  ];
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
 
  addStudent() {
    if (this.students <= [1]) {
      this.students.push({
        id: "1105425611234",
        fullname: "ธีระ ทับฤทธิ์",
        telno:"0861254723"
      })
    } else {
      this.students.push({
        id: "1105425611234",
        fullname: "ธีระ ทับฤทธิ์",
        telno:"0861254723"
      })
    }
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(AddStudentDialogComponent, {
      width: '1000px',
      // data : this.addStudent()
    });

    dialogRef.afterClosed().subscribe(result => {
     console.log("");
     this.addStudent();
    });
  }
  
}
export interface status {
  value: string;
  viewValue: string;
}
