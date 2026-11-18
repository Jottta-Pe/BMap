package br.com.bmap.mapper;

import br.com.bmap.dto.ValidacaoDTO;
import br.com.bmap.model.Validacao;

public class ValidacaoMapper {
    public static ValidacaoDTO toDTO(Validacao v) {
        return new ValidacaoDTO(v.getIdValidacao(),
            v.getRelato().getIdRelato(), v.getUsuario().getIdUsuario(),
            v.getTipoValidacao(), v.getDataValidacao());
    }
}
