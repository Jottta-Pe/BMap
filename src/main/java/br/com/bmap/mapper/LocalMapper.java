package br.com.bmap.mapper;

import br.com.bmap.dto.LocalDTO;
import br.com.bmap.model.Local;

public class LocalMapper {
    public static LocalDTO toDTO(Local l) {
        return new LocalDTO(l.getIdLocal(), l.getNome(), l.getCategoria(),
            l.getEndereco(), l.getLatitude(), l.getLongitude(), l.getDescricao());
    }
}
