package br.com.bmap.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import br.com.bmap.model.Especialidade;

public interface EspecialidadeDAO extends JpaRepository<Especialidade, Long> {

}