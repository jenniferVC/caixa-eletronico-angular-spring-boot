import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CourseFormComponent } from './course-form/course-form.component';
import { CoursesComponent } from './courses/courses.component';

const routes: Routes = [
  // quando não tiver nada depois do /courses/...
  // irá redirecionar para o componente courses
  { path: '', component: CoursesComponent },
  { path: 'edit/:id', component: CourseFormComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
