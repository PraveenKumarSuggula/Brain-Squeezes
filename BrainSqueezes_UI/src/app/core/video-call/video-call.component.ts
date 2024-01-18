// app-video-call.component.ts

import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-video-call',
  templateUrl: './video-call.component.html',
  styleUrls: ['./video-call.component.scss'],
})
export class AppVideoCallComponent implements OnInit, AfterViewInit {

  ngOnInit(): void {
    console.log("ngOnInit is called");
  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit is called");
    // Place your script here if needed
  }
}
