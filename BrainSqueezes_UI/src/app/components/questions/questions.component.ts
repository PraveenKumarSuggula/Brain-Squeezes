import { Component, OnInit } from '@angular/core';
import { QandAService } from 'src/app/services/QandA/qand-aservice.service';
import { CommonService } from 'src/app/services/shared/common.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss'],
})
export class QuestionsComponent implements OnInit{
  constructor(private commonService: CommonService, private qandAService: QandAService) {
  }
  //I need a help to create an angular application with detailed explanation. I have clearly recorded a quick video file for more details about my project architecture.Please go through it once!!
  questions = [
    {qid:1,title:'Angular question 1', description: 'description 1', uid:1, authorName: 'surya', categoryId: 3, 
    file_id: '2/650136e6-634c-43a6-ab65-f3c471e7fad5_angular error.png', extension: 'image/jpeg', rating: 14},
    {qid:2,title:'Angular question 2', description: 'description 2', uid:2, authorName: 'prakash', categoryId: 2, 
    file_id: '2/cb619e9c-d5d0-4274-a1bf-ca52314625a5_Aftermarket_FDB_Part-1.pdf', extension: 'image/jpeg', rating: 2},
    {qid:3,title:'Angular question 3', description: 'description 3', uid:3, authorName: 'vyshnav', categoryId: 1, 
    file_id: '2/d181fb68-d994-4dab-9174-a05faff7aa70_pexels_videos_2491285 (2160p).mp4', extension: 'image/jpeg', rating: 3},
    {qid:4,title:'React demo question', description: 'Uploaded a sample video file', uid:4, authorName: 'bharat', categoryId: 4, 
    file_id: '2/e6bbd96d-e614-4b41-a091-d34ff45f6bca_human_feeding_the_little_squirrel (Original).mp4', extension: 'image/jpeg', rating: 4},
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

  ansCount = 0;

  ngOnInit(){
    this.qandAService.getQandAList("Question",2).subscribe(x => console.log(x));
    this.questions = this.questions.sort((a,b) => b.qid - a.qid);
  }

  onAnswersLength(queIndex:number, ansIndex:number): number{
     this.answers[ansIndex].qid == this.questions[queIndex].qid ? this.ansCount++: this.ansCount;
     return this.ansCount;
  }

  onAnswersAvailable(queIndex:any){
    return this.answers.filter((x:any) => x.qid == this.questions[queIndex].qid).length > 0 ? true: false;
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
