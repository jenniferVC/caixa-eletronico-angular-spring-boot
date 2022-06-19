import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, Observable } from 'rxjs';

import { Course } from '../model/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private readonly API = 'api/courses';

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Course[]>(this.API).pipe(
      // método first() significa que estamos interessado apenas na primera reposta do servidor
      // e assim que obtiver a resposta, a conexão é finalizada
      // e também fazendo a desinscriçõo do observable
      first(),
      //delay(5000),
    );
  }

  findCourseById(id:number): Observable<Course> {
    return this.httpClient.get<Course>(`${this.API}/${id}`);
  }

  save(course: Course) {
    return this.httpClient.post<Course>(this.API, course);
  }

  update(id: number, course: Course): Observable<Object> {
    return this.httpClient.put(`${this.API}/${id}`, course);
  }

  delete(id:number): Observable<Object> {
    return this.httpClient.delete(`${this.API}/${id}`);
  }
}
