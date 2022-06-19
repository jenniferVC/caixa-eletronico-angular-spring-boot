package com.caixa.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Data;

// Data é equivalente ao Getter e Setter
@Data
@Entity
// @Table(name="cursos") usado para definir um nome para a tabela
// do banco de dados,  se o nome da tabela for equivalente ao nome da classe
// pode tirar essa annotation
public class Course {

  // Sinalizando que está será a chave primária
  @Id
  @GeneratedValue(strategy = GenerationType.AUTO) // pois a id será incremental
  private Long id;

  // Tamanho da coluna será de 200 e não aceitará nulos NOT NULL
  @Column(length = 200, nullable = false)
  private String name;

  @Column(length = 10, nullable = false)
  private String category;

}
