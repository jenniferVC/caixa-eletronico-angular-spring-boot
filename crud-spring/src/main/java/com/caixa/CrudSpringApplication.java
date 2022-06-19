package com.caixa;

import com.caixa.model.Cliente;
import com.caixa.model.Course;
import com.caixa.repository.ClienteRepository;
import com.caixa.repository.CourseRepository;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class CrudSpringApplication {

	public static void main(String[] args) {
		SpringApplication.run(CrudSpringApplication.class, args);
	}


  @Bean

  // Será executado assim que a aplicação subir
  CommandLineRunner initDataBase(CourseRepository courseRepository, ClienteRepository clienteRepository){

    // Função Lambda do Java
    return args -> {

      // Indicando que é para limpar os dados antes de iniciar
      // pois dessa forma será inserido novos dados na aplicação
      courseRepository.deleteAll();
      clienteRepository.deleteAll();


      Course c = new Course();
      c.setName("Angular com Spring");
      c.setCategory("front-end");

      Cliente cli = new Cliente();
      cli.setRg(123);
      cli.setCpf(456456);

      courseRepository.save(c);
      clienteRepository.save(cli);
    };
  }

}
