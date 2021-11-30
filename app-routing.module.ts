import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { FormComponent } from './form/form.component';
import { HeaderComponent } from './header/header.component';


const routes: Routes = [
  {path:"",component:HeaderComponent},
  {path:"about",component:AboutComponent},
  {path:"form",component:FormComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
