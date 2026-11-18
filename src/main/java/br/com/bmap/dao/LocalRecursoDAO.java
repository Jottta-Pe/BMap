package br.com.bmap.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import br.com.bmap.model.LocalRecurso;

public interface LocalRecursoDAO extends JpaRepository<LocalRecurso, Long> {

}