package br.com.bmap.mapper;

import br.com.bmap.dto.LocalRecursoDTO;
import br.com.bmap.model.LocalRecurso;

public class LocalRecursoMapper {
    public static LocalRecursoDTO toDTO(LocalRecurso l) {
        return new LocalRecursoDTO(l.getIdLocalRecurso(),
            l.getLocal().getIdLocal(), l.getTipoRecurso().getIdRecurso(),
            l.getDisponivel(), l.getObservacao());
    }
}
