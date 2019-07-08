import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-student-dialog',
  templateUrl: './add-student-dialog.component.html',
  styleUrls: ['./add-student-dialog.component.scss']
})

export class AddStudentDialogComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  fileSelected = null;
  filesMulti = [];
  isshow = true;
  studentdata = {};

  selectionChange(ev) {
    if (ev.selectedIndex === 2) {
      console.log("hilml");
      const intervalId = setInterval(() => {
        this.isshow = false;
        this.studentdata = {
          id: "1104200754859",
          fullname: "ธีระ ทับฤทธิ์",
          sex: "ชาย",
          birthday: "17 สิงหาคม 2553",
          birthdayplace: "โรงพยาบาลบีแคร์",
          sonorder: "1",
          pediatrician: "แพทย์แผนปัจจุบัน",
          birthweight: "3,160 กรัม",
          fatherfullname: "นายธีรศักดิ์ ทับฤทธิ์",
          fatherid: "3300800165723",
          matherfullname: "นางสาวกันทิมา โสภกุล",
          matherid: "3140200336928",
        };
      }, 3000);
    }
  }
  





  constructor(public dialogRef: MatDialogRef<AddStudentDialogComponent>, private _formBuilder: FormBuilder) { }


  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }
  onNoClick() {
    this.dialogRef.close();

  }
  close() {
    this.dialogRef.close();
  }
  detectFiles(ev) {
    var files: Array<any> = ev.target.files;
    console.log(files.length);
    if (files) {
      this.fileSelected = files[0].name;
      Array.from(files).forEach((file: any) => {
        console.log(file.name);
        this.filesMulti.push(file);
      });

    }

  }



}
