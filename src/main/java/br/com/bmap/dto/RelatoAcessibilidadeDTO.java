package br.com.bmap.dto;

import java.time.LocalDateTime;

public record RelatoAcessibilidadeDTO(
    Long idRelato,
    Long idUsuario,
    Long idLocal,
    String descricao,
    LocalDateTime dataRelato,
    String status
) {}
