import {Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListsComponent } from './lists/lists.component';
import { MessagesComponent } from './messages/messages.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { AuthGuard } from './_guards/auth.guard';
import { MemberDetailsComponent } from './members/member-details/member-details.component';
import { MemberDetailResolver } from './_resolvers/member-detail.resolver';
import { MemberListResolver } from './_resolvers/member-list.resolver';
import { MemberEditComponent } from './members/member-edit/member-edit.component';
import { PreventUnsavedChanges } from './_guards/prevent-unsaved-changes.guard';

export const appRoutes: Routes = [
{path: '', component: HomeComponent},
{path: '',
runGuardsAndResolvers: 'always',
canActivate: [AuthGuard],
children: [
{path: 'lists', component: ListsComponent},
{path: 'messages', component: MessagesComponent},
{path: 'members', component: MemberListComponent,
 resolve: {users: MemberListResolver}},
 {path: 'members/edit', component: MemberEditComponent,
canDeactivate: [PreventUnsavedChanges],
 resolve: {users: MemberListResolver}},
{path: 'members/:id', component: MemberDetailsComponent,
 resolve: {user: MemberDetailResolver}},
{path: '**', redirectTo: '', pathMatch: 'full'}
]
}
];
