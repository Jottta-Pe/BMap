package br.com.bmap.mapper;

import br.com.bmap.dto.PreferenciaAcessibilidadeDTO;
import br.com.bmap.model.PreferenciaAcessibilidade;

public class PreferenciaAcessibilidadeMapper {
    public static PreferenciaAcessibilidadeDTO toDTO(PreferenciaAcessibilidade p) {
        return new PreferenciaAcessibilidadeDTO(p.getIdPreferencia(),
            p.getUsuario().getIdUsuario(), p.getTipoDeficiencia(),
            p.getNecessidade(), p.getDescricao());
    }
}
