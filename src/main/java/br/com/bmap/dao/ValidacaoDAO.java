package br.com.bmap.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import br.com.bmap.model.Validacao;

public interface ValidacaoDAO extends JpaRepository<Validacao, Long> {

}