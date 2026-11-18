package br.com.bmap.mapper;

import br.com.bmap.dto.TipoRecursoDTO;
import br.com.bmap.model.TipoRecurso;

public class TipoRecursoMapper {
    public static TipoRecursoDTO toDTO(TipoRecurso t) {
        return new TipoRecursoDTO(t.getIdRecurso(), t.getNome(), t.getDescricao());
    }
}
