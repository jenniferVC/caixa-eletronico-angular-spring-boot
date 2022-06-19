package com.caixa.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.ResourceAccessException;

import com.caixa.model.Conta;
import com.caixa.repository.ContaRepository;

// RestController fala pro spring que esta classe possui um ENDPOINT
@RestController
@RequestMapping("/api/conta")
public class ContaController {

  // Tipo final para garantir que nada modifique esta instância
  private final ContaRepository contaRepository;


  public ContaController(ContaRepository contaRepository) {
    this.contaRepository = contaRepository;
  }

  @GetMapping
  public @ResponseBody List<Conta> list(){
    return contaRepository.findAll();
  }

  @GetMapping("/{id}")
  public ResponseEntity<Conta> findById(@PathVariable Long id){
    Conta conta = contaRepository.findById(id)
    .orElseThrow(()-> new ResourceAccessException("Não existe conta com id: "+id));
    return ResponseEntity.ok(conta);
  }

  @PostMapping
  public ResponseEntity<Conta> create(@RequestBody Conta conta){
    // HttpStatus.CREATED retorna status 201 que indica que objeto foi criado
    // e no corpo passa o objeto conta
    return ResponseEntity.status(HttpStatus.CREATED).body(contaRepository.save(conta));
  }

  @PutMapping("/{id}")
  public ResponseEntity<Conta> operation(@PathVariable Long id, @RequestBody Conta contaDetails){
      Conta c = contaRepository.findById(id)
      .orElseThrow(()-> new ResourceAccessException("Não existe conta com id: "+id));

      c.setNumero(contaDetails.getNumero());
      c.setSaldo(contaDetails.getSaldo());
      c.setSenha(contaDetails.getSenha());

    Conta contaUpdated = contaRepository.save(c);
    return ResponseEntity.ok(contaUpdated);
  }


  /*@PostMapping
  public ResponseEntity<Conta> openConta(@RequestBody Conta conta){
   Conta c = contaRepository.findById(conta.getId())
   .orElseThrow(()-> new ResourceAccessException("Não existe conta"));
   return ResponseEntity.ok(c);
  }*/

}
