import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {GithubUserModel} from "../../models/github-user.model";

@Component({
  selector: 'app-user-box',
  templateUrl: './user-box.component.html',
  styleUrls: ['./user-box.component.scss']
})
export class UserBoxComponent implements OnInit {

  private _gitHubUser: GithubUserModel;

  @Input('gitHubUser')
  set gitHubUser(user) {
    this._gitHubUser = user;
    this.name.emit(user.login);
  }

  get gitHubUser() {
    return this._gitHubUser;
  }

  @Output() public name: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
