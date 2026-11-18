package br.com.bmap.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import br.com.bmap.model.Favorito;

public interface FavoritoDAO extends JpaRepository<Favorito, Long> {

}