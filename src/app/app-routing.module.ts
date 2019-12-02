import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { TemplateFormsComponent } from './template-forms/template-forms.component';
import { TdformsComponent } from './tdforms/tdforms.component';
import { CategoriesComponent } from './categories/categories.component';
import { AppleComponent } from './products/apple/apple.component';
import { SamsungComponent } from './products/samsung/samsung.component';
import { IosComponent } from './products/ios/ios.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { ProductsComponent } from './products/products.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path:'',redirectTo:'/contact' ,pathMatch:'full'},
  { path:'products' ,component:ProductsComponent ,children:[
     { path:'' ,redirectTo:'ios',pathMatch:'full'} ,
     { path:'ios' ,component:IosComponent  } ,
     { path:'samsung' ,component:SamsungComponent } ,
     { path:'apple' ,component:AppleComponent }
   ]
  } ,
  { path:'categories' ,component:CategoriesComponent } ,
  { path:'contact' ,component:ContactComponent } ,
  { path:'services' ,component:ServicesComponent } ,
  { path:'tdforms' ,component:TdformsComponent } ,
  { path:'tdforms' ,component:TdformsComponent } ,
  { path:'templateDrivenFomrs' ,component:TemplateFormsComponent } ,
  { path:'reactive-forms' ,component:ReactiveFormsComponent} ,
  { path:'**' ,redirectTo:'contact' ,pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
