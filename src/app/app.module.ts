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
    ReactiveFormsComponent
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
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
