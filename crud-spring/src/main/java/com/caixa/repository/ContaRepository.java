package com.caixa.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.caixa.model.Conta;

@Repository
public interface ContaRepository extends JpaRepository<Conta, Long> {
}
