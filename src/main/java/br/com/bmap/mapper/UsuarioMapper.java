package br.com.bmap.mapper;

import br.com.bmap.dto.UsuarioDTO;
import br.com.bmap.model.Usuario;

public class UsuarioMapper {
    public static UsuarioDTO toDTO(Usuario u) {
        return new UsuarioDTO(u.getIdUsuario(), u.getNome(), u.getEmail(), u.getStatus());
    }
}
