import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {
public kritik:any;
  constructor() { }

  ngOnInit() {
    console.log("Masukkan:  "+ this.kritik)
  }

}
