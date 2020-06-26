import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProductsComponent } from './products/products.component';
import { AssessmentComponent } from './assessment/assessment.component';
import { ContactusComponent } from './contactus/contactus.component';


const routes: Routes = [

  {
    path: 'Home',
    component: HomeComponent
  },

  {
    path: 'AboutUs',
    component: AboutUsComponent
  },

  {
    path: 'Products',
    component: ProductsComponent
  },

  {
    path: 'Assessment',
    component: AssessmentComponent
  },

  {
    path: 'ContactUs',
    component: ContactusComponent
  },


  {
    path: '',
    redirectTo: '/Home',
    pathMatch: 'full'
  },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

