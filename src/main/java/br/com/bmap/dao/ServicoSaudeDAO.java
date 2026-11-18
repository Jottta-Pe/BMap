package br.com.bmap.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import br.com.bmap.model.ServicoSaude;

public interface ServicoSaudeDAO extends JpaRepository<ServicoSaude, Long> {

}