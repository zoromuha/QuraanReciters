import {Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListsComponent } from './lists/lists.component';
import { MessagesComponent } from './messages/messages.component';
import { MemberListComponent } from './member-list/member-list.component';
import { AuthGuard } from './_guards/auth.guard';

export const appRoutes: Routes = [
{path: 'home', component: HomeComponent},
{path: 'lists', component: ListsComponent},
{path: 'messages', component: MessagesComponent},
{path: 'members', component: MemberListComponent, canActivate: [AuthGuard]},
{path: '**', redirectTo: 'home', pathMatch: 'full'},
];
