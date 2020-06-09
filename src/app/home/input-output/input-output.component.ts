import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.css']
})
export class InputOutputComponent implements OnInit {

  @Input('name2') name3 ;
  @Output() name1Event = new EventEmitter<string>();
  @Output() name2Event = new EventEmitter<string>();

  constructor() {
    
   }

  ngOnInit() {
  }

  enter(data:string){
    this.name1Event.emit(data)
  }

  enter2(data:string){
    this.name2Event.emit(data)
  }

}
