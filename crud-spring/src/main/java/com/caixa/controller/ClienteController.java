package com.caixa.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.ResourceAccessException;

import com.caixa.model.Cliente;
import com.caixa.model.Conta;
import com.caixa.repository.ClienteRepository;
import com.caixa.repository.ContaRepository;

// RestController fala pro spring que esta classe possui um ENDPOINT
@RestController
@RequestMapping("/api/clientes")
public class ClienteController {
    // Injeção de dependência
    // @Autowired
    private final ClienteRepository clienteRepository;


    // @Autowired
    // private ContaRepository contaRepository;

    public ClienteController(ClienteRepository clienteRepository) {
      this.clienteRepository = clienteRepository;
    }

    @PostMapping
    public ResponseEntity<Cliente> create(@RequestBody Cliente cliente){
        return ResponseEntity.status(HttpStatus.CREATED).body(clienteRepository.save(cliente));
    }

    @GetMapping
    public String cliente(){
      return "Hello do Controller do Cliente!";
    }

    // @PostMapping("clientes/{id}")
    // public ResponseEntity<Conta> createAccount(@PathVariable Long id, @RequestBody Conta conta){
    //     Cliente cliente = clienteRepository.findById(id).orElseThrow(()-> new ResourceAccessException("Não existe cliente com id: " + id));
    //     conta.setCliente(cliente);
    //     return ResponseEntity.status(HttpStatus.CREATED).body(contaRepository.save(conta));
    // }
}
