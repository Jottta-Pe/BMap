
package br.com.bmap.bo;

import java.util.List;

import org.springframework.stereotype.Service;

import br.com.bmap.dao.PreferenciaAcessibilidadeDAO;
import br.com.bmap.dao.UsuarioDAO;
import br.com.bmap.model.PreferenciaAcessibilidade;
import br.com.bmap.model.Usuario;

@Service
public class PreferenciaAcessibilidadeBO {

    private final PreferenciaAcessibilidadeDAO preferenciaDAO;
    private final UsuarioDAO usuarioDAO;

    public PreferenciaAcessibilidadeBO(
            PreferenciaAcessibilidadeDAO preferenciaDAO,
            UsuarioDAO usuarioDAO) {
        this.preferenciaDAO = preferenciaDAO;
        this.usuarioDAO = usuarioDAO;
    }

    public List<PreferenciaAcessibilidade> listarTodos() {
        return preferenciaDAO.findAll();
    }

    public PreferenciaAcessibilidade buscarPorId(Long id) {
        return preferenciaDAO.findById(id)
                .orElseThrow(() ->
                    new RuntimeException("Preferencia nao encontrada"));
    }

    public PreferenciaAcessibilidade salvar(
            PreferenciaAcessibilidade preferencia,
            Long idUsuario) {

        Usuario usuario = usuarioDAO.findById(idUsuario)
                .orElseThrow(() ->
                    new RuntimeException("Usuario nao encontrado"));

        preferencia.setUsuario(usuario);

        return preferenciaDAO.save(preferencia);
    }

    public void excluir(Long id) {
        PreferenciaAcessibilidade preferencia = buscarPorId(id);
        preferenciaDAO.delete(preferencia);
    }
}
