import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { Course } from './../model/course';
import { CoursesService } from './../service/courses.service';


@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent {
  form: FormGroup;
  courseEdit!: Course;
  edit: boolean = false;
  id!: number;
  name!: string;
  category!: string;

  constructor(
    private formBuilder: FormBuilder,
    private service: CoursesService,
    private location: Location,
    private route: ActivatedRoute) {

    const id = route.snapshot.paramMap.get('id');
    this.id = Number(id);

    if (Number(id) !== 0) {
      service.findCourseById(Number(id)).subscribe(obj => {
        this.courseEdit = obj;
        this.form = formBuilder.group({
          name: [obj.name],
          category: [obj.category]
        });
      });

      this.edit = true;
    }
    this.form = formBuilder.group({
      name: [null],
      category: [null]
    });
  }



  onSubmit() {
    if (this.edit === true) {
      console.log(this.form.value);
      this.service.update(this.id, this.form.value).subscribe(console.log);
    }
    else {
      console.log(this.edit);
      this.service.save(this.form.value).subscribe(result => console.log(result));
    }
    this.location.back();
  }

  onCancel() {
    this.location.back();
  }
}
