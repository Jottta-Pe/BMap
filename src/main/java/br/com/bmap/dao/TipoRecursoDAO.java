package br.com.bmap.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import br.com.bmap.model.TipoRecurso;

public interface TipoRecursoDAO extends JpaRepository<TipoRecurso, Long> {

}