package com.caixa.repository;

import org.springframework.stereotype.Repository;

import com.caixa.model.Cliente;

import org.springframework.data.jpa.repository.JpaRepository;

@Repository
public interface ClienteRepository extends JpaRepository<Cliente, Long>{
    
}
