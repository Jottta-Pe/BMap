package br.com.bmap.dto;

public record PreferenciaAcessibilidadeDTO(
    Long idPreferencia,
    Long idUsuario,
    String tipoDeficiencia,
    String necessidade,
    String descricao
) {}
