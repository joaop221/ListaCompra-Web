import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';
import { AuthModel } from '../models/auth.model';

@Injectable()
export class AuthenticationService {
    constructor(private http: HttpClient) { }

    login(auth: AuthModel) {
        return this.http.post<any>(`${environment.apiUrl}/users/authenticate`, { nomeUsuario: auth.login, senha: auth.senha })
            .pipe(map(user => {
                if (user && user.jwtToken) {
                    localStorage.setItem('currentAuth', JSON.stringify(user));
                }

                return user;
            }));
    }

    logout() {
        localStorage.removeItem('currentUser');
    }
}
