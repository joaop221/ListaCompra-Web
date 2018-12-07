import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { GroupModel } from '../models/group.model';
import { Observable, observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class GroupService {
    constructor(private http: HttpClient) { }

    listar(): Observable<Array<GroupModel>> {
        return this.http.post<GroupModel[]>(`${environment.apiUrl}/Grupo/Listar/Meu`, {});
    }

    criar(groupModel: GroupModel) {
        return this.http.post<any>(`${environment.apiUrl}/Grupo`, groupModel).pipe(
            map(res => true),
            catchError(err => of(false))
        );
    }
}
