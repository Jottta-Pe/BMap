package br.com.bmap.dto;

import java.time.LocalDateTime;

public record FavoritoRequestDTO(
    Long idUsuario,
    Long idLocal,
    LocalDateTime dataAdicao
) {}
