package br.com.bmap.dto;

import java.time.LocalDateTime;

public record ValidacaoRequestDTO(
    Long idRelato,
    Long idUsuario,
    String tipoValidacao,
    LocalDateTime dataValidacao
) {}
