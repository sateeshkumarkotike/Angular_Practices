import { Component, OnInit, ViewChild, ComponentFactoryResolver, Input } from '@angular/core';
import { DynamicLoadingDirective } from '../dynamic-componet-loading/dynamic-loading.directive';
import { Test1Component } from '../dynamic-componet-loading/test1/test1.component';
import { Test2Component } from '../dynamic-componet-loading/test2/test2.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  name="string Data"
  event1Data ;
  event2Data ;

  @ViewChild(DynamicLoadingDirective ,{static:true} ) appDynamicLoading:DynamicLoadingDirective;

  constructor(private componetFactoryResolver:ComponentFactoryResolver) { 

  }

  ngOnInit() {
    this.loadComponet();
  }

  loadComponet(){
    const viewContainerRef = this.appDynamicLoading.viewContainerRef;
    viewContainerRef.clear();
     const someNumber = 2;
     if(someNumber > 5){
    const componentFactory = this.componetFactoryResolver.resolveComponentFactory(Test1Component);
   
    const createComponetRef = viewContainerRef.createComponent(componentFactory);
    createComponetRef.instance.test = "test1"
   }else{
    const componentFactory = this.componetFactoryResolver.resolveComponentFactory(Test2Component);
   
    const createComponetRef = viewContainerRef.createComponent(componentFactory);
    createComponetRef.instance.test = "test2"
   }


  }

  name1Event(data:string){
    this.event1Data = data
  }

  name2Event(data:string){
    this.event2Data = data
  }

}
