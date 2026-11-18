package br.com.bmap.mapper;

import br.com.bmap.dto.EspecialidadeDTO;
import br.com.bmap.model.Especialidade;

public class EspecialidadeMapper {
    public static EspecialidadeDTO toDTO(Especialidade e) {
        return new EspecialidadeDTO(e.getIdEspecialidade(), e.getNome(), e.getDescricao());
    }
}
