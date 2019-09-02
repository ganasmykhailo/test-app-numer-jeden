import { Component, OnInit } from '@angular/core';
import {GithubUserModel} from './models/github-user.model';
import {Subscription} from 'rxjs';
import {SearchUserService} from './services/search-user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.scss']
})
export class SearchUserComponent {

  public userName: string = null;

  public loginName: string = null;

  public gitHubUser: GithubUserModel;

  constructor(private searchUserService: SearchUserService,
              private router: Router) { }

  public searchUser() {
    this.searchUserService.getGitHubUserByName(this.userName).subscribe((user) => this.gitHubUser = user);
  }

  public nameChanges(name: string) {
    this.loginName = name;
  }

  public seeDetail() {
    this.router.navigate(['detail', this.loginName]).then();
  }

}
