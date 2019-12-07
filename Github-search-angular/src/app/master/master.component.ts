import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api-service/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {
  user1;
  repos;
  userName: string;

  constructor(public apiservice: ApiService, private router: Router) {
    
   }

  ngOnInit() {
  }

}
