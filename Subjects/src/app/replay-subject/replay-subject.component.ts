import { Component, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { SubjectServiceService } from '../subject-service.service';

@Component({
  selector: 'app-replay-subject',
  templateUrl: './replay-subject.component.html',
  styleUrls: ['./replay-subject.component.css']
})
export class ReplaySubjectComponent implements OnInit {

  // subscription

  user2Subscription:Subscription;
  // Data 

  User1List=[
    'Angular',
    'C#',
    'SQLServer'
  ]

  User2List:string[]=[];
  subscribeuser2=false;
  constructor(private service:SubjectServiceService) { 

    this.service.videoEmit$.subscribe(response=>{
      this.User1List.push(response);
    })
  }

  public onVideoAdd(video:any):void
  {
  this.service.videoEmit$.next(video);
  }

  public user2Subscribe():void
  {
   if(this.subscribeuser2)
   {
     this.user2Subscription.unsubscribe();

   }

   else
   {
     this.user2Subscription=this.service.videoEmit$.subscribe(response=>{
       this.User2List.push(response);
     });
   }
   this.subscribeuser2 =!this.subscribeuser2;
  }
  ngOnInit(): void {
  }

}
