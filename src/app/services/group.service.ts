import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { GroupModel } from '../models/group.model';

@Injectable()
export class GroupService {
    constructor(private http: HttpClient) { }

    listar() {
        return this.http.post<GroupModel[]>(`${environment.apiUrl}/Grupo/Listar/Meu`, {});
    }

}
