import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';
import { AuthModel } from '../models/auth.model';
import { LoginModel } from '../models/login.model';

@Injectable()
export class AuthenticationService {
    constructor(private http: HttpClient) { }

    login(auth: LoginModel) {
        return this.http.post<AuthModel>(`${environment.apiUrl}/Conta/Login`, { nomeUsuario: auth.login, senha: auth.senha })
            .pipe(map(authObj => {
                if (authObj && authObj.jwtToken) {
                    localStorage.setItem('currentAuth', JSON.stringify(authObj));
                }

                return authObj;
            }));
    }

    logout() {
        localStorage.removeItem('currentAuth');
    }
}
