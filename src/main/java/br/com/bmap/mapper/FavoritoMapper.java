package br.com.bmap.mapper;

import br.com.bmap.dto.FavoritoDTO;
import br.com.bmap.model.Favorito;

public class FavoritoMapper {
    public static FavoritoDTO toDTO(Favorito f) {
        return new FavoritoDTO(f.getIdFavorito(),
            f.getUsuario().getIdUsuario(), f.getLocal().getIdLocal(),
            f.getDataAdicao());
    }
}
