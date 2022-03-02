import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  employee={
    id:24,
    name:'Mayura',
    location:'Bangalore'
  }
  ShowChild=true;
  counter=0;
 
  constructor() {
    console.log(" ParentConstructor of ParentComponent");
   }

  ngOnInit(): void {
    console.log(" Parentng Oninit of Parent Component");
  }
public  incremenent():void{
  this.counter++;
  console.log(this.counter);
}

public  decrement():void{
  this.counter--;
  console.log(this.counter);
}
hideShowChild()
{
  this.ShowChild=!this.ShowChild;
}
public updateDetails()
{
  this.employee={
    id:56,
    name:'Raghu KS',
    location:'Bangalore'
  }
}

ngAfterViewInit()
{
  console.log('Parent ngAfterViewInit get executed');
}
ngOnchanges()
{
  console.log(" Parent NgOnchanges")
}

ngDoCheck()
{
  console.log(" Parent NfDoCheck")
}
ngAfterContentInit()
{
  console.log(" Parent NgAfterContentInit")
}
ngOnDestroy()
{
  console.log(" Parent NgDestroy");
}
ngAfterViewChecked()
{
  console.log(" Parent ngAfterViewChedked")
}
ngAfterContentChecked()
{
  console.log(" Parent NgafterContentChecked");
}

}
