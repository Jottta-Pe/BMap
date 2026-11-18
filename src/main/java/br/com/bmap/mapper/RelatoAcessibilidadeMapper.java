package br.com.bmap.mapper;

import br.com.bmap.dto.RelatoAcessibilidadeDTO;
import br.com.bmap.model.RelatoAcessibilidade;

public class RelatoAcessibilidadeMapper {
    public static RelatoAcessibilidadeDTO toDTO(RelatoAcessibilidade r) {
        return new RelatoAcessibilidadeDTO(r.getIdRelato(),
            r.getUsuario().getIdUsuario(), r.getLocal().getIdLocal(),
            r.getDescricao(), r.getDataRelato(), r.getStatus());
    }
}
