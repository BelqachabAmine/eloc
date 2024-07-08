import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }
  isLoading = true;

  ngOnInit() {
    // Simulate a delay to show the loader
    setTimeout(() => {
      this.isLoading = false;
    }, 3000); // Change this to your desired loading duration
  }

}
