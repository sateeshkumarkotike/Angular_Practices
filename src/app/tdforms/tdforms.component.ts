import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Options } from 'selenium-webdriver/ie';

@Component({
  selector: 'app-tdforms',
  templateUrl: './tdforms.component.html',
  styleUrls: ['./tdforms.component.css']
})
export class TdformsComponent implements OnInit {

  @ViewChild('userForm',{static: false})  userform:NgForm ;

  constructor() { }

  ngOnInit() {
    // console.log(ngForm);
  }

  userformData(userformData){
    console.log(userformData);
    this.userform.reset()
  }

}
