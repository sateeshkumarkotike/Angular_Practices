import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {

  public formData:FormGroup  ;
  public name ="dsdsd";

  constructor(private formBuilder:FormBuilder) {

  }

  ngOnInit() {
     this.formData = this.formBuilder.group({
      UserName:[ ,[Validators.required,Validators.minLength(4)]],
       email:[,[Validators.required ,Validators.minLength(4)]],
       address:[],
       Address:this.formBuilder.group({
        city :[,[Validators.required,,Validators.minLength(4)]],
        code:[],
       })
     });
    console.log(this.formData)
  }

  
  get Email() {
    return this.formData.get("email");
  }

  get City() {
    return this.formData.get("Address.city");
  }

  formSubmited(){
    // console.log(this.formData)
    // console.log(this.formBuilder)
  }

}
