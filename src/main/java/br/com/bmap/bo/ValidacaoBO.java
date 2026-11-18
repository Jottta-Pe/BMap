package br.com.bmap.bo;

import java.util.List;

import org.springframework.stereotype.Service;

import br.com.bmap.dao.ValidacaoDAO;
import br.com.bmap.dao.RelatoAcessibilidadeDAO;
import br.com.bmap.dao.UsuarioDAO;
import br.com.bmap.model.Validacao;
import br.com.bmap.model.RelatoAcessibilidade;
import br.com.bmap.model.Usuario;

@Service
public class ValidacaoBO {

    private final ValidacaoDAO validacaoDAO;
    private final RelatoAcessibilidadeDAO relatoDAO;
    private final UsuarioDAO usuarioDAO;

    public ValidacaoBO(
            ValidacaoDAO validacaoDAO,
            RelatoAcessibilidadeDAO relatoDAO,
            UsuarioDAO usuarioDAO) {
        this.validacaoDAO = validacaoDAO;
        this.relatoDAO = relatoDAO;
        this.usuarioDAO = usuarioDAO;
    }

    public List<Validacao> listarTodos() {
        return validacaoDAO.findAll();
    }

    public Validacao buscarPorId(Long id) {
        return validacaoDAO.findById(id)
                .orElseThrow(() ->
                    new RuntimeException("Validacao nao encontrada"));
    }

    public Validacao salvar(
            Validacao validacao,
            Long idRelato,
            Long idUsuario) {

        RelatoAcessibilidade relato = relatoDAO.findById(idRelato)
                .orElseThrow(() ->
                    new RuntimeException("Relato nao encontrado"));

        Usuario usuario = usuarioDAO.findById(idUsuario)
                .orElseThrow(() ->
                    new RuntimeException("Usuario nao encontrado"));

        validacao.setRelato(relato);
        validacao.setUsuario(usuario);

        return validacaoDAO.save(validacao);
    }

    public void excluir(Long id) {
        Validacao validacao = buscarPorId(id);
        validacaoDAO.delete(validacao);
    }
}