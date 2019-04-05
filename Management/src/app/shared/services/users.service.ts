import { Injectable } from '@angular/core';
import {IUser} from '../defines/user';
import {AppSettings} from '../helper/app.setting';
import {Observable, of} from "rxjs";
import {catchError, tap} from "rxjs/operators";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from '@angular/router';


@Injectable()
export class UsersService {
    private apiUrl = `${AppSettings.API_ENDPOINT}/admin/users`;
    headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    options = { headers: this.headers, withCredentials: true };
    constructor(
        private _httpService: HttpClient,
        private router: Router) {

    }

    private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            this.router.navigate(['/pages', 'errors']);
            return of(result as T);
        };
    }


}
