import { SamplService } from './sampl.service';
import { Component, EventEmitter ,OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  public name:string ="from Categories coomponent";

  @Output('nameChaged') nameChanged  = new EventEmitter<{name:string}>()

  constructor(private sampleService:SamplService) {

  }

  ngOnInit() {
    this.sampleService.getDataFromServer().subscribe(
      (response) => {
        console.log(response)
      } ,
      (error) => {
        console.log(error)
      }
    );
  }

  onAddServer(name){
    console.log('clicked')
    this.nameChanged.emit({name:'stringData'})
  }

  onAddBlueprint(name){

  }

}
