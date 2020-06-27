import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild ('home') homearea : ElementRef;
  
  @ViewChild ('aboutUs') aboutUs : ElementRef;
 
  @ViewChild ('products') products : ElementRef;

  @ViewChild ('assessment') assessment : ElementRef;

  @ViewChild ('contactUs') contactUs : ElementRef;

  title = 'TanveeAdeApplication';
  description = 'mockuptest'
 

  scroll(element:number){
    if(element==1)
    this.homearea.nativeElement.scrollIntoView(true);
    else if (element==2)
    this.aboutUs.nativeElement.scrollIntoView(true);
    else if (element==3)
    this.products.nativeElement.scrollIntoView(true);
    else if (element==4)
    this.assessment.nativeElement.scrollIntoView(true);
    else if (element==5)
    this.contactUs.nativeElement.scrollIntoView(true);
    else return;
  }
}
