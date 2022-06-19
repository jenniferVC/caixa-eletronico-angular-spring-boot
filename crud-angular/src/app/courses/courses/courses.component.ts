import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

import { CoursesService } from '../service/courses.service';
import { CourseFormComponent } from './../course-form/course-form.component';
import { Course } from './../model/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  courses$: Observable<Course[]>
  displayedColumns = ['name', 'category', 'actions'];
  courseForm!: CourseFormComponent;

  constructor(
    private coursesService: CoursesService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute) {
    this.courses$ = this.coursesService.list()
      .pipe(
        catchError(error => {
          this.onError('Erro ao carregar cursos.');
          return of([])
        })
      );
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

  ngOnInit(): void {
    this.courses$.subscribe(console.log);
  }

  onAdd() {
    // Ao clicar no botão de adicionar irá redirecionar para o /new
    this.router.navigate(['edit', 0], { relativeTo: this.route });
  }

  onEdit(course: Course) {
    let arrayValuesCourse: any[] = Object.values(course);
    let id: number = arrayValuesCourse[0];

    this.router.navigate(['edit', id], { relativeTo: this.route });

  }

  onDelete(course: Course) {
    let arrayValuesCourse: any[] = Object.values(course);
    let id: number = arrayValuesCourse[0];

    this.coursesService.delete(id).subscribe(() => { this.courses$ = this.coursesService.list() }
    );
  }

}
