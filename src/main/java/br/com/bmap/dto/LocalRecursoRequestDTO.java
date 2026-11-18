
package br.com.bmap.dto;

public record LocalRecursoRequestDTO(
    Long idLocal,
    Long idRecurso,
    String disponivel,
    String observacao
) {}
