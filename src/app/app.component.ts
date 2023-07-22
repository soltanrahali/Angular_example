import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[DatePipe]
})
export class AppComponent {
  dob: Date = new Date(); // Initialize dob with a Date object

  constructor(){
  
  }
  
  
}
