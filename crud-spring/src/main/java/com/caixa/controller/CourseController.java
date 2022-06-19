package com.caixa.controller;

import java.util.List;

import com.caixa.model.Course;
import com.caixa.repository.CourseRepository;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.ResourceAccessException;

// RestController fala pro spring que esta classe possui um ENDPOINT
@RestController
@RequestMapping("/api/courses")
public class CourseController {

  // Tipo final para garantir que nada modifique esta instância
  private final CourseRepository courseRepository;


  public CourseController(CourseRepository courseRepository) {
    this.courseRepository = courseRepository;
  }

  @GetMapping

  // ResponseBody é responsável por converter o objeto em JSON
  // e assim  fazer ele ser exibido em JSON no browser
  public @ResponseBody List<Course> list(){

    // Retorna tudo da tabela
    // faz um SELECT * FROM tabela
    return courseRepository.findAll();
  }

  @GetMapping("/{id}")
  public ResponseEntity<Course> findById(@PathVariable Long id){
    Course course = courseRepository.findById(id)
    .orElseThrow(()-> new ResourceAccessException("Não existe curso com o id: "+ id));
    return ResponseEntity.ok(course);
  }

  @PostMapping
  public ResponseEntity<Course> create(@RequestBody Course course){
    // HttpStatus.CREATED retorna status 201 que indica que objeto foi criado
    // e no corpo passa o objeto course
    return ResponseEntity.status(HttpStatus.CREATED).body(courseRepository.save(course));
  }

  @PutMapping("/{id}")
  public ResponseEntity<Course> update(@PathVariable Long id, @RequestBody Course detailsCourse){
    Course course = courseRepository.findById(id)
    .orElseThrow(()-> new ResourceAccessException("Não existe curso com o id: "+ id));

    course.setName(detailsCourse.getName());
    course.setCategory(detailsCourse.getCategory());

    Course courseUpdated = courseRepository.save(course);
    return ResponseEntity.ok(courseUpdated);
  }

  @DeleteMapping("/{id}")
  public void delete(@PathVariable Long id){
    Course course = courseRepository.findById(id)
    .orElseThrow(()-> new ResourceAccessException("Não existe curso com o id: "+ id));
    courseRepository.delete(course);
  }
}
