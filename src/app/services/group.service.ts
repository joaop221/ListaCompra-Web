import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { GroupDetailModel } from '../models/group-detail.model';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { GroupModel } from '../models/group.model';

@Injectable()
export class GroupService {
    constructor(private http: HttpClient) { }

    listar(): Observable<Array<GroupModel>> {
        return this.http.post<GroupModel[]>(`${environment.apiUrl}/Grupo/Listar/Meu`, {});
    }

    criar(groupModel: GroupModel): Observable<boolean> {
        return this.http.post<any>(`${environment.apiUrl}/Grupo`, groupModel).pipe(
            map(res => true),
            catchError(err => of(false))
        );
    }

    detail(id: number): Observable<GroupDetailModel> {
        return this.http.get<GroupDetailModel>(`${environment.apiUrl}/Grupo/${id}`);
    }
}
