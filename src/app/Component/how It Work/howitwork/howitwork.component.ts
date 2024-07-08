import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-howitwork',
  templateUrl: './howitwork.component.html',
  styleUrls: ['./howitwork.component.scss']
})
export class HowitworkComponent implements OnInit {

  constructor() { }
  isLoading = true;
  ngOnInit() {
    // Simulate a delay to show the loader
    setTimeout(() => {
      this.isLoading = false;
    }, 3000); // Change this to your desired loading duration
  }

}
