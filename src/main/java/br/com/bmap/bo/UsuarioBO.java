
package br.com.bmap.bo;

import java.util.List;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import br.com.bmap.dao.UsuarioDAO;
import br.com.bmap.model.Usuario;

@Service
public class UsuarioBO {

    private final UsuarioDAO usuarioDAO;
    private final PasswordEncoder passwordEncoder;

    public UsuarioBO(UsuarioDAO usuarioDAO, PasswordEncoder passwordEncoder) {
        this.usuarioDAO = usuarioDAO;
        this.passwordEncoder = passwordEncoder;
    }

    public List<Usuario> listarTodos() {
        return usuarioDAO.findAll();
    }

    public Usuario buscarPorId(Long id) {
        return usuarioDAO.findById(id)
                .orElseThrow(() -> new RuntimeException("Usuario nao encontrado"));
    }

    public Usuario cadastrar(Usuario usuario) {
        if (usuario.getSenhaHash() == null || usuario.getSenhaHash().isBlank()) {
            throw new IllegalArgumentException("A senha e obrigatoria");
        }

        usuario.setSenhaHash(
                passwordEncoder.encode(usuario.getSenhaHash())
        );

        return usuarioDAO.save(usuario);
    }

    public Usuario atualizar(Usuario usuario, String novaSenha) {
        if (novaSenha != null && !novaSenha.isBlank()) {
            usuario.setSenhaHash(
                    passwordEncoder.encode(novaSenha)
            );
        }

        return usuarioDAO.save(usuario);
    }

    public void excluir(Long id) {
        Usuario usuario = buscarPorId(id);
        usuarioDAO.delete(usuario);
    }
}
