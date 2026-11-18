package br.com.bmap.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import br.com.bmap.model.ServicoEspecialidade;
import br.com.bmap.model.ServicoEspecialidadeId;

public interface ServicoEspecialidadeDAO
        extends JpaRepository<ServicoEspecialidade, ServicoEspecialidadeId> {

}