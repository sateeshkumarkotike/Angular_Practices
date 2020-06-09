import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms' ;
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { SamsungComponent } from './products/samsung/samsung.component';
import { AppleComponent } from './products/apple/apple.component';
import { IosComponent } from './products/ios/ios.component';
import { CategoriesComponent } from './categories/categories.component';
import { TdformsComponent } from './tdforms/tdforms.component';
import { TemplateFormsComponent } from './template-forms/template-forms.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { Test1Component } from './dynamic-componet-loading/test1/test1.component';
import { Test2Component } from './dynamic-componet-loading/test2/test2.component';
import { DynamicDirective } from './dynamic.directive';
import { DynamicLoadingDirective } from './dynamic-componet-loading/dynamic-loading.directive';
import { HomeComponent } from './home/home.component';
import { HostDirectivesComponent } from './host-binding/host-directives/host-directives.component';
import { TestComponent } from './host-binding/test/test.component';
import { BasicDirective } from './host-binding/basic.directive';
import { JavaScriptPracticesComponent } from './java-script-practices/java-script-practices.component';
import { InputOutputComponent } from './home/input-output/input-output.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ContactComponent,
    ServicesComponent,
    SamsungComponent,
    AppleComponent,
    IosComponent,
    CategoriesComponent,
    TdformsComponent,
    TemplateFormsComponent,
    ReactiveFormsComponent,
    Test1Component,
    Test2Component,
    DynamicDirective,
    DynamicLoadingDirective,
    HomeComponent,
    HostDirectivesComponent,
    TestComponent,
    BasicDirective,
    JavaScriptPracticesComponent,
    InputOutputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule ,
    ReactiveFormsModule ,
    HttpClientModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ Test1Component,Test2Component]
})
export class AppModule { 
  
}
