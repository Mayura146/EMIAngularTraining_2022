import { Component, Input, OnInit, SimpleChange, SimpleChanges } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
@Input() emp: any;
@Input() counterNewValue: number;

currentValue: SimpleChange;
previousValue: SimpleChange;
firstChange: boolean;
  constructor() { 
    console.log(" Child Constructor of Component!!");
  }

  ngOnInit(): void {
    console.log(" Child 2.ngOnInit Invoked of Component");
  }
ngDoCheck()
{
  console.log('1. DoCheck Executed!!!')
}


ngOnChanges( changes: SimpleChanges)
{
  console.log(" Child Something has Changed");
  this.currentValue=changes['counterNewValue'].currentValue;
  this.previousValue=changes['counterNewValue'].previousValue;
  this.firstChange=changes['counterNewValue'].firstChange;

  console.log("success"+this.currentValue);
  console.log("success"+this.previousValue);
  console.log("success"+this.firstChange);

}
ngAfterContentChecked()
{
  console.log('Child 4.ngAfterContentChecked=> Content Checked')
}

ngAfterContentInit()
{
  console.log('Child 3.ngAfterContentInit=>After ContentInit');
}
ngAfterViewInit()
{
  console.log('Child 5. get executed after ngAfterContentChecked=> AfterViewInit');

}
ngAfterViewChecked()
{
  console.log('Child 6. get executed after ngAfterViewInit=> ngAfterViewChecked');

}

ngOnDestroy():void{
  console.log(" Child component Destroyed!!");
}


}
