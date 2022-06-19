import { Injectable } from '@angular/core';
import { Emittable, Emitter } from '@ngxs-labs/emitter';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { User, UserData } from '../models/user-data.model';
import { UserState } from './user.state';

@Injectable()
export class UserStateService {
    @Select(UserState.getUser) readonly user$!: Observable<User>;

    @Emitter(UserState.setUser) readonly setUser!: Emittable<UserData>;
}
