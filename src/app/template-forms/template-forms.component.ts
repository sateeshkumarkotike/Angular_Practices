import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-forms',
  templateUrl: './template-forms.component.html',
  styleUrls: ['./template-forms.component.css']
})
export class TemplateFormsComponent implements OnInit {

  public States = [
    { stateName:"India"},
    { stateName:"China"},
    { stateName:"Japan"},
    { stateName:"America"},
    { stateName:"Russia"}
  ]
     
  constructor() { }

  ngOnInit() {
  }

  formData(userForm){
    console.log(userForm)
  }

}
