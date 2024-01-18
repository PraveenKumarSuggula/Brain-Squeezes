import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  questionType!: Observable<boolean>;
  observableQueTypeChange = new BehaviorSubject<boolean>(false);
  constructor() {
    this.questionType = this.observableQueTypeChange.asObservable();
   }

  onToggleQandAType(isQuestionType: boolean){
    this.observableQueTypeChange.next(isQuestionType);
  }
}
