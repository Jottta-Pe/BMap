package br.com.bmap.bo;

import java.util.List;

import org.springframework.stereotype.Service;

import br.com.bmap.dao.FavoritoDAO;
import br.com.bmap.dao.UsuarioDAO;
import br.com.bmap.dao.LocalDAO;
import br.com.bmap.model.Favorito;
import br.com.bmap.model.Usuario;
import br.com.bmap.model.Local;

@Service
public class FavoritoBO {

    private final FavoritoDAO favoritoDAO;
    private final UsuarioDAO usuarioDAO;
    private final LocalDAO localDAO;

    public FavoritoBO(
            FavoritoDAO favoritoDAO,
            UsuarioDAO usuarioDAO,
            LocalDAO localDAO) {
        this.favoritoDAO = favoritoDAO;
        this.usuarioDAO = usuarioDAO;
        this.localDAO = localDAO;
    }

    public List<Favorito> listarTodos() {
        return favoritoDAO.findAll();
    }

    public Favorito buscarPorId(Long id) {
        return favoritoDAO.findById(id)
                .orElseThrow(() ->
                    new RuntimeException("Favorito nao encontrado"));
    }

    public Favorito salvar(
            Favorito favorito,
            Long idUsuario,
            Long idLocal) {

        Usuario usuario = usuarioDAO.findById(idUsuario)
                .orElseThrow(() ->
                    new RuntimeException("Usuario nao encontrado"));

        Local local = localDAO.findById(idLocal)
                .orElseThrow(() ->
                    new RuntimeException("Local nao encontrado"));

        favorito.setUsuario(usuario);
        favorito.setLocal(local);

        return favoritoDAO.save(favorito);
    }

    public void excluir(Long id) {
        favoritoDAO.delete(buscarPorId(id));
    }
}