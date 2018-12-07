import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ListModel } from '../models/list.model';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(private http: HttpClient) { }

  listar(gropId: number): Observable<Array<ListModel>> {
    return this.http.post<ListModel[]>(`${environment.apiUrl}/Lista/Listar/Meu`, {}).pipe(
      map(resp => resp.filter(item => item.grupo.id === gropId)),
      catchError(err => of(err))
    );
  }

  criar(listName: string, groupId: number):  Observable<boolean> {
    return this.http.post<any>(`${environment.apiUrl}/Lista`, { titulo: listName, grupoId: groupId }).pipe(
      map(res => true),
      catchError(err => of(false))
    );
  }
}
