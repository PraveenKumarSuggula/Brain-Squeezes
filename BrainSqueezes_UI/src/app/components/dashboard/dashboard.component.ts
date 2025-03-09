import { Component, OnInit } from '@angular/core';
import { Color } from '@swimlane/ngx-charts';
import { CommonService } from 'src/app/services/shared/common.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  single: any[] = [];
  view: [number, number] = [600, 400]; // Increased size for better visibility

  // Statistics for dashboard
  totalQuestions = 200; // Simulated data
  totalAnswers = 540;
  activeUsers = 35;

  // Chart Options
  xAxisLabel = 'Technology';
  yAxisLabel = 'No. of Questions';
  colorScheme: any | Color = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#3366CC']
  };

  constructor(private commonService: CommonService) {}

  ngOnInit(): void {
    // Chart Data Initialization
    this.single = [
      { name: 'Angular', value: 50 },
      { name: 'Java', value: 80 },
      { name: 'React', value: 65 },
      { name: 'TypeScript', value: 45 },
      { name: 'Python', value: 30 }
    ];
  }

  onSelect(event: any) {
    console.log('Chart Item Selected:', event);
  }

  isQuestionType(isQuestion: boolean) {
    this.commonService.onToggleQandAType(isQuestion);
  }
}
