import { Component, OnInit } from '@angular/core';
//import { Component,ViewChild } from '@angular/core';

@Component({
  selector: 'app-scrol',
  templateUrl: './scrol.page.html',
  styleUrls: ['./scrol.page.scss'],
})
export class ScrolPage implements OnInit {

  items:any = [];
  constructor() {
    for(let i=0;i<200;i++)
    {
      this.items.push(`Item ${i+1}`);
    }
   }

  ngOnInit() {
    

  }

}
