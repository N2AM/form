import { Injectable, Injector } from '@angular/core';
import { EmitterAction, Receiver } from '@ngxs-labs/emitter';
import { Selector, State, StateContext } from '@ngxs/store';
import { Observable, tap } from 'rxjs';
import { User, UserData } from '../models/user-data.model';
import { UserDataService } from '../services/user-data.service';

export const DEFAULT_USER_STATE: User = {
    _id: '',
    firstName: '',
    lastName: '',
    email: '',
}

@State<User>({
    name: 'USerState',
    defaults: DEFAULT_USER_STATE,
})
@Injectable()

export class UserState {
    private static userDataService: UserDataService;
    constructor(injector: Injector) {
        UserState.userDataService = injector.get(UserDataService);
    }

    @Selector()
    public static getUser(state: User): User {
        return state;
    }

    @Receiver({ type: '[User] add new user' })
    public static setUser(
        ctx: StateContext<User>,
        { payload }: EmitterAction<UserData>
    ): Observable<User> {
        return this.userDataService.setUserData$(payload).pipe(
            tap((user: User) => {
                ctx.patchState(user);
            })
        );
    }
}
