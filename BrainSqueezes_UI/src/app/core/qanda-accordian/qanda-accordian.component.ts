import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QandAService } from 'src/app/services/QandA/qand-aservice.service';
import { CommonService } from 'src/app/services/shared/common.service';

@Component({
  selector: 'app-qanda-accordian',
  templateUrl: './qanda-accordian.component.html',
  styleUrls: ['./qanda-accordian.component.scss']
})
export class QandaAccordianComponent implements OnInit{

  bookmarked:boolean = false;
  rateUp: 'voted' | 'not-voted' = 'not-voted';
  rateDown: 'voted' | 'not-voted' = 'not-voted';
  upvoteCount: number = 0;
  expandedIndex: number = -1;
  bodyHeight: number = 500;
  @Input() question_type: boolean = true;
  @Input() data: any = {};

  constructor(private router: Router,private commonService: CommonService, private qandAService: QandAService) {
  }
  ngOnInit(){
    this.upvoteCount = this.data.rating;
  }

  toggleAccordion(index: number) {
    if (this.expandedIndex === index) {
      this.expandedIndex = -1;
    } else {
      this.expandedIndex = index;
    }
  }

  onRateUp() {
    if (this.rateUp === 'not-voted') {
      this.rateUp = 'voted';
      this.upvoteCount++;
    }
  }

  notRateUp() {
    if (this.rateUp === 'voted') {
      this.rateUp = 'not-voted';
      this.upvoteCount--;
    }
  }

  onRateDown() {
    if (this.rateDown === 'not-voted') {
      this.rateDown = 'voted';
      // Decrement the upvote count
      this.upvoteCount--;
    }
  }

  notRateDown() {
    if (this.rateDown === 'voted') {
      this.rateDown = 'not-voted';
      // Increment the upvote count
      this.upvoteCount++;
    }
  }

  onBookmark() {
    this.bookmarked = !this.bookmarked;
  }

  toggleQandAType(isQuestion: boolean){
    if(isQuestion){
      this.commonService.onToggleQandAType(true);
    }
    else {
      this.commonService.onToggleQandAType(false);
    }
  }

  downloadFile(type: string, file_id: string){
    //let type = 'question';
    //let file_id = '2/650136e6-634c-43a6-ab65-f3c471e7fad5_angular error.png';
    this.qandAService.GetSelectedDocumentData(type, file_id)
    .subscribe(x => {
      const a = document.createElement('a');
      a.href = x.result;
      a.download = file_id.split('_').slice(1).join('_');
      a.style.display = 'none';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    });
  }

  previewFile(type: string, file_id: string){
    this.qandAService.GetSelectedDocumentData('question', '2/650136e6-634c-43a6-ab65-f3c471e7fad5_angular error.png')
    .subscribe(x => {
      var image = new Image();
      image.src = x.result;
      image.width = 1000;
      image.height = 500;
      var w = window.open("", '_blank');
      w?.document.write(image.outerHTML);
    });
  }

  // callVideoService(){
  //   this.router.navigate(['/videocall']);
  // }
}
