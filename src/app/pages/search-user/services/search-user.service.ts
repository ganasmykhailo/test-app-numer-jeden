import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {GithubUserModel} from '../models/github-user.model';
import {first, map} from 'rxjs/operators';
import {GithubRepoModel} from '../models/github-repo.model';

@Injectable({
  providedIn: 'root'
})
export class SearchUserService {

  constructor(private http: HttpClient) { }

  public getGitHubUserByName(name: string): Observable<GithubUserModel> {
    const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `token ${environment.gitHubApi.token}`
      }
    );

    return this.http.get<GithubUserModel>(`${environment.gitHubApi.url}/users/${name}`, {headers}).pipe(
      map((response) => {
        const obj: GithubUserModel = {
          id: response.id,
          name: response.name,
          company: response.company,
          email: response.email,
          followers: response.followers,
          updated_at: response.updated_at,
          avatar_url: response.avatar_url,
          login: response.login,
        };

        return obj;
      }),
      first()
    );
  }

  public getGitHubUserRepo(userName: string): Observable<any> {
    const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `token ${environment.gitHubApi.token}`
      }
    );

    return this.http.get<GithubRepoModel[]>(`${environment.gitHubApi.url}/users/${userName}/repos`, {headers}).pipe(
      map((response) => {
        const objArray: GithubRepoModel[] = [];
        response.forEach((item) => {
          const obj: GithubRepoModel = {
            name: item.name,
            description: item.description,
            url: item.url,
            forks_count: item.forks_count,
            watchers_count: item.watchers_count
          };

          objArray.push(obj);
        });

        return objArray;
      }),
      first()
    );
  }
}
