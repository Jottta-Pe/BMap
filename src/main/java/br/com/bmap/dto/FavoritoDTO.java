package br.com.bmap.dto;

import java.time.LocalDateTime;

public record FavoritoDTO(
    Long idFavorito,
    Long idUsuario,
    Long idLocal,
    LocalDateTime dataAdicao
) {}
