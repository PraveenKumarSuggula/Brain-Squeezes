import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { QandAService } from 'src/app/services/QandA/qand-aservice.service';
import { CommonService } from 'src/app/services/shared/common.service';

@Component({
  selector: 'app-qanda-popup',
  templateUrl: './qanda-popup.component.html',
  styleUrls: ['./qanda-popup.component.scss'],
})
export class QandAPopupComponent implements OnInit {
  selectedCategoryType: {name: string, id: string} = {name: '* Select Category', id: '0'};
  lupFileTypes: any;
  selectedFiles: any = [];
  formvalid: boolean = false;
  QandAForm:FormGroup = this.fb.group({
    title: ['', [Validators.required]],
    description: ['', [Validators.required]],
    category: ['', Validators.required],
    file: ['']
    });
  type_question:boolean = true;

  constructor(private toastr: ToastrService,private fb: FormBuilder,private qandAService:QandAService, private commonService: CommonService) {
    this.commonService.questionType.subscribe(x => this.type_question = x);
  }

  ngOnInit(): void {
    this.lupFileTypes = [
      { id: 1, categoryType: 'Angular', ratings: 112 },
      { id: 2, categoryType: 'React', ratings: 6 },
      { id: 3, categoryType: 'SQL', ratings: 22 },
      { id: 4, categoryType: '.Net Core', ratings: 44 },
      { id: 5, categoryType: 'Java', ratings: 55 },
    ];
  }

  onCategoryTypeClick(value: string, id:any) {
    this.selectedCategoryType.name = value;
    this.selectedCategoryType.id = id;
    this.QandAForm.controls['category'].setValue(id);
    return false;
  }

  UploadDraggedFiles(draggedFilesList: File[]): void {
    if (
      draggedFilesList != null &&
      draggedFilesList !== undefined &&
      draggedFilesList.length > 0
    ) {
      this.ValidateFilesList(draggedFilesList);
    }
  }

  filesSize(filesize: any) {
    let selectedfilesize = filesize.size / 1024;
    let filesizetype = Number.parseFloat(selectedfilesize.toFixed(2)) + ' KB';
    if (selectedfilesize > 1024) {
      selectedfilesize = selectedfilesize / 1024;
      filesizetype = Number.parseFloat(selectedfilesize.toFixed(2)) + ' MB';
    }
    return filesizetype;  
  }

  OnFileUpload(selectedFile: any) {
    if (
      selectedFile != null &&
      selectedFile !== undefined &&
      selectedFile.length > 0
    ) {
      this.ValidateFilesList(selectedFile);
    }
  }

  ValidateFilesList(files: any) {
    for (const file of files) {
      if (
        file.type == 'image/jpg' ||
        file.type == 'image/jpeg' ||
        file.type == 'image/png' ||
        file.type == 'application/pdf' ||
        file.type == 'video/mp4' ||
        file.type == 'video/mp3' ||
        file.type ==
          'application/vnd.openxmlformats-officedocument.wordprocessingml.document' ||
        file.type == 'application/vnd.ms-excel' ||
        file.type ==
          'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
      ) {
        this.selectedFiles.push(file);
      } else {
        this.toastr.error('Invalid File Type');
      }
    }
    this.QandAForm.controls['file'].setValue(this.selectedFiles[0]);
  }

  dismissParentPopups(){
    let answersModel:any = document.getElementsByClassName('modal-backdrop');
    if(answersModel.length > 0){
      Object.keys(answersModel).forEach(item => {
        answersModel[item].classList.remove('modal-backdrop');
      })
    }
  }

  submitQandA() {
    // upload image along with question
    if (this.QandAForm.invalid) {
      this.formvalid = true;
    }
    else{
      console.log(this.QandAForm.value);
      const userID = localStorage.getItem('userID')?.toString();
      const formdata = new FormData();
      formdata.append("file", this.QandAForm.value.file);
      formdata.append("uid", userID ? userID: '1');
      formdata.append("qid", "5"); // need to remove and set int with auto increment in sql using identity
      formdata.append("categoryId", this.selectedCategoryType.id);
      formdata.append("title", this.QandAForm.value.title);
      formdata.append("description", this.QandAForm.value.description);
      this.qandAService.UploadDocumentData(formdata).subscribe(res => {
        if (res.errors && res.errors.length > 0) {
          this.toastr.error(res.errors[0]);
        }
        else {
          this.toastr.success(res.message, "Success");
          let closeQandA = document.getElementById('closeQandA');
          if(closeQandA){
            closeQandA.click();
          }
          //this.submittedObject = formdata;
        }
      });
    }
  }
}
