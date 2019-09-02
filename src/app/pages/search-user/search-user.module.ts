import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchUserRoutingModule } from './search-user-routing.module';
import {SearchUserComponent} from './search-user.component';
import {FormsModule} from '@angular/forms';
import { UserBoxComponent } from './components/user-box/user-box.component';

@NgModule({
  declarations: [SearchUserComponent, UserBoxComponent],
  imports: [
    CommonModule,
    SearchUserRoutingModule,
    FormsModule,
  ]
})
export class SearchUserModule { }
