package br.com.bmap.mapper;

import br.com.bmap.dto.ServicoEspecialidadeDTO;
import br.com.bmap.model.ServicoEspecialidade;

public class ServicoEspecialidadeMapper {
    public static ServicoEspecialidadeDTO toDTO(ServicoEspecialidade s) {
        return new ServicoEspecialidadeDTO(
            s.getServico().getIdServico(),
            s.getEspecialidade().getIdEspecialidade());
    }
}
