import { Component } from '@angular/core';
import { CommonService } from './../../services/shared/common.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent {

  lupFileTypes: any;
  expandedIndex: number = -1;
  updatedAnswers: any = [];
  categororizedQues: any = [];
  constructor(private commonService: CommonService) { }

  questions = [ 
    {qid:1,title:'Angular question 1', description: 'description 1', uid:1, authorName: 'surya', categoryId: 3, 
    file_id: '2/650136e6-634c-43a6-ab65-f3c471e7fad5_angular error.png', extension: 'image/jpeg', rating: 14},
    {qid:2,title:'Angular question 2', description: 'description 2', uid:2, authorName: 'prakash', categoryId: 2, 
    file_id: '2/650136e6-634c-43a6-ab65-f3c471e7fad5_angular error.png', extension: 'image/jpeg', rating: 2},
    {qid:3,title:'Angular question 3', description: 'description 3', uid:3, authorName: 'vyshnav', categoryId: 1, 
    file_id: '2/650136e6-634c-43a6-ab65-f3c471e7fad5_angular error.png', extension: 'image/jpeg', rating: 3},
    {qid:4,title:'Angular question 4', description: 'description 4', uid:4, authorName: 'bharat', categoryId: 4, 
    file_id: '2/650136e6-634c-43a6-ab65-f3c471e7fad5_angular error.png', extension: 'image/jpeg', rating: 4},
    {qid:5,title:'Angular question 5', description: 'description 5', uid:5, authorName: 'chiranjeevi', categoryId: 1, 
    file_id: '2/650136e6-634c-43a6-ab65-f3c471e7fad5_angular error.png', extension: 'image/jpeg', rating: 5},
    {qid:6,title:'Angular question 6', description: 'description 6', uid:6, authorName: 'niranjan', categoryId: 1, 
    file_id: '2/650136e6-634c-43a6-ab65-f3c471e7fad5_angular error.png', extension: 'image/jpeg', rating: 8}
  ];

  answers = [
    {aid: 1, description:'answer 1', uid:2, authorName: 'prakash', qid: 1, categoryId:3, 
    file_id:'2/650136e6-634c-43a6-ab65-f3c471e7fad5_angular error.png', extension: 'image/jpeg', rating: 77},
    {aid: 2, description:'answer 2', uid:3, authorName: 'vyshnav', qid: 1, categoryId:3, 
    file_id:'2/650136e6-634c-43a6-ab65-f3c471e7fad5_angular error.png', extension: 'image/jpeg', rating: 2},
    {aid: 3, description:'answer 3', uid:5, authorName: 'chiranjeevi', qid: 2, categoryId:2, 
    file_id:'2/650136e6-634c-43a6-ab65-f3c471e7fad5_angular error.png', extension: 'image/jpeg', rating: 5},
    {aid: 4, description:'answer 4', uid:5, authorName: 'chiranjeevi', qid: 3, categoryId:2, 
    file_id:'2/650136e6-634c-43a6-ab65-f3c471e7fad5_angular error.png', extension: 'image/jpeg', rating: 1},
  ];

  ngOnInit(): void {
    this.lupFileTypes = [
      {cid:1, categoryType: 'Angular', queLen: 0},
      {cid:2, categoryType: 'React', queLen: 0},
      {cid:3, categoryType: 'SQL', queLen: 0},
      {cid:4, categoryType: '.Net Core', queLen: 0},
      {cid:5, categoryType: 'Java', queLen: 0},
    ];
    this.lupFileTypes.forEach((fileType:any) => {
      fileType.queLen = this.questions.filter(x => x.categoryId == fileType.cid).length || 0;
    });
  }

  toggleAccordion(index: number) {
    if (this.expandedIndex === index) {
      this.expandedIndex = -1;
    } else {
      this.expandedIndex = index;
    }
    this.categororizedQues = this.questions.filter(x => x.categoryId == this.lupFileTypes[index].cid) 
  }
  onUpdateAnswersModel(queId:number) {
    this.updatedAnswers = this.answers.filter(x => x.qid == queId);
  }

  isQuestionType(isQuestion: boolean){
    if(isQuestion){
      this.commonService.onToggleQandAType(true);
    }
    else {
      this.commonService.onToggleQandAType(false);
    }
  }
}
