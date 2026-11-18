package br.com.bmap.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import br.com.bmap.model.RelatoAcessibilidade;

public interface RelatoAcessibilidadeDAO
        extends JpaRepository<RelatoAcessibilidade, Long> {

}