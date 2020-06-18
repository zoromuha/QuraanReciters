import { Injectable } from '@angular/core';
import {  CanDeactivate} from '@angular/router';
import { Observable } from 'rxjs';
import { MemberEditComponent } from '../members/member-edit/member-edit.component';


@Injectable({providedIn: 'root'})
export class PreventUnsavedChanges implements CanDeactivate<MemberEditComponent> {
    canDeactivate(
        component: MemberEditComponent,
    ): Observable<boolean>|Promise<boolean>|boolean {
        if (component.editForm.dirty) {
                return confirm('You have changed some data are you sure you want to exit without saving ?');
        }
        return true;
    }
}
