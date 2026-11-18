package br.com.bmap.bo;

import java.util.List;

import org.springframework.stereotype.Service;

import br.com.bmap.dao.RelatoAcessibilidadeDAO;
import br.com.bmap.dao.UsuarioDAO;
import br.com.bmap.dao.LocalDAO;
import br.com.bmap.model.RelatoAcessibilidade;
import br.com.bmap.model.Usuario;
import br.com.bmap.model.Local;

@Service
public class RelatoAcessibilidadeBO {

    private final RelatoAcessibilidadeDAO relatoDAO;
    private final UsuarioDAO usuarioDAO;
    private final LocalDAO localDAO;

    public RelatoAcessibilidadeBO(
            RelatoAcessibilidadeDAO relatoDAO,
            UsuarioDAO usuarioDAO,
            LocalDAO localDAO) {

        this.relatoDAO = relatoDAO;
        this.usuarioDAO = usuarioDAO;
        this.localDAO = localDAO;
    }

    public List<RelatoAcessibilidade> listarTodos() {
        return relatoDAO.findAll();
    }

    public RelatoAcessibilidade buscarPorId(Long id) {
        return relatoDAO.findById(id)
                .orElseThrow(() ->
                    new RuntimeException("Relato nao encontrado"));
    }

    public RelatoAcessibilidade salvar(
            RelatoAcessibilidade relato,
            Long idUsuario,
            Long idLocal) {

        Usuario usuario = usuarioDAO.findById(idUsuario)
                .orElseThrow(() ->
                    new RuntimeException("Usuario nao encontrado"));

        Local local = localDAO.findById(idLocal)
                .orElseThrow(() ->
                    new RuntimeException("Local nao encontrado"));

        relato.setUsuario(usuario);
        relato.setLocal(local);

        return relatoDAO.save(relato);
    }

    public void excluir(Long id) {
        RelatoAcessibilidade relato = buscarPorId(id);
        relatoDAO.delete(relato);
    }
}