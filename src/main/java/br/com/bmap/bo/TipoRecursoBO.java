package br.com.bmap.bo;

import java.util.List;

import org.springframework.stereotype.Service;

import br.com.bmap.dao.TipoRecursoDAO;
import br.com.bmap.model.TipoRecurso;

@Service
public class TipoRecursoBO {

    private final TipoRecursoDAO tipoRecursoDAO;

    public TipoRecursoBO(TipoRecursoDAO tipoRecursoDAO) {
        this.tipoRecursoDAO = tipoRecursoDAO;
    }

    public List<TipoRecurso> listarTodos() {
        return tipoRecursoDAO.findAll();
    }

    public TipoRecurso buscarPorId(Long id) {
        return tipoRecursoDAO.findById(id)
                .orElseThrow(() -> new RuntimeException("Tipo de recurso não encontrado"));
    }

    public TipoRecurso salvar(TipoRecurso tipoRecurso) {
        return tipoRecursoDAO.save(tipoRecurso);
    }

    public void excluir(Long id) {
        TipoRecurso tipoRecurso = buscarPorId(id);
        tipoRecursoDAO.delete(tipoRecurso);
    }
}