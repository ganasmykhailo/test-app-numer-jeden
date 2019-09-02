import { Component, OnInit } from '@angular/core';
import {SearchUserService} from '../../services/search-user.service';
import {ActivatedRoute} from '@angular/router';
import {GithubRepoModel} from '../../models/github-repo.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  public repos: GithubRepoModel[] = [];

  constructor(private searchUserService: SearchUserService,
              private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.searchUserService.getGitHubUserRepo(this.activatedRoute.snapshot.params.name).subscribe((data) => this.repos = data);
  }

  public sortByValue(value: string) {
    if (this.repos.length) {
      this.repos.sort((a, b) => {

        if (a[value] < b[value]) {
          return -1;
        }

        if (a[value] > b[value]) {
          return 1;
        }

        return 0;
      });
    }
  }

}
