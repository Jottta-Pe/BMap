package br.com.bmap.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import br.com.bmap.model.Local;

public interface LocalDAO extends JpaRepository<Local, Long> {

}
