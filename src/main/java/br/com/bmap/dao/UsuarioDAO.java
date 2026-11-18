package br.com.bmap.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import br.com.bmap.model.Usuario;

public interface UsuarioDAO extends JpaRepository<Usuario, Long> {

}