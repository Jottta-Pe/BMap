
package br.com.bmap.bo;

import java.util.List;

import org.springframework.stereotype.Service;

import br.com.bmap.dao.LocalRecursoDAO;
import br.com.bmap.dao.LocalDAO;
import br.com.bmap.dao.TipoRecursoDAO;
import br.com.bmap.model.Local;
import br.com.bmap.model.LocalRecurso;
import br.com.bmap.model.TipoRecurso;

@Service
public class LocalRecursoBO {

    private final LocalRecursoDAO localRecursoDAO;
    private final LocalDAO localDAO;
    private final TipoRecursoDAO tipoRecursoDAO;

    public LocalRecursoBO(
            LocalRecursoDAO localRecursoDAO,
            LocalDAO localDAO,
            TipoRecursoDAO tipoRecursoDAO) {

        this.localRecursoDAO = localRecursoDAO;
        this.localDAO = localDAO;
        this.tipoRecursoDAO = tipoRecursoDAO;
    }

    public List<LocalRecurso> listarTodos() {
        return localRecursoDAO.findAll();
    }

    public LocalRecurso buscarPorId(Long id) {
        return localRecursoDAO.findById(id)
                .orElseThrow(() ->
                    new RuntimeException("Recurso do local nao encontrado"));
    }

    public LocalRecurso salvar(
            LocalRecurso localRecurso,
            Long idLocal,
            Long idRecurso) {

        Local local = localDAO.findById(idLocal)
                .orElseThrow(() ->
                    new RuntimeException("Local nao encontrado"));

        TipoRecurso tipoRecurso = tipoRecursoDAO.findById(idRecurso)
                .orElseThrow(() ->
                    new RuntimeException("Tipo de recurso nao encontrado"));

        localRecurso.setLocal(local);
        localRecurso.setTipoRecurso(tipoRecurso);

        return localRecursoDAO.save(localRecurso);
    }

    public void excluir(Long id) {
        LocalRecurso localRecurso = buscarPorId(id);
        localRecursoDAO.delete(localRecurso);
    }
}
