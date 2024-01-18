import { Component } from '@angular/core';
import { Color } from '@swimlane/ngx-charts';
import { CommonService } from 'src/app/services/shared/common.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  single: any[] = []; // Initialize 'single' with your data
  multi: any[] = [];

  view: [number, number] = [400, 300]; 

  // options
  xAxisLabel = 'Technology';
  yAxisLabel = 'No of Questions';
  colorScheme:any | Color = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  }; ;

  constructor(private commonService: CommonService) {
    // Initialize 'single' with your data
    this.single = [
      { name: 'Angular', value: 15 },
      { name: 'Java', value: 49 },
      { name: 'React', value: 40 },
      {name: 'TypeScript', value: 24 },
      { name: 'Python', value: 15 }
    ];
  }

  onSelect(event: any) {
    console.log(event);
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
