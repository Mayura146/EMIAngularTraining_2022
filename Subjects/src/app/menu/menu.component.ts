import { Component, OnInit } from '@angular/core';
import { SubjectServiceService } from '../subject-service.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  exclusive: any;
  constructor(private service:SubjectServiceService) { }

  ngOnInit(): void {
    this.service.exclusive$.subscribe(res => {
      this.exclusive = res;
    });
  }

}
