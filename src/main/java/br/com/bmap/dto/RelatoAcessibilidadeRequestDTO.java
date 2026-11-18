package br.com.bmap.dto;

import java.time.LocalDateTime;

public record RelatoAcessibilidadeRequestDTO(
    Long idUsuario,
    Long idLocal,
    String descricao,
    LocalDateTime dataRelato,
    String status
) {}