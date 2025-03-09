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
    {
      qid: 1,
      title: 'How to handle route guards in Angular?',
      description:
        'I need to prevent unauthorized users from accessing certain routes. What is the best way to implement route guards?',
      uid: 1,
      authorName: 'surya',
      categoryId: 3,
      file_id: '2/650136e6-634c-43a6-ab65-f3c471e7fad5_route_guard.png',
      extension: 'image/jpeg',
      rating: 14,
    },
    {
      qid: 2,
      title: 'Angular Change Detection Optimization',
      description:
        'How can I optimize change detection for performance improvement in a large-scale Angular app?',
      uid: 2,
      authorName: 'prakash',
      categoryId: 2,
      file_id: '2/650136e6-634c-43a6-ab65-f3c471e7fad5_change_detection.png',
      extension: 'image/jpeg',
      rating: 12,
    },
    {
      qid: 3,
      title: 'Error: ExpressionChangedAfterItHasBeenCheckedError',
      description:
        "I'm getting this error in my Angular component. How do I fix it?",
      uid: 3,
      authorName: 'vyshnav',
      categoryId: 1,
      file_id: '2/650136e6-634c-43a6-ab65-f3c471e7fad5_error.png',
      extension: 'image/jpeg',
      rating: 9,
    },
    {
      qid: 4,
      title: 'Lazy Loading Modules in Angular',
      description:
        'How can I implement lazy loading for better performance in my Angular application?',
      uid: 4,
      authorName: 'bharat',
      categoryId: 4,
      file_id: '2/650136e6-634c-43a6-ab65-f3c471e7fad5_lazy_loading.png',
      extension: 'image/jpeg',
      rating: 7,
    },
    {
      qid: 5,
      title: 'Best Practices for Angular State Management',
      description:
        'Should I use NgRx or a simpler solution for state management in Angular?',
      uid: 5,
      authorName: 'chiranjeevi',
      categoryId: 1,
      file_id: '2/650136e6-634c-43a6-ab65-f3c471e7fad5_state_management.png',
      extension: 'image/jpeg',
      rating: 15,
    },
    {
      qid: 6,
      title: 'Optimizing Angular Performance for Large Apps',
      description:
        'What are the best strategies to reduce rendering time and improve performance in Angular applications?',
      uid: 6,
      authorName: 'Praveen Suggula',
      categoryId: 1,
      file_id: '2/650136e6-634c-43a6-ab65-f3c471e7fad5_performance.png',
      extension: 'image/jpeg',
      rating: 10,
    },
  ];
  answers = [
    {
      aid: 1,
      description:
        'Use Angular route guards like CanActivate and CanDeactivate. Implement authentication checks in the guard to prevent unauthorized access.',
      uid: 2,
      authorName: 'prakash',
      qid: 1,
      categoryId: 3,
      file_id:
        '2/650136e6-634c-43a6-ab65-f3c471e7fad5_route_guard_solution.png',
      extension: 'image/jpeg',
      rating: 20,
    },
    {
      aid: 2,
      description:
        'For better performance, use ChangeDetectionStrategy.OnPush and trackBy in *ngFor. Also, avoid unnecessary bindings.',
      uid: 3,
      authorName: 'vyshnav',
      qid: 2,
      categoryId: 2,
      file_id:
        '2/650136e6-634c-43a6-ab65-f3c471e7fad5_change_detection_solution.png',
      extension: 'image/jpeg',
      rating: 17,
    },
    {
      aid: 3,
      description:
        "The 'ExpressionChangedAfterItHasBeenCheckedError' usually occurs due to modifying component properties after change detection. Try wrapping updates in setTimeout or using ChangeDetectorRef.detectChanges().",
      uid: 5,
      authorName: 'chiranjeevi',
      qid: 3,
      categoryId: 1,
      file_id: '2/650136e6-634c-43a6-ab65-f3c471e7fad5_error_solution.png',
      extension: 'image/jpeg',
      rating: 14,
    },
    {
      aid: 4,
      description:
        'To enable lazy loading, define your routes using loadChildren and ensure your feature modules are standalone.',
      uid: 5,
      authorName: 'chiranjeevi',
      qid: 4,
      categoryId: 4,
      file_id:
        '2/650136e6-634c-43a6-ab65-f3c471e7fad5_lazy_loading_solution.png',
      extension: 'image/jpeg',
      rating: 11,
    },
    {
      aid: 5,
      description:
        'For small applications, BehaviorSubject and services are enough. For large apps, use NgRx or Akita for better state management.',
      uid: 6,
      authorName: 'niranjan',
      qid: 5,
      categoryId: 1,
      file_id:
        '2/650136e6-634c-43a6-ab65-f3c471e7fad5_state_management_solution.png',
      extension: 'image/jpeg',
      rating: 9,
    },
    {
      aid: 6,
      description:
        'Use lazy loading, OnPush change detection, trackBy in *ngFor, and avoid heavy computations in templates.',
      uid: 2,
      authorName: 'prakash',
      qid: 6,
      categoryId: 1,
      file_id:
        '2/650136e6-634c-43a6-ab65-f3c471e7fad5_performance_solution.png',
      extension: 'image/jpeg',
      rating: 8,
    },
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
