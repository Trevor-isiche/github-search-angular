import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api-service/api.service';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {

  user1;
  repos;
  userName: string;

  constructor(public apiservice: ApiService) { }

  ngOnInit() {
  }

}
