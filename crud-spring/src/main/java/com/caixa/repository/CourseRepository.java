package com.caixa.repository;

import com.caixa.model.Course;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

// Indica que vai fazer uma conexão com o banco de dados
@Repository                                       //  Entidade, tipo da chave primária
public interface CourseRepository extends JpaRepository<Course, Long>{

}
