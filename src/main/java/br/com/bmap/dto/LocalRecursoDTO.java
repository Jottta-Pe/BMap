package br.com.bmap.dto;

public record LocalRecursoDTO(
    Long idLocalRecurso,
    Long idLocal,
    Long idRecurso,
    String disponivel,
    String observacao
) {}
