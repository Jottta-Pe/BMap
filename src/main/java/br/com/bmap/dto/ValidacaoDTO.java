package br.com.bmap.dto;

import java.time.LocalDateTime;

public record ValidacaoDTO(
    Long idValidacao,
    Long idRelato,
    Long idUsuario,
    String tipoValidacao,
    LocalDateTime dataValidacao
) {}
