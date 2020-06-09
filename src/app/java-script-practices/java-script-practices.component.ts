import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-java-script-practices',
  templateUrl: './java-script-practices.component.html',
  styleUrls: ['./java-script-practices.component.css']
})
export class JavaScriptPracticesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
        var arr = [2, 5, 6, 3, 8, 9]; 

        let newArray = arr.map((value,index) =>{
          return { value:index ,val:value*value}
        })
          
        var newArr = arr.map(function(val, index){ 
            return {key:index, value:val*val}; 
        }) 
          
        console.log(newArr) 
          
  }

}
