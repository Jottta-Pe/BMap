package br.com.bmap.dto;

public record PreferenciaAcessibilidadeRequestDTO(
    Long idUsuario,
    String tipoDeficiencia,
    String necessidade,
    String descricao
) {}
